import Artikkel from '../Modell/Artikkel.js';
import Kontakt from '../Modell/Kontakt.js';

export const createKontaktcase = async (data) => Kontakt.create(data);
export const listKontaktcases = async () => Kontakt.find();
