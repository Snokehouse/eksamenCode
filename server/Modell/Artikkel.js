import mongoose from 'mongoose';
// import validator from 'validator';
// struktur av data som skal inn

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
});

ArtikkelSchema.index({
  tittel: 'text',
});

const Artikkel = mongoose.model('Artikkel', ArtikkelSchema);

export default Artikkel;
