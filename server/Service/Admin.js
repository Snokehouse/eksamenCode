import Admin from '../Modell/Admin.js';

export const createAdmin = async (data) => Admin.create(data);
export const getAdminById = async (id) => Admin.findById(id);
