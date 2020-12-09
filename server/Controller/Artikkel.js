import {artikkelService} from '../Service/index.js';

import catchAsyncErrors from '../middleware/catchAsync.js';

export const getArtikkel = catchAsyncErrors(async (req, res, next) => {
  const artikkel = await artikkelService.getArtikkelById(req.params.id);
  if (!artikkel) {
    return next(
      new ErrorHandler(`Finner ikke artikkel med ${req.params.id}`, 404)
    );
  }
  res.status(200).json(artikkel);
});

export const createArtikkel = catchAsyncErrors(async (req, res, next) => {
  const artikkel = await artikkelService.createArtikkel(req.body);
  res.status(201).json(artikkel);
});

export const getArtikler = catchAsyncErrors(async (req, res, next) => {
  const result = await artikkelService.listArtikkel(req.query);
  res.status(200).json(result);
});

export const update = catchAsyncErrors(async (req, res, next) => {
  let event = await artikkelService.getArtikkelById(req.params.id);
  if (!event) {
    return next(
      new ErrorHandler(`Finner ikke artikkel med ${req.params.id}`, 404)
    );
  }
  event = await artikkelService.updateArtikkel(req.params.id, req.body);
  res.status(200).json(event);
});

export const remove = catchAsyncErrors(async (req, res, next) => {
  let event = await artikkelService.getArtikkelById(req.params.id);
  if (!event) {
    return next(
      new ErrorHandler(`Finner ikke artikkel med ${req.params.id}`, 404)
    );
  }
  event = await artikkelService.removeArtikkel(req.params.id);
  res.status(204).json({});
});
