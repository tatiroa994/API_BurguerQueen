const mongoose = require("mongoose");

(async () => {
  const db = await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("database:", db.connection.name);
})();
