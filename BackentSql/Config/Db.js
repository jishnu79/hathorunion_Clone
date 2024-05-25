const mysql = require('mysql2/promise')

const mySqlPool = mysql.createPool({
      host:'localhost',
      user:'root',
      password:'W7301@jqir#',
      database:'studensdb'
})

module.exports = mySqlPool 