import Artikkel from '../Modell/Artikkel.js';
import Kontaktcase from '../Modell/Kontakt.js';

export const createKontaktcase = async (data) => Kontaktcase.create(data);
export const listKontaktcases = async () => Kontaktcase.find();
