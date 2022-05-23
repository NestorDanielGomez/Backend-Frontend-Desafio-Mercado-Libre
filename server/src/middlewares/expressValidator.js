import { request, response } from "express";
import { validationResult } from "express-validator";

export const expressValidator = async (req = request, res = response, next) => {
  const { errors } = validationResult(req);
  if (errors.length > 0) {
    return res.status(400).json({
      ok: false,
      errors,
    });
  }

  next();
};
