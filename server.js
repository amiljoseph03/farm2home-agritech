import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import User from './models/User.js'; // Note: You must include the .js extension for local files in ESM!

const app = express();
app.use(express.json());
app.use(cors());

// Secret key for JWT (in production, use process.env.JWT_SECRET)
const JWT_SECRET = 'your_super_secret_jwt_key_123';

// ==========================================
// 1. REGISTER ENDPOINT
// ==========================================
app.post('/api/auth/register', async (req, res) => {
  try {
    const { fullName, email, password, phone, role, farmName, farmLocation } =
      req.body;

    if (!fullName || !email || !password || !phone || !role) {
      return res.status(400).json({
        success: false,
        message: 'All required registration fields must be filled.',
      });
    }

    const userExists = await User.findOne({ email: email.toLowerCase() });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: 'An account with this email address already exists.',
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUserConfig = {
      fullName,
      email: email.toLowerCase(),
      password: hashedPassword,
      phone,
      role,
    };

    if (role === 'farmer') {
      if (!farmName || !farmLocation) {
        return res.status(400).json({
          success: false,
          message: 'Farmers must provide farm name and location metrics.',
        });
      }
      newUserConfig.farmerDetails = { farmName, farmLocation };
    }

    const savedUser = new User(newUserConfig);
    await savedUser.save();

    return res.status(201).json({
      success: true,
      message: 'Account successfully registered.',
    });
  } catch (error) {
    console.error('Database Save Interruption:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error: ' + error.message,
    });
  }
});

// ==========================================
// 2. LOGIN ENDPOINT (ADDED)
// ==========================================
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // 1. Check basic parameters
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both email and password.',
      });
    }

    // 2. Find user by email
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email or password.',
      });
    }

    // 3. Optional: Verify role selected matches user's actual role
    if (role && user.role !== role) {
      return res.status(400).json({
        success: false,
        message: `Account found, but role mismatch. Registered as: ${user.role}`,
      });
    }

    // 4. Verify Password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email or password.',
      });
    }

    // 5. Generate Authentication Token
    const token = jwt.sign(
      { id: user._id, role: user.role, email: user.email },
      JWT_SECRET,
      { expiresIn: '1d' },
    );

    // 6. Return success response with user profile data (excluding password)
    return res.status(200).json({
      success: true,
      message: 'Login successful!',
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        farmerDetails: user.farmerDetails || null,
      },
    });
  } catch (error) {
    console.error('Login Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error: ' + error.message,
    });
  }
});

// Connect to MongoDB & Listen
mongoose
  .connect('mongodb://localhost:27017/yestone_agri')
  .then(() =>
    app.listen(5000, () => console.log('MERN server running on port 5000')),
  )
  .catch((err) => console.log(err));
