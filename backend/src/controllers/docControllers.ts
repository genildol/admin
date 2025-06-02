import { NextFunction, Request, Response } from 'express';
import { prisma } from '../../prisma/client';

export const createDoc = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;

    // Simple validation
    if (!title || !content) {
      return res.status(400).json({ error: "Título e conteúdo são obrigatórios." });
    }

    const newDoc = await prisma.document.create({
      data: {
        title,
        content,
      }
    });
    return res.status(201).json(newDoc);
  } catch (err) {
    next(err);
  }
};

export const getAllDocuments = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const docs = await prisma.document.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return res.json(docs);
  } catch (err) {
    next(err);
  }
};









export const getAllDocs = async (_req: Request, res: Response) => {
  const docs = await prisma.document.findMany();
  res.json(docs);
};
