const {Pool} = require('pg');

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: '12345',
    database: 'servicedesk',
    port: '5432'
})

const getIncidencia = async(req, res) => {
    const response = await pool.query('SELECT * FROM data');
    res.json(response.rows);
}

const getIncidenciaGC = async(req, res) => {
    const tecnico = "Ginna Cumbicus";
    const response = await pool.query('SELECT * FROM data WHERE tecnicoasignado = $1', [tecnico]);
    res.json(response.rows);
}

const getIncidenciaDQ = async(req, res) => {
    const tecnico = "Diego Quistanchala";
    const response = await pool.query('SELECT * FROM data WHERE tecnicoasignado = $1', [tecnico]);
    res.json(response.rows);
}

const getIncidenciaSC = async(req, res) => {
    const tecnico = "Santiago Condolo";
    const response = await pool.query('SELECT * FROM data WHERE tecnicoasignado = $1', [tecnico]);
    res.json(response.rows);
}

const getIncidenciaDB = async(req, res) => {
    const tecnico = "Diego Bustillos";
    const response = await pool.query('SELECT * FROM data WHERE tecnicoasignado = $1', [tecnico]);
    res.json(response.rows);
}

const getIncidenciaCG = async(req, res) => {
    const tecnico = "Cesar Gonzales";
    const response = await pool.query('SELECT * FROM data WHERE tecnicoasignado = $1', [tecnico]);
    res.json(response.rows);
}

const getIncidenciaLO = async(req, res) => {
    const tecnico = "Luis Ortiz";
    const response = await pool.query('SELECT * FROM data WHERE tecnicoasignado = $1', [tecnico]);
    res.json(response.rows);
}


module.exports = 
{
    getIncidencia,
    getIncidenciaGC,
    getIncidenciaDQ,
    getIncidenciaSC, 
    getIncidenciaDB, 
    getIncidenciaCG,
    getIncidenciaLO
}