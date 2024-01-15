module.exports = class User extends require('./model') {
    //更新用户身体信息
    static editPl(pl) {
            return new Promise((resolve, reject) => {
                let sql = 'UPDATE user SET  height = ?,weight = ? WHERE id = ?'
                this.query(sql, [pl.height, pl.weight,pl.id]).then(results => {
                    resolve(results.affectedRows)
                }).catch(err => {
                    console.log(`编辑失败：${err.message}`)
                    reject(err)
                })
            })
        }

    //更新用户训练时长
    static editDuration(id) {
        return new Promise((resolve, reject) => {
            let sql = 'UPDATE user SET  duration = (duration + 15) WHERE id = ?'
            this.query(sql, [id]).then(results => {
                resolve(results.affectedRows)
            }).catch(err => {
                console.log(`编辑失败：${err.message}`)
                reject(err)
            })
        })
    }


    //用户总数
    static sunAgent() {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT COUNT(id) AS `count` from `user`'
            this.query(sql).then(results => {
                resolve(results[0].count)
                console.log(resolve(results[0].count))
            }).catch(err => {
                console.log(`获取总用户数失败：${err.message}`)
                reject(err)
            })
        })
    }


    //用户登录
    static login(username, password) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM `user` WHERE username = ? AND password = ?'
            this.query(sql, [username, password]).then(results => {
                resolve(results[0])
                // console.log(resolve(results[0]))
            }).catch(err => {
                console.log(`登录失败：${err.message}`)
                reject(err)
            })
        })
    }

    //用户信息
    static getAgent() {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM `user`'
            this.query(sql).then(results => {
                resolve(results)
            }).catch(err => {
                reject(err)
            })
        })
    }



    //用户注册
    static register(obj) {
        return new Promise((resolve, reject) => {
            let sql = 'INSERT INTO user SET ?'
            this.query(sql, obj).then(results => {
                resolve(results.insertId)
                console.log(results.insertId)
            }).catch(err => {
                console.log(`注册失败：${err.message}`)
                reject(err)
            })
        })
    }

    //用户注销
    static delAgent(id) {
        return new Promise((resolve, reject) => {
            let sql = 'DELETE FROM user WHERE id = ?'
            this.query(sql, id).then(results => {
                resolve(results.affectedRows)
            }).catch(err => {
                console.log(`删除失败：${err.message}`)
                reject(err)
            })
        })
    }

    //修改用户信息
    static editAgent(agent) {
        return new Promise((resolve, reject) => {
            let sql = 'UPDATE user SET  name = ?,password = ?, age = ?,  phone= ? ,role = ? WHERE id = ?'
            this.query(sql, [agent.name, agent.password, agent.age,  agent.phone, agent.role,agent.id]).then(results => {
                resolve(results.affectedRows)
            }).catch(err => {
                console.log(`编辑失败：${err.message}`)
                reject(err)
            })
        })
    }

}
