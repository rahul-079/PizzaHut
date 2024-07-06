const mongoose = require("mongoose");
const PizzaSauce = require("./models/pizzaSauce"); // Adjust the path as per your file structure
require("dotenv").config();

// Define your MongoDB connection URL (replace `<password>` and `<dbname>` with your actual credentials)
const mongo_url = process.env.MONGO_URL;
// Connect to MongoDB
mongoose.connect(mongo_url);

// Define sample data
const sampleData = [
  { name: "Marinara Sauce", quantity: 5 },
  { name: "Garlic Sauce", quantity: 3 },
  { name: "BBQ Sauce", quantity: 7 },
];

// Function to seed data
async function seedData() {
  try {
    // Clear existing data
    await PizzaSauce.deleteMany();

    // Insert new data
    await PizzaSauce.insertMany(sampleData);

    console.log("Data seeded successfully.");
    mongoose.connection.close(); // Close the connection after seeding
  } catch (err) {
    console.error("Error seeding data:", err);
    mongoose.connection.close();
  }
}

// Seed the data
seedData();
