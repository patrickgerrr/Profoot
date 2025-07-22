const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config();
const User = require('../models/user'); // Make sure path is correct

// Register function (for reference)
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const takenName=await User.findOne({username:name})
    const takenEmail=await User.findOne({email:email})
    if(takenName || takenEmail){
      return res.status(400).send({message:"Username or Email already exists"})
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username:name, email, password: hashedPassword });
    await user.save();
    const payload={
      id:user._id,
      name:user.username,
      role:user.role
    }
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {expiresIn:process.env.JWT_EXPIRY*24*60*60},
      (error, token) => {
        if (error) {
          console.errpr("Error generating token")
          return res.status(500).send({ message: 'Error generating token' });
        }
        return res.status(201).send({ data: { token } });
      }  
    )
    // res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    console.error(error)
    res.status(500).send({ error: "Registration failed" });
  }
};

// Login function
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    // Compare password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).send({ error: "Invalid password" });
    }

    const payload={id:user._id,name:user.username,role:user.role}

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {expiresIn:process.env.JWT_EXPIRY*24*60*60},
      (error, token) => {
        if (error) {
          console.err("Error generating token")
          return res.status(500).send({ message: 'Error generating token' });
        }
        return res.status(201).send({ data:{token} });
      }  
    )

  } catch (error) {
    res.status(500).send({ error: "Login failed" });
  }
};
