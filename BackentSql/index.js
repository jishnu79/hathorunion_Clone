const express = require('express')
require('dotenv').config()
const UserRouter = require('./Routes/userRoute');
const cors = require('cors');
const mySqlPool = require('./Config/Db');

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }));

app.use('/', UserRouter);

mySqlPool.query('SELECT 1').then(() => {
  // mysql
  console.log("MySql Db Connect");
  app.listen(process.env.PORT, () => {
    console.log(`Server Running On Port ${process.env.PORT}`);
  })
}).catch((err)=>{
  console.log(err);
})