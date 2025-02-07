const fs = require("fs");
const mongoose = require("../config/db");
const User = require("../models/User");

const importData = async () => {
  try {
    const usersData = JSON.parse(fs.readFileSync("./data/UsersData.json", "utf-8"));

    const users = usersData.map(user => ({
      name: user.name,
      username: user.username,
      email: user.email,
      address: {
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
        zipcode: user.address.zipcode,
      },
      phone: user.phone,
      website: user.website,
    }));

    await User.insertMany(users);
    console.log("User data imported successfully");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error importing data:", error);
    mongoose.connection.close();
  }
};

importData();
