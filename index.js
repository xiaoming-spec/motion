//入口
const express = require('express')
const session = require('cookie-session')
// const multer = require('multer')
const path = require('path')
const fs = require('fs')

// 创建主应用
const app = express()

// 上传配置
// const upload = multer({
//     dest: './static/upload', // 上传文件的存储目录
//     limits: {
//         fileSize: 1024 * 1024 * 2 // 单个文件大小限制在2M以内
//     }
// })

// 模板引擎的设置
app.set('view engine', 'html')
app.set('views', `${__dirname}/views`)
app.engine('html', require('ejs').renderFile)

// 静态资源配置
app.use(express.static('static'))

// POST请求处理
app.use(express.urlencoded({ extended: true }))

// session配置
app.use(session({
    keys: ['xiaoming'],
    maxAge: 1000 * 60 * 20 //20分钟过期
}))

// session延期
app.use((req, res, next) => {
    req.session.nowInMinutes = Math.floor(Date.now() / 60e3)
    next()
})

// 调用首页
app.use(/\/(index)?/, require('./routes/index'))
// 调用论坛
app.use('/blog', require('./routes/blog'))
// 调用论坛详情
app.use('/news', require('./routes/news'))
// 调用健身房详情
app.use('/place', require('./routes/place'))
// 查看项目详情
app.use('/about', require('./routes/about'))
// 调用登录
app.use('/login', require('./routes/login'))
// 调用注册
app.use('/register', require('./routes/register'))


// 进入后台的权限验证
app.use('/admin/?*', require('./middleware/auth').allowToAdmin)

// 上传操作
// app.post('/admin/*', upload.single('upload'), (req, res, next) => {
//     // 上传成功后的文件对象
//     let { file } = req
//     if (file) {
//         //  file.originalname ==> 文件的原名称
//         let extname = path.extname(file.originalname)
//         // file.path ==> 上传后的文件路径
//         fs.renameSync(file.path, file.path + extname)
//         // file.filename ==> 上传后的文件名
//         req.uploadUrl = '/upload/' + file.filename + extname
//     }
//     next()
// })

//调用后台首页
app.use(/\/admin\/(index)?/, require('./routes/admin/index'))
// 调用后台活动处理
app.use('/admin/article', require('./routes/admin/article'))
// 调用后台资料管理
app.use('/admin/file', require('./routes/admin/file'))
// 调用后台公告管理
app.use('/admin/flag', require('./routes/admin/flag'))
// 调用后台用户管理
app.use('/admin/user', require('./routes/admin/user'))
// 调用后台用户个人信息
app.use('/admin/edit', require('./routes/admin/edit'))
// 调用后台用户个人计划
app.use('/admin/plan', require('./routes/admin/plan'))
// 调用后台预约管理
app.use('/admin/booking', require('./routes/admin/booking'))
// 调用后台健身房管理
app.use('/admin/place', require('./routes/admin/place'))

// 退出
app.get('/user/logout', (req, res) => {
    req.session.user = null
    res.render('login', { msg: '退出成功' })
})

// 监听服务器
app.listen(9065)
