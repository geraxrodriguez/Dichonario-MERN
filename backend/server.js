const express = require('express')
const cookieParser = require('cookie-parser');
const session = require('express-session') 
const MemoryStore = require('memorystore')(session)
const connectDB = require('./config/database')
const cors = require('cors')
const passport = require('passport');
require('dotenv').config({path: './config/.env'})

const app = express()

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
        checkPeriod: 86400000 // prune expired entires every 24h
    }),
}));
app.use(cors())
app.use(express.static('public'))

// Passport initializaiton
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
require('./config/passport');

// Routes
const mainRoutes = require('./routes/mainRoutes')
const adminRoutes = require('./routes/adminRoutes')
const authRoutes = require('./routes/authRoutes');

// routes
app.use('/', mainRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);


// Connect to the database before listening
connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`)
    })
})