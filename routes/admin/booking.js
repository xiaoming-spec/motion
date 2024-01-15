const express = require('express')
const article = require('../../middleware/article')
const user = require("../../middleware/user")
const auth = require("../../middleware/auth");


const fileApp = express()


//加载项目
fileApp.get('/', [article.getBooking, auth.getUser, user.getAgent], (req, res) => {
    res.render('admin/article/booking', {bookings: req.bookings, user: req.user, getAgent: req.getAgent, code: ''})
})

//上传项目
fileApp.post('/add', [article.getBooking,article.addBooking, auth.getUser,user.getAgent], (req, res, next) => {
    if (req.insertId) {
        res.render('admin/article/booking', {bookings: req.bookings, addBooking: req.addBooking, getAgent: req.getAgent, user: req.user, code: '1'})
    } else {
        res.render('admin/article/booking', {bookings: req.bookings, addBooking: req.addBooking, getAgent: req.getAgent, user: req.user, code: '0'})

    }
})

//删除项目
fileApp.get('/del', article.delBooking, (req, res) => {
    if (req.affectedRows > 0) {
        res.json({code: 1, msg: '删除成功'})
    } else {
        res.json({code: 2, msg: '删除失败'})
    }
})

// 项目编辑
fileApp.post('/edit', [article.getBooking, article.editBooking, auth.getUser,user.getAgent], (req, res) => {
    if (req.insertId) {
        res.render('admin/article/booking', {bookings: req.bookings, user: req.user,  getAgent: req.getAgent,code: '1'})
    } else {
        res.render('admin/article/booking', {bookings: req.bookings, user: req.user,  getAgent: req.getAgent,code: '0'})
    }
})


module.exports = fileApp
