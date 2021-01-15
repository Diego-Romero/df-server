import mongoose from "mongoose";

const validateEmail = function (email: string) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [validateEmail, 'invalid email']
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 100
  }
}, { timestamps: true });

export const UserModel = mongoose.model('User', schema);