import http from './http';

const API_URL = '/artikkel';

export const list = async (data) => {
  try {
    if (data[0].kategori === '') {
      return await http.get(
        `${API_URL}?limit=${data[0].limit}&page=${data[0].limit}&q=${data[0].q}`
      );
    }
    return await http.get(
      `${API_URL}?limit=${data[0].limit}&page=${data[0].limit}&q=${data[0].q}&kategori=${data[0].kategori}`
    );
  } catch (feilmelding) {
    return feilmelding.response.data;
  }
};

export const getArtikkel = async (id) => {
  try {
    return await http.get(`${API_URL}/${id}`);
  } catch (feilmelding) {
    return feilmelding.response.data;
  }
};

export const create = async (data) => {
  try {
    return await http.post(`${API_URL}`, data);
  } catch (feilmelding) {
    return feilmelding.response.data;
  }
};
export const updateArtikkel = async (id, data) => {
  try {
    return await http.put(`${API_URL}/${id}`, data);
  } catch (feilmelding) {
    return feilmelding.response.data;
  }
};
export const deleteArtikkel = async (id) => {
  try {
    return await http.delete(`${API_URL}/${id}`);
  } catch (feilmelding) {
    return feilmelding.response.data;
  }
};
