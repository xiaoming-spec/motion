const express = require('express')
const User = require("../../model/user");
const user = require("../../middleware/user")
const auth = require("../../middleware/auth");
const article = require("../../middleware/article");


const registerApp = express()


//加载登录页
registerApp.get('/', [auth.getUser,user.getAgent],(req, res) => {
    res.render('admin/article/add', {user:req.user,getAgent:req.getAgent,code: ''})
})

//注册用户
registerApp.post('/add',[auth.getUser,user.getAgent,user.register], (req, res, next) => {
    if (req.insertId){
        res.render('admin/article/add',{user:req.user,getAgent:req.getAgent,code: '1'})
    }else {
        res.render('admin/article/add', {user:req.user,getAgent:req.getAgent,code: '0'})

    }
})

//注销用户
registerApp.get('/del', user.delAgent, (req, res) => {
    if (req.affectedRows > 0) {
        res.json({code: 1, msg: '删除成功'})
    } else {
        res.json({colde: 2, msg: '删除失败'})
    }
})


// 用户信息编辑
registerApp.post('/edit',[user.getAgent,auth.getUser,user.editAgent] , (req, res) => {
    if (req.insertId) {
        res.render('admin/article/add', {getAgent:req.getAgent,user:req.user,code: '1'})
    } else {
        res.render('admin/article/add', {getAgent:req.getAgent,user:req.user,code: '0'})
    }
})


module.exports = registerApp
