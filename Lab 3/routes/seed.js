require('dotenv').config();  // Load environment variables
const mongoose = require('mongoose');
const Restaurant = require('../models/Restaurant');

// Ensure MONGO_URI is defined
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
    console.error("❌ MONGO_URI is not set in .env file");
    process.exit(1);  // Exit script if MongoDB URI is missing
}

// Connect to MongoDB
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ Connected to MongoDB for seeding"))
  .catch(err => {
      console.error("❌ MongoDB connection error:", err);
      process.exit(1);
  });

const sampleRestaurants = [
    { name: "Sushi Place", cuisines: "Japanese", city: "New York", restaurant_id: "101" },
    { name: "Pasta Heaven", cuisines: "Italian", city: "Los Angeles", restaurant_id: "102" },
    { name: "French Bakery", cuisines: "Bakery", city: "San Francisco", restaurant_id: "103" },
    { name: "Gourmet Delights", cuisines: "Delicatessen", city: "Chicago", restaurant_id: "104" },
    { name: "Deli Spot", cuisines: "Delicatessen", city: "Brooklyn", restaurant_id: "105" }
];

Restaurant.insertMany(sampleRestaurants)
    .then(() => {
        console.log("✅ Sample data inserted");
        mongoose.connection.close();
    })
    .catch(err => console.error("❌ Data insertion error:", err));
