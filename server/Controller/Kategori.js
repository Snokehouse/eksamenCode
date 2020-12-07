import {kategoriService} from '../Service/index.js';

import catchAsyncErrors from '../middleware/catchAsync.js';

export const createKategori = catchAsyncErrors(async (req, res, next) => {
  const kategori = await kategoriService.createKategori(req.body);
  res.status(201).json(kategori);
});

export const list = catchAsyncErrors(async (req, res, next) => {
  const result = await kategoriService.listKategori();
  res.status(200).json(result);
});
