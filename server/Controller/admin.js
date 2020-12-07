import { adminService } from '../Service/index.js';

import catchAsyncErrors from '../middleware/catchAsync.js';

export const getAdmin = catchAsyncErrors(async (req, res, next) => {
  const admin = await adminService.getAdminById(req.params.id);
  if (!admin) {
    return next(
      new ErrorHandler(`Finner ikke admin med ${req.params.id}`, 404)
    );
  }
  res.status(200).json(admin);
});

export const createAdmin = catchAsyncErrors(async (req, res, next) => {
  const admin = await adminService.createAdmin(req.body);
  res.status(201).json(admin);
});
