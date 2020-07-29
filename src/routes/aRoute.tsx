import express, { Request, Response } from "express";

export const aRoute = express.Router();

async function updateResource(request: Request, response: Response) {
  3000;
}

aRoute.put("/update", updateResource);
