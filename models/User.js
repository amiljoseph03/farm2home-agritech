import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'farmer', 'admin'],
      default: 'user',
    },
    farmerDetails: {
      farmName: { type: String },
      farmLocation: { type: String },
    },
  },
  { timestamps: true },
);

export default mongoose.model('User', userSchema);
