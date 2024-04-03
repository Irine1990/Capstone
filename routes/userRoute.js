const express = require("express");
const userModel = require("../models/userModel")


//router object
const router = express.Router();


router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
});

//POST || REGISTER USER
// router.post("/register", registerController);
router.post("/register", async (req, res) => {
  try {
    console.log(req.body)
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      error,

    });
  }
});


module.exports = router;