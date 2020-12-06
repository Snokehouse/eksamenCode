import http from './http';

const API_URL = '/artikkel';

export const list = async () => {
  try {
    return await http.get(`${API_URL}`);
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
