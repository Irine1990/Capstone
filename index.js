const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");

dotenv.config();

//databse call
connectDb();


const app = express();



app.use(express.json());
app.use(cors());


app.use("/api/v1/users", require("./routes/userRoute"));
app.use("/api/v1/transactions", require("./routes/transactionRoute"));

//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});