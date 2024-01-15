const express = require('express')
const article = require('../middleware/article')
const auth = require('../middleware/auth')
const user = require("../middleware/user")

// 首页子应用
const indexApp = express()

indexApp.use(auth.getUser)

// 加载首页页面
indexApp.get('/', [article.getList, article.getMotion, auth.getUser,article.getBooking,user.getAgent], (req, res) => {
    res.render('index', {activitys: req.activitys, motions: req.motions, user: req.user,bookings:req.bookings,getAgent:req.getAgent,code:''})
})

indexApp.post('/add', [article.addPartake,article.getList,auth.getUser, article.getMotion,article.getBooking,user.getAgent], (req, res) => {
    if (req.insertId) {
        res.render('index', {activitys: req.activitys,motions: req.motions,user: req.user,bookings:req.bookings,getAgent:req.getAgent,code:'1'})
    } else {
        res.render('index', {activitys: req.activitys,motions: req.motions, user: req.user,bookings:req.bookings,getAgent:req.getAgent,code: '0'})

    }
})


module.exports = indexApp
