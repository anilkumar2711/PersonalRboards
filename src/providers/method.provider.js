import { api } from "@/libs/axios";
export default {
    login(data={
        "email": "anilkumarkrishna027@gmail.com",
        "password": "1234@anil"
      }) {
        api.post("https://api.scholarbench.com/api/v1/auth/login",data).then((response)=>{
            console.log({response});
        })
    }
}