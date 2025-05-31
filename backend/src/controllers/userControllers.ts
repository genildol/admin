
import { Request, Response } from 'express';
import { prisma } from '../prisma/client';

export const getAllUsers = async (_req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};
