import passport from "passport";
import GS from "passport-google-oauth20";
import Employee from "./models/employee.model.js";

const GoogleStrategy = GS.Strategy;

// passport.use(Employee.createStrategy());

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    accessType: "offline",
    scope: [
        'profile',
        'email',
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.events',
    ]
  },
  function(accessToken, refreshToken, profile, cb) {
    Employee.findOrCreate({
        googleId: profile.id ,
        name: profile.displayName,
        email: profile.emails[0].value,
        img: profile.photos[0].value,
        accessToken: accessToken,
        refreshToken: refreshToken
    }, function (err, user) { return cb(err, user) });

    console.log(profile.id)
    console.log(profile.displayName);
    console.log(profile.emails[0].value)
    console.log("access token :",accessToken);
    console.log("refresh token :",refreshToken);
    console.log(profile);
  }
));

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user.id);
    });
});

passport.deserializeUser(async function(id, cb) {
    const user = await Employee.findById(id).exec();
    if(user) {
        return cb(null, user);
    }
});

