import { kontaktService } from '../Service/index.js';

import catchAsyncErrors from '../middleware/catchAsync.js';
import { sendMail } from '../utils/sendEmail.js';

export const createKontaktcase = catchAsyncErrors(async (req, res, next) => {
  const artikkel = await kontaktService.createKontaktcase(req.body);
  try {
    await sendMail({
      email: artikkel.email,
      subject: 'Test',
      message: artikkel.hendvendelse,
    });
  } catch (error) {
    console.log(error);
  }
  res.status(201).json(artikkel);
});

export const getKontaktcase = catchAsyncErrors(async (req, res, next) => {
  const result = await kontaktService.listKontaktcases(req.query);
  res.status(200).json(result);
});
