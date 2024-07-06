const mongoose = require("mongoose");
const PizzaBase = require("./models/pizzaBase"); // Assuming your schema is in a file named pizzaBase.js
require("dotenv").config();

// Define your MongoDB connection URL (replace `<password>` and `<dbname>` with your actual credentials)
const mongo_url = process.env.MONGO_URL;

// Connect to MongoDB
mongoose
  .connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");

    // Example data
    const pizzaData = [
      { name: "Thin Crust", quantity: 10 },
      { name: "Pan Pizza", quantity: 5 },
      { name: "Stuffed Crust", quantity: 8 },
      { name: "Deep Dish", quantity: 7 },
    ];

    // Insert data into MongoDB
    PizzaBase.insertMany(pizzaData)
      .then((docs) => {
        console.log("Data inserted:", docs);
      })
      .catch((err) => {
        console.error("Error inserting data:", err);
      })
      .finally(() => {
        mongoose.disconnect(); // Disconnect from MongoDB after seeding data
      });
  })
  .catch((err) => {
    console.error("Connection error:", err);
  });
