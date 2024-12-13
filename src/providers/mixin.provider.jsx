"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStore } from '@/redux/store';
import { api,apiContext } from '@/libs/axios';
import { useRouter,useSearchParams } from 'next/navigation';
import serviceProvider from './service.provider';
import sidemenuProvider from './sidemenu.provider';
import apiProvider from './api.provider';
import Emitter from './emit.provider';

const MixinContext = createContext();
const $emiter = new Emitter();

export function useApi(name,config) {
    const { root="",setState=()=>('') } = config;
    config.key = config.key || name;
    const [lstate,setLState] = useState({loading:false,response:null,error:null});
    const apiInstance = root?api[root]:api; 
    const apiObject = apiProvider[name];
    const callApi = (params)=>{
        if(lstate.loading) { return lstate.promise; }
        lstate.loading = true;
        let promise = new Promise((res,rej)=>{
            setLState((v)=>({...v,loading:true}));//url, params, config = {}
            apiInstance[apiObject.method](apiObject.path,{...(apiObject?.params),...params},{...(apiObject?.config)}).then((response)=>{
                setLState((v)=>({...v,response,loading:false}));
                setState((v)=>({...v,[config.key]:response}));
                res(response);
            }).catch((error)=>{
                setLState((v)=>({...v,error,loading:false}));
                rej(error);
            });
        });
        setLState(v=>({...v,promise}));
        return promise;
    }
    
    return { callApi, ...lstate};
}

export function MixinProvider({ children }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const methods = serviceProvider.methods;
    const $store = useSelector((state) => state.root);
    const dispatch = useDispatch();
    const setStoreMethod = (name,value)=>{
        let dispatchPayload = null;
        if(typeof name == "string") { 
            dispatchPayload = setStore({name,value}) 
        } else { 
            dispatchPayload = setStore(name);  
        }
        dispatchPayload && dispatch(dispatchPayload);
    };
    apiContext.service = serviceProvider;
    serviceProvider.methods = Object.assign({api,$store,setStore:setStoreMethod},methods);
    console.log({router});
    const readables = {
        sidemnu:sidemenuProvider,
        api,
        service:serviceProvider,
        $store,
        setStore:setStoreMethod,
        $emit: $emiter,
        router,
        query:searchParams,
        useApi
    };
    const setComponent = (name,node={})=>{
        globalThis[name] = {
            ...readables,
            ...node
        };
        return globalThis[name];
    }
    const payload = {
        ...readables,
        setComponent
    };
    useEffect(()=>{
        globalThis.api = api;
        globalThis.service = serviceProvider;
        globalThis.setStore = setStore;
    },[]);
    return (
        <MixinContext.Provider value={payload}>
            {children}
        </MixinContext.Provider>
    );
}

export function useMixin() {
    return useContext(MixinContext);
}


