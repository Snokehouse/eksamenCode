import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
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

const User = mongoose.model('User', UserSchema);

export default User;