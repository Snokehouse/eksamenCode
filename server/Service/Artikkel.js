import Artikkel from '../Modell/Artikkel.js';

export const createArtikkel = async (data) => Artikkel.create(data);
export const getArtikkelById = async (id) => Artikkel.findById(id);
export const listArtikkel = async () => Artikkel.find();