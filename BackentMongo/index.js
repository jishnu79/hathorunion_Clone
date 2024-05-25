const express = require('express')
require('dotenv').config() 
const UserRouter = require('./Routes/userRoute'); 
const { default: mongoose } = require('mongoose');
const cors = require('cors')

const app = express()
 
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }));

app.use('/',UserRouter);

mongoose.connect(process.env.MONGO).then(() => {
  console.log("DB connected");
})

app.listen(process.env.PORT, () => {
    console.log(`Server Running On Port ${process.env.PORT}`);
  }) 