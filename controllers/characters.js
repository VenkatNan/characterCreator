const Char = require('../models/character')

module.exports = {
    index,
    addChar,
    create,
    show,
    edit,
    update,
    delChar,
  }

  function index(req,res){
    Char.find({}, function(err, chars) {
        res.render('characters', {title: "All characters",user: req.user, chars:chars})
      })
  }

  function addChar(req,res){
    res.render('characters/new', {title: "Add Character", user: req.user, err: ''})
}

function create(req,res){
  let hero = req.body
  hero.abilityScore = {}
  hero.abilityScore.con=10
  hero.abilityScore.dex=10
  hero.abilityScore.wis=10
  hero.abilityScore.int=10
  hero.abilityScore.str=10
  hero.abilityScore.luck=10
  hero.abilityScore.char=10
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

function delChar(req,res){
  Char.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/characters')
  })
}

function edit(req,res){
  Char.findById(req.params.id)
  .then((char) => {
    res.render('characters/edit', {char, user: req.user})
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
