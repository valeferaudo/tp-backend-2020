const mongoose = require('mongoose');

const {Schema , model} = mongoose;

const FieldSchema = new Schema({
    name:{type:String, required: true, unique:true},
    description:{type:String},
    price:{type:Number, required: true},
    image:{type:String},
    cantMaxPlayers:{type:Number,required: true},
    openingHour: {type:Date,required:true},
    closingHour: {type:Date,required:true},
    user: {type:Schema.Types.ObjectId,ref:'User',required:true}
},{collection:'fields'})

FieldSchema.method('toJSON',function(){
    const {__v,_id, ...object}=this.toObject();
    object.id = _id;
    return object;
})

module.exports= model('Field',FieldSchema);