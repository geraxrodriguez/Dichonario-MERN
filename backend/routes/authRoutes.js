const express = require('express')
const passport = require('passport');
const LocalStrategy = require('passport-local');
const crypto = require('crypto');

const router = express.Router()


module.exports = router