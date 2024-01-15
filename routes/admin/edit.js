const express = require('express')
const user = require("../../middleware/user")
const auth = require("../../middleware/auth");
const article = require("../../middleware/article");


const editApp = express()


//加载个人详情
editApp.get('/:id', [article.partakeNum,article.partakeList,article.getBooking,auth.getUser,user.getAgent],(req, res) => {
    res.render('admin/article/edit', {partakeNum:req.partakeNum,partakeList:req.partakeList,bookings: req.bookings,user:req.user,getAgent:req.getAgent,code: ''})
})



// 用户信息编辑
editApp.post('/edit/:id',[article.partakeNum,article.partakeList,article.getBooking,user.getAgent,auth.getUser,user.editAgent] , (req, res) => {
    if (req.insertId) {
        res.render('admin/article/edit', {partakeNum:req.partakeNum,partakeList:req.partakeList,bookings: req.bookings,getAgent:req.getAgent,user:req.user,code: '1'})
    } else {
        res.render('admin/article/edit', {partakeNum:req.partakeNum,partakeList:req.partakeList,bookings: req.bookings,getAgent:req.getAgent,user:req.user,code: '0'})
    }
})

// 删除预约
editApp.get('/:id/del', article.delPartake, (req, res) => {
    if (req.affectedRows > 0) {
        res.json({code: 1, msg: '删除成功'})
    } else {
        res.json({code: 2, msg: '删除失败'})
    }
})


module.exports = editApp
