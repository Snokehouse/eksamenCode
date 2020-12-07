import http from './http';

const API_URL = '/forfatter';

export const listForfatter = async () => {
  try {
    return await http.get(`${API_URL}`);
  } catch (feilmelding) {
    return feilmelding.response.data;
  }
};

