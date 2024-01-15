const Article = require('../model/article')
const {json} = require("express");

//活动中间件
module.exports = {

    //健身房修改
    editPlace: (req, res, next) => {
        let {name,obj,place, content ,id} = req.body
        let pl = {
            name: name,
            content:content,
            obj: JSON.stringify(Array.isArray(obj) ? obj : obj.split()),
            place: JSON.stringify(Array.isArray(place) ? place : place.split()),
            id: id
        }
        Article.editPlace(pl).then(results => {
            req.affectedRows = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //删除健身房
    delPlace: (req, res, next) => {
        let {id} = req.query
        Article.delPlace(id).then(results => {
            req.affectedRows = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //添加健身房
    addPlace: (req, res, next) => {
        let {name, content, place,obj} = req.body
        let partake = {
            name:name,
            content: content,
            obj: JSON.stringify(Array.isArray(obj) ? obj : obj.split()),
            place: JSON.stringify(Array.isArray(place) ? place : place.split())
        }
        Article.addPlace(partake).then(results => {
            req.insertId = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //获取健身房
    getPlace: (req, res, next) => {
        Article.getPlace().then(results => {
            req.place = results
            next()
        }).catch(err => {
            next(err)
        })
    },


    //删除计划
    delPlan: (req, res, next) => {
        let {id} = req.query
        Article.delPlan(id).then(results => {
            req.affectedRows = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //计划修改
    editPlan: (req, res, next) => {
        let {age, content ,id,food} = req.body
        let plan = {
            food:food,
            time: age,
            content: content,
            id: id
        }
        Article.editPlan(plan).then(results => {
            req.affectedRows = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //添加计划
    addPlan: (req, res, next) => {
        let {content,user_id,age,food} = req.body
        let New = {
            food:food,
            time: age,
            user_id:user_id,
            content: content
        }
        Article.addPlan(New).then(results => {
            req.insertId = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //个人计划列表
    getPlan: (req, res, next) => {
        let id = req.params.id
        Article.getPlan(id).then(results => {
            req.getPlan = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //删除活动
    delPartake: (req, res, next) => {
        let {id} = req.query
        Article.delPartake(id).then(results => {
            req.affectedRows = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    partakeNum: (req, res, next) => {
        let id = req.params.id
        Article.partakeNum(id).then(results => {
            req.partakeNum = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //个人预约列表
    partakeList: (req, res, next) => {
        let id = req.params.id
        Article.partakeList(id).then(results => {
            req.partakeList = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //获取预约
    getBooking: (req, res, next) => {
        Article.getBooking().then(results => {
            req.bookings = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //增添预约
    addBooking: (req, res, next) => {
        let {title,page,place, age, content,user_id} = req.body
        let booking = {
            title:title,
            time: age,
            page:page,
            place:JSON.stringify(Array.isArray(place) ? place : place.split()),
            content: content,
            user_id:user_id
        }
        Article.addBooking(booking).then(results => {
            req.addBooking = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //预约修改
    editBooking: (req, res, next) => {
        let {title, content, page,place, age, id} = req.body
        let booking = {
            title: title,
            content: content,
            page:page,
            place:JSON.stringify(Array.isArray(place) ? place : place.split()),
            time: age,
            id: id
        }
        Article.editBooking(booking).then(results => {
            req.affectedRows = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //添加活动及详情
    addPartake: (req, res, next) => {
        let {user_id, booking_id, place,teach_id} = req.body
        let partake = {
            teach_id:teach_id,
            user_id: user_id,
            booking_id: booking_id,
            place: place
        }
        Article.addPartake(partake).then(results => {
            req.insertId = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //获取项目
    getMotion: (req, res, next) => {
        Article.getMotion().then(results => {
            req.motions = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //删除预约
    delBooking: (req, res, next) => {
        let {id} = req.query
        Article.delBooking(id).then(results => {
            req.affectedRows = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //增添项目
    addMotion: (req, res, next) => {
        let {title, age, content,role} = req.body
        let motion = {
            title:title,
            time: age,
            content: content,
            class:role
        }
        Article.addMotion(motion).then(results => {
            req.addMotion = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //删除项目
    delMotion: (req, res, next) => {
        let {id} = req.query
        Article.delMotion(id).then(results => {
            req.affectedRows = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //活动修改
    editMotion: (req, res, next) => {
        let {title, content, age, id,role} = req.body
        let motion = {
            title: title,
            content: content,
            class: role,
            time: age,
            id: id
        }
        Article.editMotion(motion).then(results => {
            req.affectedRows = results
            next()
        }).catch(err => {
            next(err)
        })
    },

    //活动详情页
    aboutList: (req, res, next) => {
        let id = req.params.id
        Article.aboutList(id).then(results => {
            req.aboutLists = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //获取论坛类别
    getTopic: (req, res, next) => {
        Article.getTopic().then(results => {
            req.topics = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //添加论坛分类
    addTopic: (req, res, next) => {
        let { content,title} = req.body
        let topic = {
            title:title,
            content: content
        }
        Article.addTopic(topic).then(results => {
            req.addTopic = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //删除论坛分类
    delTopic: (req, res, next) => {
        let {id} = req.query
        Article.delTopic(id).then(results => {
            req.affectedRows = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //论坛分类修改
    editTopic: (req, res, next) => {
        let {title, content ,id} = req.body
        let topic = {
            title: title,
            content: content,
            id: id
        }
        Article.editTopic(topic).then(results => {
            req.affectedRows = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //获取论坛内容
    getNews: (req, res, next) => {
        let id = req.params.id
        Article.getNews(id).then(results => {
            req.news = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //获取论坛内容
    getNews_u: (req, res, next) => {
        let id = req.params.id
        Article.getNews_u(id).then(results => {
            req.getNews_u = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //获取论坛指定分类
    getTopic_new: (req, res, next) => {
        let id = req.params.id
        Article.getTopic_new(id).then(results => {
            req.Topic_news = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //添加留言
    addNews: (req, res, next) => {
        let {topic_id, content,user_id} = req.body
        let New = {
            time: new Date(),
            topic_id:topic_id,
            user_id:user_id,
            content: content
        }
        Article.addNews(New).then(results => {
            req.addNews = results
            next()
        }).catch(err => {
            next(err)
        })
    },






    //获取总活动数
    getCount: (req, res, next) => {
        Article.getCount().then(results => {
            req.getCount = results
            next()
        }).catch(err => {
            next(err)
        })
    },

    // 获取活动列表
    getList: (req, res, next) => {
        Article.getList().then(results => {
            req.activitys = results
            next()
        }).catch(err => {
            next(err)
        })
    },

    //添加活动及详情
    addList: (req, res, next) => {
        let {title, content, age} = req.body
        let activity = {
            title: title,
            content: content,
            time: age
        }
        Article.addList(activity).then(results => {
            req.insertId = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //删除活动
    delList: (req, res, next) => {
        let {id} = req.query
        Article.delList(id).then(results => {
            req.affectedRows = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //活动修改
    editList: (req, res, next) => {
        let {title, content, age, id} = req.body
        let article = {
            title: title,
            content: content,
            time: age,
            id: id
        }
        Article.editList(article).then(results => {
            req.affectedRows = results
            next()
        }).catch(err => {
            next(err)
        })
    },




}
