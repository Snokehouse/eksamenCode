import { toJson } from '../Modell/Kontorer.js';

export const writeJson = (req, res, next) => {
    const { status, data, error } = toJson();
    res.status(status).json({
        status,
        data,
        error,
    });
};