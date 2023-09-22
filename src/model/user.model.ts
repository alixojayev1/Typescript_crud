import {DataTypes, Model} from "sequelize"
import { sequelize } from "../config/index"

  export class UserModel  extends Model{}

  UserModel.init({
    username:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.INTEGER 
    }
  },
  {
    tableName:"users",
    sequelize:sequelize,
    createdAt:true,
    updatedAt:true
})
UserModel.sync({alter:true})