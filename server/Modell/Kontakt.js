import mongoose from 'mongoose';
import validator from 'validator';

const { Schema } = mongoose;

const KontaktSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Fyll ut tittel'],
  },

  email: {
    type: String,
    required: [true, 'Fyll ut email'],
    validate: [validator.isEmail, 'Eposten er ikke gyldig'],
  },

  emne: {
    type: String,
    required: [true, 'Fyll ut emne'],
  },

  hendvendelse: {
    type: String,
    required: [true, 'Fyll ut hendvendelse'],
  },
});
const Kontaktcase = mongoose.model('Kontakt', KontaktSchema);

export default Kontaktcase;
