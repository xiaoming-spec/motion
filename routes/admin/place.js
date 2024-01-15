//后台活动管理
const express = require('express')
const article = require('../../middleware/article')
const auth = require("../../middleware/auth");
const user = require("../../middleware/user")


const PlaceApp = express()

// 查看健身房
PlaceApp.get('/', [auth.getUser, article.getPlace], (req, res) => {
    res.render('admin/article/place', { place: req.place, user: req.user, code: ''})
})

// 添加健身房
PlaceApp.post('/add', [article.addPlace,auth.getUser, article.getPlace], (req, res) => {
    if (req.insertId) {
        res.render('admin/article/place', { place: req.place, user: req.user, code: 1})
    } else {
        res.render('admin/article/place', { place: req.place, user: req.user, code: 2})
    }
})

// 删除活动
PlaceApp.get('/del', article.delPlace, (req, res) => {
    if (req.affectedRows > 0) {
        res.json({code: 1, msg: '删除成功'})
    } else {
        res.json({colde: 2, msg: '删除失败'})
    }
})

// 健身房编辑
PlaceApp.post('/edit',[article.editPlace,auth.getUser, article.getPlace], (req, res) => {
    if (req.insertId) {
        res.render('admin/article/place', {place: req.place, user: req.user, code: 1})
    } else {
        res.render('admin/article/place', {place: req.place, user: req.user, code: 2})
    }
})




module.exports = PlaceApp
