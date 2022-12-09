import express from "express";
import {
    home,
    about,
    contact
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

export default router;