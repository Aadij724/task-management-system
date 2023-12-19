import passport from "passport";
import Employee from "../models/employee.model.js";

export const authenticateGoogle = () => {
    console.log("ag executed");
    passport.authenticate('google', { scope: [
        'profile',
        'email',
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.events',
    ], accessType: 'offline', approvalPrompt: 'force'  });

    console.log('after ag executed')
}

export const callbackGoogle = (req, res) => {
    console.log("callback executed")
    passport.authenticate(
        'google', 
        {
            failureRedirect: '/login/failed',
            successRedirect: process.env.CLIENT_URL,
        },
    );
};