import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";
import db from "../database.js";

export async function register(req, res) {
  try {
    const userInfo = req.body;
    const users = db.collection("users");
    const passwordHashed = bcrypt.hashSync(userInfo.password, 10);

    await users.insertOne({ ...userInfo, password: passwordHashed });

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}


