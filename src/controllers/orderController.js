import db from "../database.js";

export async function placeOrder(req, res) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");

  const orderItens = req.body.orderItens;
  const orderTotal = req.body.orderTotal;

  const user = await db.collection("session").findOne({ token });
  const userId = user.idUser;

  const baseDate = new Date();

  const orderDate = `${baseDate.getMonth()}${baseDate.getDate()}${baseDate.getFullYear()}-${token.slice(
    -5
  )}`;

  console.log(orderDate);
  try {
    await db.collection("currentOrders").insertOne({
      userId: userId,
      orderDetails: { items: orderItens, finalPrice: orderTotal },
      orderNumer: orderDate,
    });
    res
      .status(200)
      .send(`Pedido Enviado! O Número do seu pedido é ${orderDate}`);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
