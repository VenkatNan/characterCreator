const mongoose = require('mongoose')
const Schema = mongoose.Schema


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
    name: String,
    race:String,
    level: Number,
    abilityScore:[abilityScoreSchema],
    stats:[statsSchema],

    
},{
        timestamps:true
    })

module.exports = mongoose.model("Character", charSchema);