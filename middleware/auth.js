
module.exports = {

    //从session中读取用户
    getUser: (req, res, next) => {
        // 从session中读取数据
        req.user = req.session.user
        console.log(req.user)
        next()
    },
    //是否允许用户进入后台管理页
    allowToAdmin:(req,res,next)=>{
        let user = req.session.user
        console.log(user)
        if(user){
            req.user = user
            next()
        }else{
            res.redirect('/login')
        }
    },

}
