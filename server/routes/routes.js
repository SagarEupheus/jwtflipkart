import express from "express"
import { getProducts } from "../controller/product-controller.js";
import  { userSignup,  userLogin } from "../controller/user-controller.js"

const router = express.Router();

// login & signup
router.post("/login",userLogin)
router.post("/signup",userSignup)
router.get("/products",getProducts)


export default router;