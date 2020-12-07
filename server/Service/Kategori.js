import Kategori from '../Modell/Kategori.js';

export const createKategori = async (data) => Kategori.create(data);
export const getKategoriById = async (id) => Kategori.findById(id);
export const listKategori = async () => Kategori.find();
