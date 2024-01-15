const express = require('express')
const article = require('../../middleware/article')
const user = require("../../middleware/user")
const auth = require("../../middleware/auth");


const fileApp = express()


//加载项目
fileApp.get('/', [article.getMotion, auth.getUser, user.getAgent], (req, res) => {
    res.render('admin/article/file', {motions: req.motions, user: req.user, getAgent: req.getAgent, code: ''})
})

//上传项目
fileApp.post('/add', [article.getMotion,article.addMotion, auth.getUser], (req, res, next) => {
    if (req.insertId) {
        res.render('admin/article/file', {motions: req.motions, addMotion: req.addMotion, user: req.user, code: '1'})
    } else {
        res.render('admin/article/file', {motions: req.motions, addMotion: req.addMotion, user: req.user, code: '0'})

    }
})

//删除项目
fileApp.get('/del', article.delMotion, (req, res) => {
    if (req.affectedRows > 0) {
        res.json({code: 1, msg: '删除成功'})
    } else {
        res.json({code: 2, msg: '删除失败'})
    }
})

// 项目编辑
fileApp.post('/edit', [article.getMotion, article.editMotion, auth.getUser], (req, res) => {
    if (req.insertId) {
        res.render('admin/article/file', {motions: req.motions, user: req.user, code: '1'})
    } else {
        res.render('admin/article/file', {motions: req.motions, user: req.user, code: '0'})
    }
})


module.exports = fileApp
