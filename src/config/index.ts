import {Sequelize}  from "sequelize"
 export const  sequelize =  new Sequelize({
    dialect : 'postgres',
    host: 'localhost',
    database : 'tsc',
    username: 'postgres',
    password: '1555',
    logging:false

 }) 