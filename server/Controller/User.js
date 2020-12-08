import { userService } from '../Service/Index.js';

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

export const listEvents = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.user;
  const events = await userService.listUserEvents(id);
  res.status(200).json(events);
});
