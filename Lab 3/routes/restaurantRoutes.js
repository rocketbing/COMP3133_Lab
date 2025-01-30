const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

// 1. Get all restaurant details
router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 2. Get restaurants by cuisine
router.get('/cuisine/:cuisineType', async (req, res) => {
    try {
        const cuisineType = req.params.cuisineType;
        const restaurants = await Restaurant.find({ cuisines: cuisineType });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 3. Get selected columns and sort by restaurant_id
router.get('/', async (req, res) => {
    try {
        const sortBy = req.query.sortBy === 'ASC' ? 1 : -1;
        const restaurants = await Restaurant.find({}, { _id: 1, cuisines: 1, name: 1, city: 1, restaurant_id: 1 }).sort({ restaurant_id: sortBy });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 4. Get restaurants with cuisine "Delicatessen" and city not "Brooklyn"
router.get('/Delicatessen', async (req, res) => {
    try {
        const restaurants = await Restaurant.find(
            { cuisines: "Delicatessen", city: { $ne: "Brooklyn" } },
            { _id: 0, cuisines: 1, name: 1, city: 1 }
        ).sort({ name: 1 });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
