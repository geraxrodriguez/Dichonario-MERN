const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');


// Query DB for a document with this username in our Users collection
// If that username doesn't exist, we display an error message.
// If username does exist but they put in wrong password, display error message.
// Else, we return our matching user
passport.use(new LocalStrategy(
    async (username, password, done) => {
        try {
            const user = await User.findOne({ username });
            if (!user) { return done(null, false, { message: 'Sorry! That username doesn\'t exist.' }); }
            
            const isMatch = await user.comparePassword(password);
            if (!isMatch) { return done(null, false, { message: 'Incorrect password.' }); }

            console.log('user logged in')
            return done(null, user);
        } catch (error) {
            return done(error);
        }
    }
));

// Passport authenticates the user and calls serializeUser, storing the user ID in the session.
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// On subsequent requests, Passport uses the ID stored in the session to call deserializeUser, 
// which retrieves the user object and attaches it to req.user.
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error);
    }
});