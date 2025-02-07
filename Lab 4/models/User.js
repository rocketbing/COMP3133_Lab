const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, minlength: 4 },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Invalid email address"],
  },
  address: {
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: {
      type: String,
      required: true,
      validate: {
        validator: (value) => /^[A-Za-z\s]+$/.test(value),
        message: "City name must contain only alphabets and spaces",
      },
    },
    zipcode: {
      type: String,
      required: true,
      validate: {
        validator: (value) => /^\d{5}-\d{4}$/.test(value),
        message: "Zip code must be in format DDDDD-DDDD",
      },
    },
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^1-\d{3}-\d{3}-\d{4}$/.test(value),
      message: "Phone number must be in format 1-DDD-DDD-DDDD",
    },
  },
  website: {
    type: String,
    required: true,
    validate: [validator.isURL, "Invalid website URL"],
  },
});

module.exports = mongoose.model("User", UserSchema);
