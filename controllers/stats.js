const Character = require('../models/character')

module.exports = {
  create
}

function create(req, res) {
  Character.findById(req.params.id, function(err, char) {
    char.stats.push(req.body)
    char.save(function(err) {
      res.redirect(`/characters/${char._id}`)
    })
  })
}