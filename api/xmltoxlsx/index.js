const express = require('express')
const router = express.Router()
const ctrl = require('./xmltoxlsx.ctrl')


router.get('/', ctrl.index)
//router.get('/detail/:detailid', ctrl.download)
router.post('/', ctrl.convert)
 

module.exports = router