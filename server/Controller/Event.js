import { eventService } from '../Service/Index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const get = catchAsyncErrors(async (req, res, next) => {
  const event = await eventService.getEventById(req.params.id);
  if (!event) {
    return next(
      new ErrorHandler(`Finner ikke event med ${req.params.id}`, 404)
    );
  }
  res.status(201).json({ success: true, data: event });
});

export const list = catchAsyncErrors(async (req, res, next) => {
  const events = await eventService.listEvents(req.query);
  res.status(200).json({ success: true, data: events });
});

export const create = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;
  const event = await eventService.createEvent(req.body);
  res.status(201).json({ success: true, data: event });
});

export const update = catchAsyncErrors(async (req, res, next) => {
  let event = await eventService.getEventById(req.params.id);
  if (!event) {
    return next(
      new ErrorHandler(`Finner ikke event med ${req.params.id}`, 404)
    );
  }
  event = await eventService.updateEvent(req.params.id, req.body);
  res.status(200).json({ success: true, data: event });
});

export const remove = catchAsyncErrors(async (req, res, next) => {
  let event = await eventService.getEventById(req.params.id);
  if (!event) {
    return next(
      new ErrorHandler(`Finner ikke event med ${req.params.id}`, 404)
    );
  }
  event = await eventService.removeEvent(req.params.id);
  res.status(204).json({});
});
