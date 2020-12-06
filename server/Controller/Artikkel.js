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
    const result = await artikkelService.listArtikkel();
    res.status(200).json(result);
});
