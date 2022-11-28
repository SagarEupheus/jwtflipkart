import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box , Toolbar , AppBar, Typography, Button} from '@mui/material';
import Search from './Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from "../Login/LoginDialog"

const HeaderStyled = styled(AppBar)`
  background: #2874f0; 
`;

const Component = styled(Box)`
margin-left:12%;
line-height:0;
`
const SubHeading = styled(Typography)`
font-size:10px;
font-style:italic;
`

const PlusImage = styled("img")({
    width: 10,
    height:10,
    marginLeft:4,
})

const Header = () => {

  const [open,setOpen] =useState(false)

const openDialog=()=>{
  setOpen(true)
}
  return (
    <>
    <HeaderStyled>
    <Toolbar  style={{height:"54px",paddingBottom:"0px"}}>
        <Component>
            <img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt="img..." style={{width:"75px"}} />
        <Box style={{display:"flex"}}>
            <SubHeading>Explore
                <Box component="span" style={{color:"#ffe500",marginLeft:"6px"}}>Plus</Box>
            </SubHeading>
            <PlusImage src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="img..."/>
        </Box>
        </Component>
        <Search style={{paddingRight:"5px"}}></Search>
        <Box  style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Button variant="container" onClick={()=>openDialog()} style={{letterSpacing: "0.1px",background:"#fff", fontSize:"16px" , color:"#2874f0", borderRadius:"0", marginLeft:"40px", width:"120px" ,height:"30px"}}>
            LOGIN
          </Button>
          <LoginDialog openDialog={open} setOpen={setOpen}></LoginDialog>
            <Typography style={{letterSpacing: "0.1px",margin:" 0 30px",fontSize:"16px"}}>
              MORE
            </Typography>
            <Typography style={{
              marginRight:"25px",
              fontSize:"16px",
            }}>
              Become a Seller
            </Typography>
            <Box style={{fontSize:"16px" ,letterSpacing: "0.1px",}} > 
            <ShoppingCartIcon />
            <span className="cart" > Cart</span>
            </Box>
        </Box>
    </Toolbar>
    </HeaderStyled>

    </>
  )
}

export default Header;