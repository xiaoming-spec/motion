const express = require('express')
const user = require("../middleware/user")
const auth = require("../middleware/auth");
const article = require("../middleware/article");


const newsApp = express()


//加载活动详情
newsApp.get('/:id', [user.getAgent, auth.getUser, article.getNews,article.getTopic_new,article.getNews_u], (req, res) => {
    res.render('news', { getAgent:req.getAgent,user: req.user,getNews_u: req.getNews_u,Topic_news:req.Topic_news,News: req.news,  code: ''})
})


// 用户累计训练更新
newsApp.post('/edit/:id', [user.getAgent, article.addNews, auth.getUser,  article.getNews,article.getTopic_new,article.getNews_u], (req, res) => {
    if (req.insertId) {
        res.render('news', {getAgent:req.getAgent,getNews_u:req.getNews_u,Topic_news:req.Topic_news,News: req.news, user: req.user, code: '1'})
    } else {
        res.render('news', {getAgent:req.getAgent,getNews_u:req.getNews_u,Topic_news:req.Topic_news,News: req.news, user: req.user, code: '0'})
    }
})

module.exports = newsApp
