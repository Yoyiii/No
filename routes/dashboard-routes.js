const express = require('express')
const router = express.Router()
const path = require('path')
const cookieSession = require('cookie-session')

router.use(cookieSession({
    name: 'dashboard-routes',
    keys: ['dashboard', 'dashboard-routes']
}))

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'index.html'))
})

module.exports = router;