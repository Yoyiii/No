const { resolveSoa } = require('dns')
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const passport = require('passport')
const AuthRoutes = require('./routes/auth-routes')
const DashboardRoutes = require('./routes/dashboard-routes')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/css/', express.static('public/css'))
app.use('/js/', express.static('public/js'))
app.use('/img/', express.static('public/images'))

app.use(cookieSession({
    name: 'pylon-web',
    keys: ['pylonbot', 'pylonweb']
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/api/auth', AuthRoutes)
//app.use('/', DashboardRoutes)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.listen(3080, () => {
    console.log('ready')
})