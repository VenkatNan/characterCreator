const router = require('express').Router()
const characterCtrl = require('../controllers/characters')

router.get('/', characterCtrl.index)
router.get('/new', characterCtrl.addChar)
router.post('/', characterCtrl.create)
router.get('/:id', characterCtrl.show)
router.put('/:id', characterCtrl.update)
router.delete('/:id',characterCtrl.delChar)

module.exports = router;