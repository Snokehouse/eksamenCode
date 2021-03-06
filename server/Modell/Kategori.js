import mongoose from 'mongoose';

//struktur av data som skal inn
const { Schema } = mongoose;

const KategoriSchema = new Schema({
  kategori: {
    type: String,
    required: [true, 'Fyll ut kategori'],
    unique: true,
  },
});

const Kategori = mongoose.model('Kategori', KategoriSchema);

export default Kategori;
