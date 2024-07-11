const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

// Register a new user
async function addUser(req, res) {
    const newEmail = req.body.email;
    // console.log(req.body, "User Details");
    // console.log(newEmail);
    try {
        const userExists = await user.findOne({ email: newEmail });

    if (userExists) {
      // console.log(userExists,"User Exists");
            res.status(200).send({ message: "User already Exists" });
    } else {
        const user = new User(req.body);
        await user.save();
        res.status(201).send({ message: "Login Successful", user });
    }
    } catch (error) {
    res.status(400).send({ error: "Not shown Please Register" });
    }
}

// Login an Existing user
async function getUser(req, res) {
    try {
    const { email, password } = req.body;
    console.log(password);

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).send({ message: "Invalid Login Credentials" });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password,user.password);
    if (!isPasswordValid) {
        return res.status(400).send({ message: "Invalid Login Credentials" });
    }

    // Generate JWT 
    const token = jwt.sign({ _id: user.id }, "tejas", { expiresIn: "1d" });

    // Response with the token and user data
    const result = { message: "Login Successful",
        success: true,
        token:token,
        id: user._id
    };
    
    return res.status(200).send(result);
    } catch (error) {
        console.log("Error Occurred:",error);
    return res.status(500).send({ Message:"Internal Server Error...",error:"this cannot be solved"});
    }
}

module.exports = {
    addUser,
    getUser
};
