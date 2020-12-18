const Char = require('../models/character')

module.exports = {
    index,
    addChar,
    create,
    show,
    update,
    delChar,
  }

  function index(req,res){
    Char.find({}, function(err, chars) {
        res.render('characters', {title: "All characters",user: req.user, chars})
      })
  }

  function addChar(req,res){
    res.render('characters/new', {title: "Add Character", user: req.user, err: ''})
}

function create(req,res){
  let hero = req.body
  hero.abilityScore = {}
  hero.abilityScore.con=0
  hero.abilityScore.dex=0
  hero.abilityScore.wis=0
  hero.abilityScore.int=0
  hero.abilityScore.str=0
  hero.abilityScore.luck=0
  hero.abilityScore.char=0
    Char.create(hero)
    .then((char)=>{
        console.log(char)
        res.redirect('/characters')
    })
}
function show(req,res){
    Char.findById(req.params.id)
    .then((char) => {
    res.render('characters/show', {
      title: "Character Details",
      user: req.user,
      char
    })
  })
}
function update(req,res){
  Char.findById(req.params.id)
    .then((char) => {
      // char.abilityScore.con = req.body.con
      char.abilityScore = req.body
      char.save()
      console.log(char);
        res.redirect(`/characters/${req.params.id}`)
    })
    .catch((err) =>{
        console.log(err);
    })
}
function delChar(req,res){
  Char.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/characters')
  })
}