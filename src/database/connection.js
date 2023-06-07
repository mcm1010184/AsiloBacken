import sql from 'mssql';


const dbSettings = {
    user: 'sa',
    password: 'Univalle',
    server: 'localhost',
    database: 'AsilosAncianos',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

export async function getConnection() {

    const pool = await sql.connect(dbSettings)
    const result = await pool.request().query('SELECT 1 + 1 AS solution')
    console.log( result)
}