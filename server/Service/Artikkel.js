import Artikkel from '../Modell/Artikkel.js';
import { ApiFilters } from '../utils/apiFilters.js';

export const createArtikkel = async (data) => Artikkel.create(data);
export const getArtikkelById = async (id) => Artikkel.findById(id);
export const listArtikkel = async (queryStr) => {
  console.log(queryStr.q);
  const { limit, page } = queryStr;
  const filters = new ApiFilters(Artikkel.find(), queryStr)
    .filter()
    // .sort()
    // .limitFields()
    .searchByQuery();

  const artikkel = await filters.query;
  const paginated = await filters.pagination().query.populate();
  return {
    results: artikkel.length,
    totalPages: Math.ceil(artikkel.length / limit) || 1,
    currentPage: page && page > 0 ? parseInt(page) : 1,
    data: paginated,
  };
};
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
