export default {
    login(data={
        "email": "anilkumarkrishna027@gmail.com",
        "password": "1234@anil"
      }) {
        return new Promise((resolve,reject)=>{
            this.api.post("https://api.scholarbench.com/api/v1/auth/login",data).then((response)=>{
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
            this.api.post("https://api.scholarbench.com/api/v1/auth/refresh",{
                refreshToken:localStorage.setItem('refreshToken')
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
                this.api.get("https://api.scholarbench.com/api/v1/profile").then((response)=>{
                    this.setStorre("loggedUser",response.model);
                    resolve(response);
                }).catch(reject);
            }
        })
        
    }
}