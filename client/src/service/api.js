   import axios from "axios";

const url = "http://localhost:5000";





export const authenticateSignup = async (user) => {
    try {
       const result= await axios.post(`${url}/signup`, user)
       console.log(result)
       alert("register successfully!!!")
       return result
    } catch (error) {
        console.log('error while calling Signup API: ', error.message);
    }
}
  
export const authenticateLogin = async (user) => {
    try {
       const result= await axios.post(`${url}/login`, user)
       console.log(result)
       alert("Login successfully!!!" )   
       return result
    } catch (error) {
        alert("authentication failed")
        console.log('error while calling login API: ', error.message);
    }
}



// const result = await axios({
//     method: 'post',
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     url: `${url}/signup`,
//     mode:"cors",
//     data: user
//   })
// console.log(authenticateSignup+"asdjasjdnaskj")