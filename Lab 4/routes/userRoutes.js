const express = require("express");
const { addUser, getUsers, deleteUser } = require("../controllers/userController");

const router = express.Router();

router.post("/", addUser);    // Add a user
router.get("/", getUsers);    // Get all users
router.delete("/:id", deleteUser); // Delete a user

module.exports = router;
