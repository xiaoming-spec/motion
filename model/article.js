
//活动数据模型
const {log} = require("debug");
module.exports = class Article extends require('./model') {

    //修改健身房
    static editPlace(pl) {
        return new Promise((resolve, reject) => {
            let sql = 'UPDATE place SET name = ?,obj = ?,place=?, content = ? WHERE id = ?'
            this.query(sql, [ pl.name,pl.obj,pl.place,pl.content, pl.id]).then(results => {
                resolve(results.affectedRows)
            }).catch(err => {
                console.log(`编辑失败：${err.message}`)
                reject(err)
            })
        })
    }

    //删除健身房
    static delPlace(id) {
        return new Promise((resolve, reject) => {
            let sql = 'DELETE FROM place WHERE id = ?'
            this.query(sql, id).then(results => {
                resolve(results.affectedRows)
            }).catch(err => {
                console.log(`删除失败：${err.message}`)
                reject(err)
            })
        })
    }

    //添加健身房
    static addPlace(obj) {
        return new Promise((resolve, reject) => {
            let sql = 'INSERT INTO place SET ?'
            this.query(sql, obj).then(results => {
                resolve(results.insertId)
                console.log(results.insertId)
            }).catch(err => {
                console.log(`添加失败：${err.message}`)
                reject(err)
            })
        })
    }

    //获取健身房
    static getPlace() {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM place'
            this.query(sql).then(results => {
                resolve(results)
                console.log(results)
            }).catch(err => {
                console.log(`获取列表失败：${err.message}`)
                reject(err)
            })
        })
    }



    //删除计划
    static delPlan(id) {
        return new Promise((resolve, reject) => {
            let sql = 'DELETE FROM plan WHERE id = ?'
            this.query(sql, id).then(results => {
                resolve(results.affectedRows)
            }).catch(err => {
                console.log(`删除失败：${err.message}`)
                reject(err)
            })
        })
    }
    //修改计划
    static editPlan(plan) {
        return new Promise((resolve, reject) => {
            let sql = 'UPDATE plan SET food = ?,time = ?,content = ? WHERE id = ?'
            this.query(sql, [plan.food,plan.time, plan.content, plan.id]).then(results => {
                resolve(results.affectedRows)
            }).catch(err => {
                console.log(`编辑失败：${err.message}`)
                reject(err)
            })
        })
    }
    //获取个人计划
    static getPlan(id) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM plan WHERE user_id =?'
            this.query(sql, id).then(results => {
                resolve(results)
            }).catch(err => {
                console.log(`失败：${err.message}`)
                reject(err)
            })
        })
    }
    //添加计划
    static addPlan(obj) {
        return new Promise((resolve, reject) => {
            let sql = 'INSERT INTO plan SET ?'
            this.query(sql, obj).then(results => {
                resolve(results.insertId)
                console.log(results.insertId)
            }).catch(err => {
                console.log(`添加失败：${err.message}`)
                reject(err)
            })
        })
    }

    //删除项目
    static delPartake(id) {
        return new Promise((resolve, reject) => {
            let sql = 'DELETE FROM partake WHERE id = ?'
            this.query(sql, id).then(results => {
                resolve(results.affectedRows)
            }).catch(err => {
                console.log(`删除失败：${err.message}`)
                reject(err)
            })
        })
    }
    //获取个人预约
    static partakeNum(id) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM partake WHERE user_id =?'
            this.query(sql, id).then(results => {
                resolve(results)
            }).catch(err => {
                console.log(`加入失败：${err.message}`)
                reject(err)
            })
        })
    }


    //获取个人预约
    static partakeList(id) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM booking WHERE id = any(SELECT booking_id FROM partake WHERE user_id =?) '
            this.query(sql, id).then(results => {
                resolve(results)
            }).catch(err => {
                console.log(`加入失败：${err.message}`)
                reject(err)
            })
        })
    }

    //参与预约
    static addPartake(obj) {
        return new Promise((resolve, reject) => {
            let sql = 'INSERT INTO partake SET ?'
            this.query(sql, obj).then(results => {
                resolve(results.insertId)
                console.log(results.insertId)
            }).catch(err => {
                console.log(`添加失败：${err.message}`)
                reject(err)
            })
        })
    }


    //获取活动列表
    static getList() {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT id,title,content,`time` FROM activity ORDER BY id DESC'
            this.query(sql).then(results => {
                resolve(results)
                console.log(results)
            }).catch(err => {
                console.log(`获取活动列表失败：${err.message}`)
                reject(err)
            })
        })
    }
    //获取预约
    static getBooking() {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM booking'
            this.query(sql).then(results => {
                resolve(results)
                console.log(results)
            }).catch(err => {
                console.log(`获取列表失败：${err.message}`)
                reject(err)
            })
        })
    }
    //添加预约
    static addBooking(obj) {
        return new Promise((resolve, reject) => {
            let sql = 'INSERT INTO booking SET ?'
            this.query(sql, obj).then(results => {
                resolve(results.insertId)
                console.log(results.insertId)
            }).catch(err => {
                console.log(`添加失败：${err.message}`)
                reject(err)
            })
        })
    }
    //修改预约
    static editBooking(booking) {
        return new Promise((resolve, reject) => {
            let sql = 'UPDATE booking SET time = ?,title = ?,page = ?,place=?, content = ? WHERE id = ?'
            this.query(sql, [booking.time, booking.title,booking.page,booking.place,booking.content, booking.id]).then(results => {
                resolve(results.affectedRows)
            }).catch(err => {
                console.log(`编辑失败：${err.message}`)
                reject(err)
            })
        })
    }
    //删除项目
    static delBooking(id) {
        return new Promise((resolve, reject) => {
            let sql = 'DELETE FROM booking WHERE id = ?'
            this.query(sql, id).then(results => {
                resolve(results.affectedRows)
            }).catch(err => {
                console.log(`删除失败：${err.message}`)
                reject(err)
            })
        })
    }
    //获取项目
    static getMotion() {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM motion'
            this.query(sql).then(results => {
                resolve(results)
                console.log(results)
            }).catch(err => {
                console.log(`获取列表失败：${err.message}`)
                reject(err)
            })
        })
    }

    //获取项目内容
    static aboutList(id) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM motion WHERE id = ? '
            this.query(sql, id).then(results => {
                resolve(results)
            }).catch(err => {
                console.log(`获取失败：${err.message}`)
                reject(err)
            })
        })
    }
    //添加项目
    static addMotion(obj) {
        return new Promise((resolve, reject) => {
            let sql = 'INSERT INTO motion SET ?'
            this.query(sql, obj).then(results => {
                resolve(results.insertId)
                console.log(results.insertId)
            }).catch(err => {
                console.log(`添加失败：${err.message}`)
                reject(err)
            })
        })
    }
    //删除项目
    static delMotion(id) {
        return new Promise((resolve, reject) => {
            let sql = 'DELETE FROM motion WHERE id = ?'
            this.query(sql, id).then(results => {
                resolve(results.affectedRows)
            }).catch(err => {
                console.log(`删除失败：${err.message}`)
                reject(err)
            })
        })
    }
    //修改项目
    static editMotion(motion) {
        return new Promise((resolve, reject) => {
            let sql = 'UPDATE motion SET time = ?,title = ?,class = ?, content = ? WHERE id = ?'
            this.query(sql, [motion.time, motion.title,motion.class,motion.content, motion.id]).then(results => {
                resolve(results.affectedRows)
            }).catch(err => {
                console.log(`编辑失败：${err.message}`)
                reject(err)
            })
        })
    }
    //获取论坛专区
    static getTopic() {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM topic'
            this.query(sql).then(results => {
                resolve(results)
            }).catch(err => {
                console.log(`获取失败：${err.message}`)
                reject(err)
            })
        })
    }
    //添加论坛专区
    static addTopic(obj) {
        return new Promise((resolve, reject) => {
            let sql = 'INSERT INTO topic SET ?'
            this.query(sql, obj).then(results => {
                resolve(results.insertId)
                console.log(results.insertId)
            }).catch(err => {
                console.log(`添加失败：${err.message}`)
                reject(err)
            })
        })
    }

    //删除论坛专区
    static delTopic(id) {
        return new Promise((resolve, reject) => {
            let sql = 'DELETE FROM topic WHERE id = ?'
            this.query(sql, id).then(results => {
                resolve(results.affectedRows)
            }).catch(err => {
                console.log(`删除失败：${err.message}`)
                reject(err)
            })
        })
    }
    //修改论坛专区
    static editTopic(topic) {
        return new Promise((resolve, reject) => {
            let sql = 'UPDATE topic SET title = ?, content = ? WHERE id = ?'
            this.query(sql, [topic.title, topic.content,  topic.id]).then(results => {
                resolve(results.affectedRows)
            }).catch(err => {
                console.log(`编辑失败：${err.message}`)
                reject(err)
            })
        })
    }

    //获取指定专区
    static getTopic_new(id) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM topic WHERE id = ? '
            this.query(sql,id).then(results => {
                resolve(results)
            }).catch(err => {
                console.log(`获取失败：${err.message}`)
                reject(err)
            })
        })
    }

    //获取论坛详情内容
    static getNews(id) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM news WHERE topic_id = ?'
            this.query(sql, id).then(results => {
                resolve(results)
            }).catch(err => {
                console.log(`获取失败：${err.message}`)
                reject(err)
            })
        })
    }
    //获取论坛详情内容发布者
    static getNews_u(id) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT id,username FROM `user` WHERE id = any(SELECT user_id FROM news WHERE topic_id = ?)'
            this.query(sql, id).then(results => {
                resolve(results)
            }).catch(err => {
                console.log(`获取失败：${err.message}`)
                reject(err)
            })
        })
    }
    //添加留言
    static addNews(New) {
        return new Promise((resolve, reject) => {
            let sql = 'INSERT INTO news SET ?'
            this.query(sql, New).then(results => {
                resolve(results.insertId)
            }).catch(err => {
                console.log(`加入失败：${err.message}`)
                reject(err)
            })
        })
    }








    //活动总数
    static getCount() {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT COUNT(id) AS `count` FROM activity'
            this.query(sql).then(results => {
                resolve(results[0].count)
            }).catch(err => {
                console.log(`获取总活动数失败：${err.message}`)
                reject(err)
            })
        })
    }




    //添加活动
    static addList(activity) {
        return new Promise((resolve, reject) => {
            let sql = 'INSERT INTO activity SET ?'
            this.query(sql, activity).then(results => {
                resolve(results.insertId)
            }).catch(err => {
                console.log(`添加失败：${err.message}`)
                reject(err)
            })
        })
    }

    //删除活动
    static delList(id) {
        return new Promise((resolve, reject) => {
            let sql = 'DELETE FROM activity WHERE id = ?'
            this.query(sql, id).then(results => {
                resolve(results.affectedRows)
            }).catch(err => {
                console.log(`删除失败：${err.message}`)
                reject(err)
            })
        })
    }

    //修改活动
    static editList(article) {
        return new Promise((resolve, reject) => {
            let sql = 'UPDATE activity SET title = ?, content = ?, time = ? WHERE id = ?'
            this.query(sql, [article.title, article.content, article.time, article.id]).then(results => {
                resolve(results.affectedRows)
            }).catch(err => {
                console.log(`编辑活动失败：${err.message}`)
                reject(err)
            })
        })
    }



}
