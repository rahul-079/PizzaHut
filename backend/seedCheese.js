const mongoose = require("mongoose");
const PizzaChesse = require("./models/pizzaChesse"); // Adjust the path as per your project structure
require("dotenv").config();

// Define your MongoDB connection URL (replace `<password>` and `<dbname>` with your actual credentials)
const mongo_url = process.env.MONGO_URL;

// Connect to MongoDB
mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("Connected to MongoDB");

    // Sample data according to your schema
    const pizzas = [
      { name: "Margherita", quantity: 5 },
      { name: "Pepperoni", quantity: 3 },
      { name: "Vegetarian", quantity: 2 },
      { name: "Four Cheese", quantity: 4 },
      { name: "Hawaiian", quantity: 6 },
      { name: "BBQ Chicken", quantity: 3 },
      // Add more data as needed
    ];

    // Insert sample data
    PizzaChesse.insertMany(pizzas)
      .then(() => {
        console.log("Data seeded successfully");
        mongoose.connection.close();
      })
      .catch((err) => console.error("Error seeding data:", err));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
