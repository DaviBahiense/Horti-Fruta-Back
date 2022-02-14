import db from "../database.js";

export async function placeOrder(req, res) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");

  const orderItens = req.body.orderItens;
  const orderTotal = req.body.orderTotal;

  const user = await db.collection("session").findOne({ token });
  const userId = user.idUser;

  const baseDate = new Date();

  const orderDate = `${baseDate.getMonth()}${baseDate.getDate()}${baseDate.getFullYear()}${baseDate.getMilliseconds()}-${token.slice(
    -5
  )}`;

  console.log(orderDate);
  try {
    await db.collection("currentOrders").insertOne({
      userId: userId,
      orderDetails: { items: orderItens, finalPrice: orderTotal },
      orderNumber: orderDate,
    });
    res.status(200).send(orderDate);
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function getOrders(req, res) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");

  const user = await db.collection("session").findOne({ token });
  const userId = user.idUser;
  try {
    const orders = await db
      .collection("currentOrders")
      .find({ userId })
      .toArray();

    const ordersDetails = orders.map((order) => ({
      orderNumber: order.orderNumber,
      orderItens: order.orderDetails.items,
      orderPrice: order.orderDetails.finalPrice,
    }));

    res.status(200).send(ordersDetails);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
