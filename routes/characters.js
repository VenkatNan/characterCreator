const router = require('express').Router()
const characterCtrl = require('../controllers/characters')

router.get('/', characterCtrl.index)
router.get('/new',isLoggedIn, characterCtrl.addChar)
router.post('/',isLoggedIn, characterCtrl.create)
router.get('/:id',isLoggedIn, characterCtrl.show)
router.get('/:id/edit',isLoggedIn, characterCtrl.edit)
router.put('/:id',isLoggedIn, characterCtrl.update)
router.delete('/:id',isLoggedIn,characterCtrl.delChar)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next()
    res.redirect("/auth/google")
  }

module.exports = router;