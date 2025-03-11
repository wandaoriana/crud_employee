const { poolPromise } = require('./db.js');

async function testDB() {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT 1 AS test');
        console.log('✅ Base de datos funcionando:', result.recordset);
    } catch (error) {
        console.error('❌ Error en la prueba de base de datos:', error);
    }
}

testDB();