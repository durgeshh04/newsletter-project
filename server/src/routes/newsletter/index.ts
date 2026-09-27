import express from "express";
import { NewsLetterService } from "./newsletter.service";

export const NewsLetterRouter = () => {
  const router = express.Router();
  router.post("/signup", NewsLetterService);
  return router;
};
