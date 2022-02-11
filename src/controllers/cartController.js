import db from "../database.js";

export async function mountCart(req, res) {
  const token = req.headers.authorization
  const cart = req.body
  
  
  try {
    const session = await db.collection("session").findOne({ token })
    const user = await db.collection("users").findOne({ _id: session.idUser })
  
    await db.collection("users").updateOne({
      _id: user._id
    }, {
      $unset: {cart: ""}
    })  
    
     await db.collection("users").updateOne({
      _id: user._id
    }, {
      $push: { cart }
    })   
 
    res.sendStatus(201)
  } catch (error) {
      console.log(error)
    }
  }

  export async function getCart(req, res) {
    const token = req.headers.authorization
    
    try {
      const session = await db.collection("session").findOne({ token })
      const user = await db.collection("users").findOne({ _id: session.idUser })
      res.send(user.cart)
    }
    catch(error){
      console.log(error)
    }
  }