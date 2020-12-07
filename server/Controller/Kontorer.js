import { list } from '../Modell/Kontorer.js';

export const getKontorer = (req, res, next) => {
  const { error, status, data } = list();
  res.status(status).json({ status, error, data });
};
