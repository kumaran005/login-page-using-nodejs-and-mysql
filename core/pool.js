const util = require('util');
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password: '1234',
    database : 'new'
});

pool.getConnection((err, connection) =>{
    if(err)
        console.error('Something went wrong connecting to database');
    
    if(connection)
        connection.release();
    return;
});

pool.query = util.promisify(pool.query);

module.exports = pool;