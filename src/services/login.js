import "./logBool";
import { logBool } from "./logBool";

export const login = () => {

    let data 
    if(logBool())
    {
        data = "/account";
    }
    else
    {
        alert("Usuario Invalido")
        data = "/login";
    } 
    // console.log(data)   

    return data;
    
}