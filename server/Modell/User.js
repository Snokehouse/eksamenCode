import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// struktur av data som skal inn

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Fyll ut navn'],
    unique: true,
  },

  email: {
    type: String,
    required: [true, 'Fyll ut epost'],
    unique: true, // unique index and value
    validate: [validator.isEmail, 'Eposten er ikke gyldig'],
  },

  password: {
    type: String,
    required: [true, 'Fyll ut passord'],
    minlength: [8, 'Passord må bestå av minst 8 verdier'],
    maxlength: [40, 'Passord kan maks inneholde 40 verdier'],
    select: false,
  },

  role: {
    type: String,
    enum: {
      values: ['user', 'admin'],
      message: 'Rolle ikke fylt ut',
    },
    default: 'user'
  }
});

// Tatt fra en youtube video som linka en git branch, sjekk README nr. 1
UserSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(this.password, salt);

    this.password = passwordHash;
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = async function(password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch(error) {
    throw new Error(error);
  }
};

UserSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

const User = mongoose.model('User', UserSchema);

export default User;
