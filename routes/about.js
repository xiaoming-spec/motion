const express = require('express')
const user = require("../middleware/user")
const auth = require("../middleware/auth");
const article = require("../middleware/article");


const aboutApp = express()


//加载活动详情
aboutApp.get('/:id', [auth.getUser, article.aboutList],(req, res) => {
    res.render('about', {aboutLists: req.aboutLists,user:req.user,code: ''})
})



// 用户累计训练更新
aboutApp.post('/edit/:id',[user.editDuration,auth.getUser, article.aboutList] , (req, res) => {
    if (req.insertId) {
        res.render('about', {aboutLists: req.aboutLists,user:req.user,code: '1'})
    } else {
        res.render('about', {aboutLists: req.aboutLists,user:req.user,code: '0'})
    }
})


module.exports = aboutApp
