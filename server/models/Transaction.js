const { Schema, model} = require('mongoose');


const schema = new Schema({
  cardNum:{ 
   type: Number,
   required: true
  },
  ExpirationDate:{
    type:String
  },
  CVV:{
    type:Number
  },
  Amount:{
    type:Number
  }

},)


module.exports = model('Transaction', schema)
