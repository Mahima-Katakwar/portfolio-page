const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const {
  userDataAddition,
  userDataList,
} = require("./controllers/userControllers.js");
const app = express();

require("dotenv").config({ path: "./config/.env" });
dotenv.config();
connectDB();
app.use(express.json());
userDataAddition();
app.get("/", (req, res) => {
  res.send("API is running..");
});

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started: ${PORT}`));
