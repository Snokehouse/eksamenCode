import Joi from 'joi';

const userValues = {
  email: Joi.string().email().required().messages({
    'any.required': 'Epost må fylles ut',
    'string.email': 'Bruk riktig format på epost',
    'string.empty': 'Fyll ut epost',
  }),
  password: Joi.string().min(3).required().messages({
    'any.required': 'Passord må fylles ut',
    'string.min': 'Må bestå av minst 3 tall/bokstaver',
    'string.empty': 'Fyll ut passord',
  }),
};

export const registerSchema = Joi.object()
  .keys({
    name: Joi.string(),
    ...userValues,
  })
  .options({ abortEarly: false });

export const loginSchema = Joi.object()
  .keys({
    ...userValues,
  })
  .options({ abortEarly: false });