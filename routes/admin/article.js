//后台活动管理
const express = require('express')
const article = require('../../middleware/article')
const auth = require("../../middleware/auth");
const articleApp = express()
const user = require("../../middleware/user")

// 查看活动面板
articleApp.get('/', [auth.getUser, article.getList], (req, res) => {
    res.render('admin/article/index', { activitys: req.activitys, user: req.user, code: ''})
})

// 添加活动
articleApp.post('/add', [article.addList,auth.getUser, article.getList], (req, res) => {
    if (req.insertId) {
        res.render('admin/article/index', {activitys: req.activitys, user: req.user, code: 1})
    } else {
        res.render('admin/article/index', {activitys: req.activitys, user: req.user, code: 2})
    }
})

// 删除活动
articleApp.get('/del', article.delList, (req, res) => {
    if (req.affectedRows > 0) {
        res.json({code: 1, msg: '删除成功'})
    } else {
        res.json({colde: 2, msg: '删除失败'})
    }
})


// 活动编辑
articleApp.post('/edit',[article.editList,auth.getUser, article.getList], (req, res) => {
    if (req.insertId) {
        res.render('admin/article/index', {activitys: req.activitys, user: req.user, code: 1})
    } else {
        res.render('admin/article/index', {activitys: req.activitys, user: req.user, code: 2})
    }
})




module.exports = articleApp
