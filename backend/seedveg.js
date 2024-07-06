const mongoose = require("mongoose");
const PizzaVeg = require("./models/pizzaVeg"); // Assuming your model is in './models/pizzaVeg'

// MongoDB connection URL and options
const mongoURL =
  "mongodb+srv://rahul7997:rahul7997@cluster0.chb4xkd.mongodb.net/pizzahut";

// Connect to MongoDB
mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected to MongoDB");

    // Sample data to seed
    const sampleData = [
      { name: "Margherita", quantity: 10 },
      { name: "Vegetarian", quantity: 5 },
      { name: "Paneer Tikka", quantity: 8 },
    ];

    // Insert sample data into the collection
    PizzaVeg.insertMany(sampleData)
      .then(() => {
        console.log("Data seeded successfully");
        mongoose.connection.close(); // Close connection after seeding
      })
      .catch((err) => console.error("Error seeding data:", err));
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
