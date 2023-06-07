import { getConnection } from '../database/connection';

export  const getBenefactor = async (req, res) => {

    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM Benefactor');
    console.log(result);
    res.json('GET Benefactor');

}

