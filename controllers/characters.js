const Char = require('../models/character')

module.exports = {
    index,
    addChar,
    create,
  }

  function index(req,res){
    Char.find({}, function(err, chars) {
        res.render('characters', {title: "All characters", chars})
      })
  }

  function addChar(req,res){
      
}

function create(req,res){
      
}