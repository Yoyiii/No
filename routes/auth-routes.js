const express = require('express')
const router = express.Router()
const path = require('path')
const cookieSession = require('cookie-session')
const cors = require('cors')
const passport = require('passport')

router.use(cors())

router.use(cookieSession({
    name: 'auth-routes',
    keys: ['discordAuth', 'googleAuth', 'githubAuth']
}))

router.use(passport.initialize())
router.use(passport.session())

router.get('/', (req, res) => {
    res.send('Auth Route 1')
})

module.exports = router;