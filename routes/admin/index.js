//后台首页
const express = require('express')
const user = require('../../middleware/user')
const article = require('../../middleware/article')
const auth = require("../../middleware/auth");

const indexApp = express()

//加载首页
indexApp.get('/',  [user.getAgent,article.getCount,user.sumAgent,article.getList,auth.getUser], (req, res) => {
    res.render('admin/docs',{getAgent:req.getAgent, getCount:req.getCount ,sumAgent: req.sumAgent,activitys: req.activitys,user:req.user })
})




module.exports = indexApp
