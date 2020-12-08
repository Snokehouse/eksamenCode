import { userService } from '../Service/index.js';

import catchAsyncErrors from '../middleware/catchAsync.js';

export const getUser = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.getUserById(req.params.id);
  if (!user) {
    return next(new ErrorHandler(`Finner ikke user med ${req.params.id}`, 404));
  }
  res.status(200).json(user);
});

export const createUser = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
});
