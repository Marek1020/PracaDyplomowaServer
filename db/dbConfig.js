const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: '', // Adres serwera bazy danych
    user: '',      // Użytkownik bazy danych
    password: '', // Hasło użytkownika
    database: '', // Nazwa bazy danych
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    dateStrings: true
});

module.exports = pool;