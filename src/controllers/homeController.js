import db from "../database.js";

export async function getProduct(req, res) {
  try {
    const product = await db.collection("products").find().toArray();
    
    res.send(product);
  } catch {
    res.sendStatus(500);
  }
}

export async function getUser (req, res)  {
  const authorization = req.headers.authorization;
  const token = authorization?.replace('Bearer ', '');

  try {
    const session = await db.collection("session").findOne({ token });
    
    if (!session) {
      return res.sendStatus(401);
    }

    const user = await db.collection("users").findOne({ _id: session.userId });
    if (!user) {
      return res.sendStatus(401);
    }

    res.send(user)
  } catch (erro) {
    console.log(erro);
    res.sendStatus(500);
  }
}

