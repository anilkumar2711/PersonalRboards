export default class Emitter {
    constructor() {
        this.listners = {};
        this.nodes = {};
        this.nodecallbacks = {};
        this.emittedData = {};
        this.pendingcallbacks = {};
        this.rootName = "root";
    }

    setRootname(name) {
        this.rootName = name;
    }

    remove(key) {
        delete this.listners[key];
    }

    removeAllListeners() {
        this.listners = {};
        this.nodes = {};
        this.nodecallbacks = {};
        this.emittedData = {};
    }

    removeTriggerByNode(node) {
        Object.keys(this.nodes).forEach((key) => {
            this.nodes[key] = this.nodes[key].filter((n) => n !== node);
        });
    }

    onTrigger(key, callback = null,node = null) {
        this.nodes[key] = this.nodes[key] ? this.nodes[key] : [];
        let emitedData = this.emittedData[key];
        let cachedevents = [];
        if (node) {
            cachedevents = node?.cachedevents || [];
            if(callback) {
                node.triggercallbacks = node.triggercallbacks || {};
                node.triggercallbacks[key] = callback;
            }
            if (!this.nodes[key].includes(node)) {
                this.nodes[key].push(node);
            }
        }
        if (callback) {
            let tochedNodes = this.nodes[key];
            this.nodecallbacks[key] = callback;
            if(!tochedNodes.length) {
                tochedNodes.push({});
            }
        }
        if (emitedData && emitedData.triggred && cachedevents.includes(key)) {
            callback(...emitedData.params);
        }
    }

    on(key, callback) {
        this.listners[key] = callback;
    }

    haslistner(key) {
        return !!this.listners[key];
    }

    isEmitted(key, callback = null) {
        let pendindstack = this.pendingcallbacks[key] || [];
        let istriggred = !!this.emittedData[key] && this.emittedData[key].triggred;
        if (istriggred && typeof callback === "function") {
            callback(this.emittedData[key]);
        } else if (typeof callback === "function") {
            pendindstack.push(callback);
            this.pendingcallbacks[key] = pendindstack;
        }
        return istriggred;
    }

    inValidateEmit(key) {
        if (this.emittedData[key]) {
            this.emittedData[key].triggred = false;
        }
    }

    trigger(key,...arg) {
        return this.triggerWithName(key, this.rootName, ...arg);
    }

    triggerWithName(key, name, ...arg) {
        let callback = this.listners[key] || (() => (''));
        let tochedNodes = this.nodes[key] || [];
        let triggredTime = new Date().getTime();
        console.log(`${key} Emmit By ${name}`, { triggredTime, tochedNodes });
        let results = tochedNodes.map((node) => {
            let triggercallbacks = node.triggercallbacks || {};
            let nodecall = triggercallbacks[key] || this.nodecallbacks[key] || node[key];
            if (nodecall instanceof Function) {
                let ret = nodecall.bind(node)(...arg);
                return ret;
            }
        });
        this.emittedData[key] = {
            triggred: true,
            name:name,
            params: arg
        };
        let ret = callback(...arg);
        let pendindstack = this.pendingcallbacks[key] || [];
        this.pendingcallbacks[key] = pendindstack.filter((pcall) => {
            pcall(this.emittedData[key]);
            return false;
        });
        return new Promise((resolveMain) => {
            Promise.all([ret, results.filter((v) => v)])
                .then((...args) => {
                    if (ret instanceof Promise) {
                        ret.then((val) => resolveMain([val, ...(args.slice(1))]));
                    } else {
                        resolveMain(ret);
                    }
                });
        });
    }
}
