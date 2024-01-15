//用户中间件
const User = require('../model/user')
const Article = require("../model/article");

module.exports = {
    //身体信息修改
    editPl: (req, res, next) => {
        let {height, weight ,id} = req.body
        let pl = {
            height:height,
            weight:weight,
            id: id
        }
        User.editPl(pl).then(results => {
            req.affectedRows = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //修改用户信息
    editDuration:(req, res, next) => {

        User.editDuration(req.body.id).then(results => {
            req.affectedRows = results
            next()
        }).catch(err => {
            next(err)
        })
    },


    //用户总数
    sumAgent: (req, res, next) => {
        User.sunAgent().then(results => {
            req.sumAgent = results
            next()
        }).catch(err => {
            next(err)
        })
    },


    //用户信息
    getAgent: (req, res, next) => {
        User.getAgent().then(results => {
            req.getAgent = results
            next()
        }).catch(err => {
            next(err)
        })
    },

    //最后一次登录时间
    lastLoginTime: (req, res, next) => {
        User.lastLoginTime().then(results => {
            req.lastLoginTime = results
            next()
        }).catch(err => {
            next(err)
        })
    },

    //注册用户
    register: (req, res, next) => {
        let {username, password, phone, age, duration, role} = req.body
        let agent = {
            username: username,
            password: password,
            name: username,
            age: age ? age : "13/02/2023",
            duration: duration ? duration : 0,
            phone: phone,
            role: role ? role : 1
        }
        User.register(agent).then(results => {
            req.insertId = results
            next()
        }).catch(err => {
            next(err)
        })
    },

    //注销用户
    delAgent: (req, res, next) => {
        let {id} = req.query
        User.delAgent(id).then(results => {
            req.affectedRows = results
            next()
        }).catch(err => {
            next(err)
        })
    },

    //修改用户信息
    editAgent:(req, res, next) => {
        let { username, name, password, phone,  age ,id,role } = req.body
        let agent = {
            username:username,
            name: name,
            password: password,
            age: age,
            phone:phone,
            id: id,
            role:role ? role : 1
        }
        User.editAgent(agent).then(results => {
            req.affectedRows = results
            next()
        }).catch(err => {
            next(err)
        })
    },

}
