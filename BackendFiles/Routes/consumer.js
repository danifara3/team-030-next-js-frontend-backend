const express = require("express");
const router = express.Router();

// IMPORT Consumer MODEL
const Consumer = require("../Models/Consumer");

// These routes handles Consumer POST GET PUT PATCH DELETE requests /api/consumer

// handle the find GET request and send JSON response
// GET /api/consumer/find
router.get("/find", async (req, res) => {});

// handle the login GET request and send JSON response
// POST /api/consumer/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Very Simple and Basic validation
    // START
    if (!email.trim()) {
      const msg = "  Email must not be empty";
      return res.json({ success: false, msg });
    }

    if (!password.trim()) {
      const msg = "Password must not be empty";
      return res.json({ success: false, msg });
    }

    // Check if email exist
    const check = await Consumer.findOne({ email: email.toLowerCase() });
    if (!check) {
      const msg = "Email does not exist in our system";
      return res.json({ success: false, msg });
    }

    // Check if password corresponds
    if (password !== check.password) {
      const msg = "Invalid Credentials";
      return res.json({ success: false, msg });
    }
    // END OF VALIDATION

    // GENERATE TOKEN and sent to the User
    const data = check;
    const msg = "Login successful!";
    return res.json({ success: true, msg, data });
  } catch (e) {
    console.log(e);
    const msg = "An Error Occured";
    return res.json({ success: false, msg });
  }
});

// handle register POST  request and send JSON response
// POST /api/consumer/register
router.post("/register", async (req, res) => {
  // Get data from front-end post req
  const { name, email, password, phone, address } = req.body;

  try {
    // Very Simple and Basic validation
    // START
    if (!name.trim()) {
      const msg = "Name must not be empty";
      return res.json({ success: false, msg });
    }

    if (!email.trim()) {
      const msg = "  Email must not be empty";
      return res.json({ success: false, msg });
    }

    if (!password.trim()) {
      const msg = "Password must not be empty";
      return res.json({ success: false, msg });
    }

    if (!phone.trim()) {
      const msg = "  Phone must not be empty";
      return res.json({ success: false, msg });
    }

    if (!address.trim()) {
      const msg = "Address must not be empty";
      return res.json({ success: false, msg });
    }

    // Check if the Email already exist in the database
    const checkEmail = await Consumer.findOne({ email: email.toLowerCase() });
    if (checkEmail) {
      const msg = "Email has already been registered";
      return res.json({ success: false, msg });
    }
    // END OF VALIDATION

    // If Validation is successfull Create and Save Consumer to the database
    const newConsumer = new Consumer({
      name,
      email: email.toLowerCase(),
      password,
      phone,
      address,
    });

    // Send back response to the fron-end
    const data = await newConsumer.save();
    const msg = "Success. You have been successfully registered!";
    return res.json({ success: true, msg, data });
  } catch (e) {
    console.log(e);
    const msg = "An Error Occured";
    return res.json({ success: false, msg });
  }
});

module.exports = router;
