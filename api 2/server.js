//jshint esversion:6


import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import session from "express-session";
import mongoose from "mongoose";
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";
import GS from "passport-google-oauth20";
import findOrCreate from "mongoose-findorcreate";
import { insertEvent } from "./controller/insertEvent.controller.js";
import {google} from "googleapis";
// import {OAuth2} from "google-auth-library";

dotenv.config();
const GoogleStrategy = GS.Strategy;


const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({
    secret: 'This is our little secret.',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


mongoose.connect("mongodb://0.0.0.0:27017/userDB", );

const userSchema = new mongoose.Schema({
    googleId: String,
    name: String,
    email: String,
    password: String,
    secret: String,
    accessToken: String,
    refreshToken: String,
    picture: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user.id);
    });
});

passport.deserializeUser(async function(id, cb) {
    const user = await User.findById(id).exec();
    if(user) {
        return cb(null, user);
    }
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8800/auth/google/completeProfile",
    accessType: "offline",
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({
        googleId: profile.id ,
        name: profile.displayName,
        email: profile.emails[0].value,
        picture: profile.photos[0].value,
        accessToken: accessToken,
        refreshToken: refreshToken
    }, function (err, user) { return cb(err, user) });

    console.log(profile.id)
    console.log(profile.displayName);
    console.log(profile.emails[0].value)
    console.log("access token :",accessToken);
    console.log("refresh token :",refreshToken);
    console.log(profile);
    // console.log(email);
    // console.log(calendar);
    // const user1 = {
    //     id: profile.id,
    //     name: profile.displayName,
    //     email: profile.emails[0].value,
    //     accessToken: accessToken,
    //     refreshToken: refreshToken
    // }

    // return user1;
  }
));

app.get("/", function(req, res) {
    res.render("home");
})

app.get("/register", function(req, res) {
    res.render("register");
})

app.get("/login", function(req, res) {
    res.render("login");
})

app.get('/auth/google',function (req, res) {
    return passport.authenticate('google', { scope: [
        'profile',
        'email',
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.events',
    ], accessType: 'offline', approvalPrompt: 'force'  },)(req, res);
});


// app.get('/auth/google',function (req, res) {
//     return passport.authenticate('google', { scope: [
//             'https://www.googleapis.com/auth/userinfo.email',
//             'https://www.googleapis.com/auth/calendar',
//             'https://www.googleapis.com/auth/calendar.events',
        
//     ] })(req, res);
// });

app.get("/auth/google/completeProfile", 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/dashboard');
    // insertEvent();
});

app.get("/completeProfile", (req, res)=>{
    res.render("completeProfile");
})

// app.get('/dashboard', async (req, res)=> {
//     console.log("loading events in calendar");
//     insertEvent();
//     res.redirect("/completeProfile");
// } );


app.get('/dashboard', async (req, res) => {
    // Check if the user is authenticated
    if (!req.isAuthenticated()) {
        return res.redirect('/login'); // Redirect to login if not authenticated
    }

    // Retrieve the refreshToken and accessToken from the user's session or profile
    const refreshToken = req.user.refreshToken;
    const accessToken = req.user.accessToken;

    // Pass the tokens to the insertEvent function
    console.log("user :",req.user);
    await insertEvent(req);

    // Redirect to the completeProfile page or another appropriate page
    res.redirect("/completeProfile");
});



app.get("/logout", function(req, res) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

app.listen( 8800, function() {
    console.log("Server started on port 8800");
})



