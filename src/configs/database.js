import dotEnv from 'dotenv';
import mySql from 'mysql';

dotEnv.config({
    path: './.env',
});

var connection = mySql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
});

export default connection;