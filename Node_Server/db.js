const sql = require('mssql')
    require('dotenv').config();

    //configuracion para sql:
    const config = {
        server: process.env.DB_SERVER,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        options:{
            encrypt:false,
            enableArithAbort : true,
        },
        port : parseInt(process.env.DB_PORT)

    }; 
// Creando conexion
const poolPromise = new sql.ConnectionPool(config)
.connect()
.then(pool =>{
    console.log('connected to database');
    return pool;
})
.catch(err =>{
    console.log('Database connectio failed: ', err);
    throw err;

});

module.exports = {
    sql,
    poolPromise
};