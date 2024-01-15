const express = require('express')
const User = require("../model/user");
const auth = require('../middleware/auth')
const article = require("../middleware/article");


const placeApp = express()


//加载健身房信息
placeApp.get('/', [auth.getUser,article.getPlace],(req, res) => {
    res.render('place', {user: req.user,place:req.place,code: ''})
})

module.exports = placeApp
