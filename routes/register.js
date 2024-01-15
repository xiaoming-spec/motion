const express = require('express')
const user = require("../middleware/user")


const registerApp = express()

//加载注册
registerApp.get('/', (req, res) => {
    res.render('register', {msg: ''})
})

//注册用户
registerApp.post('/register',[user.register], (req, res, next) => {
    if (req.insertId){
       res.render('login',{msg: '注册成功！'})
   }else {
       res.render('register', {msg: '注册失败，请重新输入信息'})

   }
})
module.exports = registerApp
