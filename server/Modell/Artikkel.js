import mongoose from 'mongoose';

const { Schema } = mongoose;

const ArtikkelSchema = new Schema({
  tittel: {
    type: String,
    required: [true, 'Fyll ut tittel'],
  },

  dato: {
    type: Date,
    required: [true, 'Fyll ut dato'],
  },

  beskrivelse: {
    type: String,
    required: [true, 'Fyll ut beskrivelse'],
  },

  innhold: {
    type: String,
    required: [true, 'Fyll ut beskrivelse'],
  },

  kategori: {
    type: String,
    required: [true, 'Fyll ut kategori'],
  },

  forfatter: {
    type: String,
    required: [true, 'Fyll ut forfatter'],
  },

  bildeID: {
    type: String,
    required: [true, 'Ingen bildeID funnet'],
  },

  hemmelig: {
    type: Boolean,
    required: [true, 'Velg åpen/hemmelig!!!!'],
  },
});

ArtikkelSchema.index({
  tittel: 'text',
});

const Artikkel = mongoose.model('Artikkel', ArtikkelSchema);

export default Artikkel;
