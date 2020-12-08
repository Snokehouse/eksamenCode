import User from '../Modell/User.js';

export const createUser = async (data) => User.create(data);
export const getUserById = async (id) => User.findById(id);

export const getUserByEmail = async (email, usePassword) => {
    if (usePassword) {
      return User.findOne(email).select('+password');
    }
    return User.findOne(email);
};