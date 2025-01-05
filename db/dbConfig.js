const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost', // Adres serwera bazy danych
    user: 'root',      // Użytkownik bazy danych
    password: '', // Hasło użytkownika
    database: 'warehouse', // Nazwa bazy danych
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    dateStrings: true
});

module.exports = pool;