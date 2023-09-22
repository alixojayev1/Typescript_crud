import { Request, Response } from "express";
import { UserModel } from "../model/user.model";


export const userGet = async (req: Request, res: Response) => {
  try {

    const data = await UserModel.findAll();
    return res.send(data);

  } catch (error) {

    return res.status(500).json({ message: "Server error" });
  }
};

export const userPost = async (req: Request, res: Response) => {
  try {

    const { username, password }: UserType = req.body;
    const newUser = await UserModel.create({ username, password });
    return res
      .status(200)
      .json({ newUser, msg: "Yangi malumotlar qo'shildi " });

  } catch (error) {

    return res.status(500).json({ message: "Server error" });
  }
};

export const userPut = async (req: Request, res: Response) => {
  try {

    const { id } = req.params;
    const { username, password } = req.body;

    const user = await UserModel.update(

      { username, password },
      { where: { id } }

    );

    return res.status(200).json({ user, msg: "Malumotlar o'zgartirildi " });

  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: "Server error" });
  }
};

export const userDelete = async (req: Request, res: Response) => {

  try {
    const { id } = req.params;
    
    const user = await UserModel.destroy({ where: { id: req.params.id } });

    if (!user) {
      return res.status(404).json({ message: "Bunday id mavjud emas" });
    }

    return res.status(200).json({ user, msg: "Malumotlar o'chirildi" });

  } catch (error) {

    return res.status(500).json({ message: "Server error" });
  }
};
