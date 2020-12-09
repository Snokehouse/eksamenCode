import { kontaktService } from '../Service/index.js';

import catchAsyncErrors from '../middleware/catchAsync.js';
import { sendMail } from '../utils/sendEmail.js';

export const createKontaktcase = catchAsyncErrors(async (req, res, next) => {
  const kontakt = await kontaktService.createKontaktcase(req.body);
  try {
    await sendMail({
      email: kontakt.email,
      subject: 'Test',
      message: kontakt.hendvendelse,
    });
  } catch (error) {
    console.log(error);
  }
  res.status(201).json(kontakt);
});

export const getKontaktcase = catchAsyncErrors(async (req, res, next) => {
  const result = await kontaktService.listKontaktcases(req.query);
  res.status(200).json(result);
});
