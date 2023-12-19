
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import mongoose from "mongoose";
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";
import GS from "passport-google-oauth20";
import findOrCreate from "mongoose-findorcreate";
// import { insertEvent } from "./controller/insertEvent.controller.js";
import {google} from "googleapis";
import Employee from "./models/employee.model.js"
import cors from "cors";
import authRoute from "./routes/auth.route.js";
import cookieSession from "cookie-session";
// import passportStrategy from "./passport.js";

dotenv.config();


const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieSession({
    name: 'session',
    keys: ["task-management-app"],
    maxAge: 24*60*60*100,
}));

app.use(passport.initialize());
app.use(passport.session());


mongoose.set("strictQuery", true);


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("mongoDB connected");
    } catch (error) {
        console.log(error);
    }
};



app.use(
    cors({
        origin:"http://localhost:5173", 
        methods: "GET, POST, PUT, DELETE", 
        credentials: true
    })
);
// app.use(cors());


/////// passport set up


////////////// routes


app.use("/auth", authRoute);


app.listen(8800, ()=>{
    connect();
    console.log("Backend server is running!");
})