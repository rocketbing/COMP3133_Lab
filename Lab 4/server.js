const express = require("express");
const mongoose = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 8081;

app.use(express.json()); // Middleware to parse JSON
app.use("/users", userRoutes);
app.get("/", (req, res) => {
    res.send("Server is running! Use /users to fetch data.");
  });
  

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
