const mongoose = require('mongoose')
const Schema = mongoose.Schema

const skillSchema = new Schema({

})
const abilityScoreSchema = new Schema({
   con :Number,
   dex :Number,
   wis :Number,
   int :Number,
   str :Number,
   luck :Number,
   char :Number,

})
const statsSchema = new Schema({
    hp:Number,
    ac:Number,
    speed:Number,
})

const charSchema= new Schema({
    name: {Type: String , required:true},
    race:{Type: String , required:true},
    level: {Type: Number , required:true},
    skills:[skillSchema],
    abilityScore:[abilityScoreSchema],
    stats:[statsSchema],

    
},{
        timestamps:true
    })

module.exports = mongoose.model("Character", charSchema);