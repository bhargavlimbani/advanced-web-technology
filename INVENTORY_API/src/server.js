const express = require("express");

const app = express();
const port = 3000;

// Import Routes
const productRoutes = require("./routes/product.route");
const categoryRoutes = require("./routes/category.route");

// Middleware
app.use(express.json());

// Routes
app.use("/product", productRoutes);
app.use("/category", categoryRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("I am Bhargav Limbani!");
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
