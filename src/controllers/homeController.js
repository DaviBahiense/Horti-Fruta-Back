import db from "../database.js";

export async function getProduct(req, res) {
  try {
    const product = await db.collection("products").find().toArray();
    console.log(product);
    res.send(product);
  } catch {
    res.sendStatus(500);
  }
}
