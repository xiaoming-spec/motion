const express = require('express')
const User = require("../model/user");
const auth = require('../middleware/auth')
const article = require("../middleware/article");


const blogApp = express()


//加载论坛页
blogApp.get('/', [auth.getUser,article.getTopic],(req, res) => {
    res.render('blog', {user: req.user,topics:req.topics,code: ''})
})


// //发送登录请求
// blogApp.post('/', (req, res, next) => {
//     let {username, password} = req.body
//     User.login(username, password).then(results => {
//         if (results) {
//             req.session.user = results
//             res.redirect('/')
//         } else {
//             res.render('login', { code: '1' })
//         }
//     }).catch(err => {
//         next(err)
//     })
// })
module.exports = blogApp
