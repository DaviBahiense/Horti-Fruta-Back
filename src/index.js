import express, { json } from "express";
import cors from "cors";

import router from "./routes/index.js";

const app = express();

app.use(cors());
app.use(json());
app.use(router);

app.listen(process.env.MONGO_URI, () => {
  console.log("Server is listening on port " + process.env.PORT);
});
