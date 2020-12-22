const mongoose = require('mongoose')
const Schema = mongoose.Schema


const abilityScoreSchema = new Schema({
   con :{type:Number,default:10},
   dex :{type:Number,default:10},
   wis :{type:Number,default:10},
   int :{type:Number,default:10},
   str :{type:Number,default:10},
   luck :{type:Number,default:10},
   char :{type:Number,default:10},
})

const charSchema= new Schema({
    name: String,
    race:String,
    level: Number,
    class:String,
    pic:String,
    hp:{type:Number,default:10},
    ac:{type:Number,default:10},
    sp:{type:Number,default:10},
    abilityScore:abilityScoreSchema,
},{
        timestamps:true
    })

module.exports = mongoose.model("Character", charSchema);