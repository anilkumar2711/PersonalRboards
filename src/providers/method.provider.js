export default {
    login(data={
        "email": "anilkumarkrishna027@gmail.com",
        "password": "1234@anil"
      }) {
        return new Promise((resolve,reject)=>{
            this.api.main.post("/auth/login",data).then((response)=>{
                localStorage.setItem('authToken',response.token);
                localStorage.setItem('refreshToken',response.refreshToken);
                this.getLoggedUser(true).then(()=>{
                    resolve(response);
                }).catch(reject);;
            }).catch(reject);
        });
    },
    refreshToken() {
        return new Promise((resolve,reject)=>{
            this.api.main.post("/auth/refresh",{
                refreshToken:localStorage.getItem('refreshToken')
            }).then((response)=>{
                localStorage.setItem('authToken',response.newAccessToken);
                this.getLoggedUser(true).then(()=>{
                    resolve(response);
                }).catch(reject);;
            }).catch(reject);
        });
        
    },
    getLoggedUser(force=false) {
        return new Promise((resolve,reject)=>{
            if(!this.$store.loggedUser||force) {
                this.api.main.get("/admin/users/profile").then((response)=>{
                    console.log("$store",this,response);
                    this.setStore("loggedUser",response);
                    resolve(response);
                }).catch(reject);
            }
        })
    },
    getAllUsers(data={}) {
        return new Promise((resolve,reject)=>{
            ///api/v1/admin/users/admins  /admin/users
            this.api.main.get("/admin/users/admins",data).then(resolve).catch(reject);
        });
    },
    getAllProfile(data={}) {
        return new Promise((resolve,reject)=>{
            this.api.main.get("/profile",data).then(resolve).catch(reject);
        });
    }
}