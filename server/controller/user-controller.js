import User from "../model/userSchema.js"
// const jwt = require('jsonwebtoken')
import jwt from 'jsonwebtoken'


export const userSignup = async(req,res) =>{


    // existing user check 
    // Hashed password
    // user creation
    // token generate 
// const createToken = async()=>{
//     const token = await jwt.sign({user},"secretkey",{
//         expiresIn:"10000"
//     })
//     console.log(token)


//     const userVerify = jwt.verify(token,"secretkey")
//     console.log(userVerify)
// }

    
    try{
        const exist = await User.findOne({username:req.body.username})
        if(exist){
            alert("user already exist")
            return res.status(401).json({message:"username already exist"})
        }

         const user = req.body ;
         const newUser = new User(user)

         console.log(newUser +" this is userd data");
         await newUser.save();
         res.status(200).json({message:user})
        //  alert("registration successfully!!!")
    }
    catch (err){
        res.status(500).json({message: err.message})
    }
}
export  const userLogin = async(req,res) =>{

    
    try{
        const email = req.body.email;
        const password = req.body.password;

    

        const userExist = await User.findOne({email:email,password:password}) 
        const userData = await User.findOne({email:email,password:password}).select({username: 1, email: 1 })
        
        if(!userExist){
            return res.status(404).json({message:"user not found"})
        }

         if(userExist){

            let token = jwt.sign({
                UserId: userExist._id,
                organisation: "sagarBika"
            }, "key")

           

            res.status(200).send({status: true, message: "token created successfull", userData, token, })
        }else{
            return res.status(401).json(`invalid login`)
         }
    }
    catch (err){
        res.status(500).json("error",err.message)
    }
}



export  const verifyToken = async(req,res) =>{

    
    try{
        

        let id = req.params

        let d = jwt.verify

    

         const userExist = await User.findOne({email:email,password:password}) 

        if(!userExist){
            return res.status(404).json({message:"user not found"})
        }

         if(userExist){

            let token = jwt.sign({
                UserId: userExist._id,
                organisation: "sagarBika"
            }, "key")

           

            res.status(200).send({status: true, message: "token created successfull", token})
           
            
            
         }else{
            return res.status(401).json(`invalid login`)
         }
    }
    catch (err){
        res.status(500).json("error",err.message)
    }
}

