import express from "express";
import {
    home,
    about,
    contact,
    hello,
    hai,
    urlTest
} from "../controllers/pages.js";
import {
    signin,
    signup,
    signout
} from "../controllers/auth.js";

const router = express.Router();

// begin:: landing page
router.get("/", home);
router.get("/about", about);
router.get("/contact", contact);
// end:: landing page

// begin:: auth
router.get("/signin", signin);
router.get("/signup", signup);
router.get("/signout", signout);
// end:: auth

// begin:: testing
router.get("/hello", hello);
router.get("/hai", hai);
router.get("/url", urlTest);
// end:: testing

export default router;