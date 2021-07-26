const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./database");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/products"));
app.use("/api/orders", require("./routes/orders"));
app.use("/api/users", require("./routes/users"));


app.listen(process.env.PORT, () =>
  console.log(`Servidor corriendo ${process.env.PORT}`)
);
