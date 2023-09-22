import  express, { Application }  from "express";
import { sequelize } from "./config/index";
import { userRouter } from "./router/user.router";




async function  myCrud (){

    const app:Application = express()

    app.use(express.json());
   
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

    app.use(userRouter)

    app.listen(1010, ():void =>{
        console.log("create database 1010");
        
    })  
 }

 myCrud()
