import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { authenticateSignup ,authenticateLogin } from "../../service/api";
import { useState } from "react";

const Component = styled(Box)`
  display: flex;
  height: 75vh;
  width: 90vh;
`;
const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    no-repeat center 85%;
  height: 100%;
  width: 50%;
  padding: 25px 35px;
  color: white;
`;
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background-color: #fb641b;
  border-radius: 2px;
  color: #fff;
  height: 48px;
  &:hover {
    background-color: #fb641b;
  }
`;
const RequestOTP = styled(Button)`
  text-transform: none;
  background-color: #fff;
  color: #2874f0;
  height: 48px;
  box-shadow: 0 2px 4px 0 rgb(0, 0, 0, 20%);
`;

const LoginDialog = (props) => {
  const handleClose = () => {
    props.setOpen(false);
    setAccount(accountIntitalValues.login)
  };

  const accountIntitalValues = {
    login:{
      view : "login",
      heading:"Login",
      subHeading:"Get access to your Orders, Wishlist and Recommendations"
    },
    signUp : { 
      view : "signup",
      heading:"Look like you're new here!",
      subHeading:"Sign up with your  mobile Number to get Started"

    }
  }

  const [account, setAccount] = useState(accountIntitalValues.login);
// toggle signup
  const toggleSignUp =()=>{
    setAccount(accountIntitalValues.signUp)
  }

  
  // onChange
  const [dataInput , setDataInput] = useState({
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    phone:"",
  })
  const onInputChange = (e) =>{
    setDataInput({...dataInput, [e.target.name]: e.target.value})
    console.log(dataInput);
  }
// sending data to axios 
  const signupUser = async ()=>{
   let  response= await authenticateSignup(dataInput)
   if(!response) return;
   handleClose()
  }

  // login data from form
  const [login,setLogin] = useState({
    username:"",
    password:"",
  })
  const onValueChange =(e)=>
  {
    setLogin({...login,[e.target.name]:e.target.value})
  }
// on login button click
  const loginUser = async()=>{
    let loginRes= await authenticateLogin(login)
    if(loginRes.status ==200){
      handleClose()
        // alert(loginRes.data.data.firstname)
      }

  }
  
  return (
    <>
      <Dialog open={props.openDialog} onClose={handleClose}>
        <Component>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: "20px", letterSpacing: "1px" }}>
             {account.subHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField
                style={{ marginTop: "20px" }}
                variant="standard"
                label="Enter Username/Email"
                onChange={(e)=> onValueChange(e)} name="email"
              />
              <TextField
                style={{ marginTop: "20px" }}
                variant="standard"
                label="Enter Password"
                type="password"
                name="password"
                onChange={(e)=> onValueChange(e)}
              />
              <Typography
                style={{
                  marginTop: "20px",
                  fontSize: "12px",
                  color: "#878787",
                }}
              >
                By continuing, you agree to Flipkart's
                <Typography
                  component="span"
                  style={{ fontSize: "12px", color: "#2874f0" }}
                >
                  Terms of Use
                </Typography>
                and
                <Typography
                  component="span"
                  style={{ fontSize: "12px", color: "#2874f0" }}
                >
                  Privacy Policy.
                </Typography>
              </Typography>
              <LoginButton   style={{ marginTop: "20px" }} onClick={()=> loginUser() } >Login</LoginButton>
              <Typography className="text-center mt-2">OR</Typography>
              <RequestOTP style={{ marginTop: "20px" }}>Request OTP</RequestOTP>
              <Button 
                style={{
                  fontSize: "12px",
                  marginTop: "45px",
                  fontWeight: "500",
                }}
                onClick={()=> toggleSignUp()}
              >
                New to Flipkart? Create an account
              </Button>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                style={{ marginTop: "15px", marginLeft: "20px" }}
                variant="standard"
                label="Enter FirstName"
                name="firstname"
                onChange={(e)=> onInputChange(e)}
              />
              <TextField
                style={{ marginTop: "15px", marginLeft: "20px" }}
                variant="standard"
                label="Enter LastName"
                name="lastname"
                onChange={(e)=> onInputChange(e)}
              />
              <TextField
                style={{ marginTop: "15px", marginLeft: "20px" }}
                variant="standard"
                label="Enter UserName"
                name="username"
                onChange={(e)=> onInputChange(e)}
              />
              <TextField
                style={{ marginTop: "15px", marginLeft: "20px" }}
                variant="standard"
                label="Enter Email"
                name="email"
                onChange={(e)=> onInputChange(e)}
              />
              <TextField
                style={{ marginTop: "15px", marginLeft: "20px" }}
                variant="standard"
                label="Enter Password"
                type="password"
                name="password"
                onChange={(e)=> onInputChange(e)}
              />
              <TextField
                style={{ marginTop: "15px", marginLeft: "20px" }}
                variant="standard"
                label="Enter Phone Number"
                name="phone"
                onChange={(e)=> onInputChange(e)}
              />

              <LoginButton onClick={()=> signupUser()} style={{ marginTop: "20px", marginLeft: "20px" }}>
                Continue
              </LoginButton>
            </Wrapper>
          )}
        </Component>
      </Dialog>
    </>
  );
};

export default LoginDialog;
