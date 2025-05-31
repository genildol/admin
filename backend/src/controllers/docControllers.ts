
import { Request, Response } from 'express';
import { prisma } from '../prisma/client';

export const getAllDocs = async (_req: Request, res: Response) => {
  const docs = await prisma.document.findMany();
  res.json(docs);
};
