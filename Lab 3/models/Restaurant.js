const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cuisines: { type: String, required: true },
    city: { type: String, required: true },
    restaurant_id: { type: String, required: true }
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
