import http from './http';

const API_URL = '/kontakt';

export const sendKontaktskjema = async (data) => {
  try {
    return await http.post(`${API_URL}`, data);
  } catch (feilmelding) {
    return feilmelding.response.data;
  }
};
