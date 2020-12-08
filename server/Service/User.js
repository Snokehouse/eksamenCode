import User from '../Modell/User.js';

export const createUser = async (data) => User.create(data);
export const getUserById = async (id) => User.findById(id);
