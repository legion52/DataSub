const express = require('express')
const morgan = require('morgan')
const cors = require('cors');
const mongoose = require('mongoose')
const Transaction = require('./models/Transaction')

const PORT = 3001

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'));
app.use(cors())

const start = async() => {
  await mongoose.connect('mongodb+srv://ahmad:134679a@cluster0.unwpt.mongodb.net/DataSub', 
  {
    useNewUrlParser:true,
    // useFindAndModify:false
  })
  
  try {
    
    app.listen(PORT, () => {
      console.log('Server start on port ', PORT)
    })
  } catch (e) {
    console.log(e);
  }
}



app.post('/transaction', async(req, res) =>{
  
  try {
    const trans = new Transaction({
    cardNum: req.body.cardNum,
    ExpirationDate: req.body.expiration,
    CVV: req.body.cvv,
    Amount: req.body.amount
    })
    await trans.save()
    // res.json(trans)
    res.json({ "RequestId": trans.id, 'Amount': trans.Amount })

  } catch (e) {
    console.log(e);
  }
})

start()
