const express = require('express')
const article = require('../../middleware/article')
const user = require("../../middleware/user")
const auth = require("../../middleware/auth");


const planApp = express()


//加载项目
planApp.get('/:id', [article.getPlan, auth.getUser, user.getAgent], (req, res) => {
    res.render('admin/article/plan', {getPlan: req.getPlan, user: req.user, getAgent: req.getAgent, code: ''})
})

//上传项目
planApp.post('/add/:id', [article.getPlan,article.addPlan, auth.getUser, user.getAgent], (req, res, next) => {
    if (req.insertId) {
        res.render('admin/article/plan', {getPlan: req.getPlan, addPlan: req.addPlan, user: req.user, getAgent: req.getAgent, code: '1'})
    } else {
        res.render('admin/article/plan', {getPlan: req.getPlan, addPlan: req.addPlan, user: req.user, getAgent: req.getAgent, code: '0'})

    }
})

//删除项目
planApp.get('/:id/del', article.delPlan, (req, res) => {
    if (req.affectedRows > 0) {
        res.json({code: 1, msg: '删除成功'})
    } else {
        res.json({code: 2, msg: '删除失败'})
    }
})

// 项目编辑
planApp.post('/plan/:id', [article.getPlan, article.editPlan, auth.getUser, user.getAgent], (req, res) => {
    if (req.insertId) {
        res.render('admin/article/plan', {getPlan: req.getPlan, user: req.user,getAgent:req.getAgent, code: '1'})
    } else {
        res.render('admin/article/plan', {getPlan: req.getPlan, user: req.user,getAgent:req.getAgent, code: '0'})
    }
})



// 信息编辑
planApp.post('/pl/:id', [article.getPlan, user.editPl, auth.getUser, user.getAgent], (req, res) => {
    if (req.insertId) {
        res.render('admin/article/plan', {getPlan: req.getPlan, user: req.user,getAgent:req.getAgent, code: '1'})
    } else {
        res.render('admin/article/plan', {getPlan: req.getPlan, user: req.user,getAgent:req.getAgent, code: '0'})
    }
})


module.exports = planApp
