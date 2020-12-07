import { list } from '../Modell/Forfatter.js';

export const getForfatter = (req, res, next) => {
  const { error, status, data } = list();
  res.status(status).json({ status, error, data });
};
