const MySQl = require('MySQL2/promisse')

require('dontenv').config()

    const pool = MySQL.createpool({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        Password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 10, //limita a quantidade de conexões simultaneos
        queueLimit: 0
    })

    module.exports = pool