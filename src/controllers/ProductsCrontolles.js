import db from "../database.js";

export async function getProducts(req, res) {
  try {
    const productsList = await db.collection("products").find().toArray();

    console.log(productsList);
    res.send(productsList);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
