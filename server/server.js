const express = require('express')
const ReactSSR = require('react-dom/server')
const fs = require('fs')
const path = require('path')
const serverEntry = require('../dist/server.entry').default
//创建一个中间文件接收html
const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'),'utf8')
//服务端使用express
const app = express()
app.use('',express.static(path.join(__dirname,'../dist')))
//发送给前端页面
app.get('*',function(req,res){
  const appString = ReactSSR.renderToString(serverEntry)
  res.send(template.replace('<!-- app -->',appString))
})
//监听3333端口号内容
app.listen(3333,function(){
	console.log('server is listening on 3333')
})