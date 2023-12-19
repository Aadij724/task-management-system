import express from "express";
import { authenticateGoogle, callbackGoogle } from "../controllers/auth.controller.js";

const router = express.Router();

// router.post("/register", register);
// router.post("/login", login);
// router.post("/logout", logout);
// router.get("/login", (req, res)=>{
//     res.send("Working!");
// })

router.get('/google', authenticateGoogle);

router.get("/google/callback", callbackGoogle);

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        error: true,
        message: "Log in failure"
    });

})

router.get("/login/success", (req,res) => {
    if (req.user) {
        res.status(200).json({
            error: false,
            message: "Successfully Logged In",
            user: req.user,
        })
    } else {
        res.status(403).json({ error: true, message: "Not Authorized"});
    }
})

router.get("/logout", (req,res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL);
})

export default router;
