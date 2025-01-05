const pool = require('../db/dbConfig.js');

const dbQuery = async (query, params = []) => {
    const connection = await pool.getConnection();
    try {
        const [results] = await connection.execute(query, params);
        return results;
    } catch (error) {
        console.error('Database query error:', error);
        throw error;
    } finally {
        connection.release();
    }
};

module.exports = { dbQuery };
