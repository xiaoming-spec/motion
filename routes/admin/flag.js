const express = require('express')
const article = require('../../middleware/article')
const user = require("../../middleware/user")
const auth = require("../../middleware/auth");


const flagApp = express()


//加载公告
flagApp.get('/',[article.getTopic,auth.getUser,user.getAgent], (req, res) => {
    res.render('admin/article/flag', {topics:req.topics,user:req.user,getAgent:req.getAgent,code: ''})
})

//上传公告
flagApp.post('/add', [article.getTopic,article.addTopic,auth.getUser], (req, res, next) => {
    if (req.insertId){
        res.render('admin/article/flag',{topics:req.topics,addTopic:req.addTopic,user:req.user,code: '1'})
    }else {
        res.render('admin/article/flag', {topics:req.topics,addTopic:req.addTopic,user:req.user,code: '0'})

    }
})

//删除公告
flagApp.get('/del', article.delTopic, (req, res) => {
    if (req.affectedRows > 0) {
        res.json({code: 1, msg: '删除成功'})
    } else {
        res.json({code: 2, msg: '删除失败'})
    }
})

// 公告编辑
flagApp.post('/edit',[article.getTopic,article.editTopic,auth.getUser] , (req, res) => {
    if (req.insertId) {
        res.render('admin/article/flag', {topics:req.topics,user:req.user,code: '1'})
    } else {
        res.render('admin/article/flag', {topics:req.topics,user:req.user,code: '0'})
    }
})


module.exports = flagApp
