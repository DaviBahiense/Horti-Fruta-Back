import db from "../database.js";

export async function getProduct(req, res) {
  //   const authorization = req.headers.authorization;
  //   const token = authorization?.replace("Bearer ", "");

  try {
    //     const session = await db.collection("session").findOne({ token });
    //     if (!session) {
    //       res.sendStatus(401);
    //       return;
    //     }
    const product = await db.collection("products").find().toArray();
    res.send(product);
  } catch {
    res.sendStatus(500);
  }
}
