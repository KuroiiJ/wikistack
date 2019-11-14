
const express = require('express')
const router = express.Router()
const {addPage} = require('../views')


router.get('/', (req, res, next) => {
    res.send('<h1>hi</h1>')
})

router.post('/', (req, res, next) => {
    res.send('<h1>wiki/post</h1>')
})

router.get('/add', (req, res) => {
    res.send(addPage())
})


module.exports = router




