import { NextFunction, Request, Response } from "express";
import { isEmailValid } from "../../utils/email.validations";
import { INewsLetter } from "./types";

export const NewsLetterService = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const payload = req.body as INewsLetter;
    if (!payload.email) {
      throw new Error("Email is required");
    }
    if (!isEmailValid(payload.email)) {
      throw new Error("Please enter valid email");
    }

    return res.status(201).json({ message: "successfully signed up" });
  } catch (error) {
    return next(error);
  }
};
