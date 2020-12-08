import Artikkel from '../Modell/Artikkel.js';

export const createArtikkel = async (data) => Artikkel.create(data);
export const getArtikkelById = async (id) => Artikkel.findById(id);
export const listArtikkel = async () => Artikkel.find();
export const updateArtikkel = async (id, data) =>
  Artikkel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

export const removeArtikkel = async (id) => {
  const artikkel = await Artikkel.findById(id);
  artikkel.remove();
};
