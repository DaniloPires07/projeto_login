const mysql = require('mysql');

const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '', // insira sua senha 
   database: 'login_db' 
});

connection.connect((err) => {
    if (err) throw err;
    console.log('conectando ao MySQL!');
});

module.exports = connection;