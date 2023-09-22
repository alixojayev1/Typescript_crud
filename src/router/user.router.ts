import { Router } from "express";
import { userDelete, userGet, userPost, userPut, } from "../controller/user.controller";

 export const userRouter = Router()

 userRouter.get("/users", userGet );
 userRouter.post("/create", userPost);
 userRouter.put("/create/:id",userPut )
 userRouter.delete("/create/:id", userDelete)

