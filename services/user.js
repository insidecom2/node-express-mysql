const db = require('../db/db');
const config = require('../config');

async function getAll(page = 1) {
    const limit = 10;
    const offset = (page - 1) * [limit];
    const rows = await db.query(
        `SELECT * FROM user LIMIT ${offset},${limit}`
      );
    const data = !rows ? [] : rows;
    return { status: 200, message:'success',data: data };    
}

module.exports = {
    getAll
}