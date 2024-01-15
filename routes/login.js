const express = require('express')
const User = require("../model/user");
const auth = require('../middleware/auth')
const article = require("../middleware/article");


const loginApp = express()


//加载登录页
loginApp.get('/',(req, res) => {
    res.render('login', {code: ''})
})


//发送登录请求
loginApp.post('/', (req, res, next) => {
    let {username, password} = req.body
    User.login(username, password).then(results => {
        if (results) {
            req.session.user = results
            res.redirect('/')
        } else {
            res.render('login', { code: '1' })
        }
    }).catch(err => {
        next(err)
    })
})
module.exports = loginApp
