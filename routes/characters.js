const router = require('express').Router()
const characterCtrl = require('../controllers/characters')

router.get('/', characterCtrl.index)
router.get('/new', characterCtrl.addChar)
router.post('/', characterCtrl.create)

module.exports = routers