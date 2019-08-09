const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
var app = express();
const xmltocsv = require('./api/xmltoxlsx')




app.use(logger('dev'))

app.locals.pretty = true

app.set('views', './views_file')
app.set('view engine', 'jade') // 뷰엔진으로 jade로 사용할꺼야 

 // 파일들을 view 라고 부르는거 같고 그 파일 경로를 지정해준다.
app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())



app.use('/xmltoxlsx',xmltocsv)

module.exports = app

