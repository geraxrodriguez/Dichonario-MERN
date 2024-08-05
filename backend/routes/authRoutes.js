const express = require('express')
const passport = require('passport');
const User = require('../models/User');
const router = express.Router()


router.post('/sign-up', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingEmail = await User.findOne({ email })
        const existingUsername = await User.findOne({ username })
        
        // check if user exists with this username
        if (existingEmail) { return res.status(400).send('Email already registered.')}
        // check if user exists with this email
        if (existingUsername) { return res.status(400).send('Username already taken.')}
        
        const newUser = new User({ username, email, password });
        await newUser.save();
        console.log('woo hoo!')
        res.status(201).send('User registered!');
    } catch (error) {
        res.status(500).send('Error registering user');
    }
});

// router.post('/login', 
//     passport.authenticate('local', { 
//         successRedirect: '/auth/success',
//         failureRedirect: '/auth/fail'
//     })
// );

router.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.status(200).redirect('/');
    });

router.get('/success', (req, res) => {
    console.log('success!')
    res.send('Login successful!');
});

router.get('/fail', (req, res) => {
    console.log('booooo')
    res.send('Login failed!');
});

module.exports = router