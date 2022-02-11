import db from "../database.js";

export async function mountCart(req, res) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");

  const cart = req.body.cart;
  const total = req.body.total;

  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const session = await db.collection("session").findOne({ token });
    if (!session) {
      return res.sendStatus(401);
    }
    const user = await db.collection("users").findOne({ _id: session.idUser });

    await db.collection("users").updateOne(
      {
        _id: user._id,
      },
      {
        $unset: { cart: "" },
      }
    );

    await db.collection("users").updateOne(
      {
        _id: user._id,
      },
      {
        $push: { cart },
      }
    );
    await db.collection("users").updateOne(
      {
        _id: user._id,
      },
      {
        $unset: { total: "" },
      }
    );

    await db.collection("users").updateOne(
      {
        _id: user._id,
      },
      {
        $push: { total },
      }
    );

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
  }
}

export async function getCart(req, res) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");

  try {
    const session = await db.collection("session").findOne({ token });
    const user = await db.collection("users").findOne({ _id: session.idUser });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
}
