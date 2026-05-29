import express from "express";
import { items } from "./data.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello! Welcome to my application.");
});

router.get("/food", (req, res) => {
  res.json(items);
});

export default router;
