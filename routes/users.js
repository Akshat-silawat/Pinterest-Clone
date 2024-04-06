const mongoose = require("mongoose");
const plm = require("passport-local-mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/pindb");

const userSchema = mongoose.Schema({
       username : String,
       name : String,
       password : String,
       contact : Number,
       email : String,
       profileImage : String,
       boards: {
        type : Array,
        default:[]
       },
       posts:[
        {
          type:mongoose.Schema.Types.ObjectId,
          ref:"post"
        }
       ]
});

userSchema.plugin(plm)

module.exports = mongoose.model("user",userSchema)
