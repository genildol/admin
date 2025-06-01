import { NextFunction, Request, Response } from 'express';
import { prisma } from '../../prisma/cliente';
import bcrypt from 'bcryptjs';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;

    //validação simples
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Nome, e-mail e senha são obrigatórios." });
    }
  }
}
// Verifica se o e-mail já existe
const existingUser = await prisma.user.findUnique({ where: { email } });
if (existingUser) {
  return res.status(400).json({ error: 'Email já existe.' });
}
//
const hashepPassword = await bcrypt.hash(password, 10);

//criação no BD
const newUser = await prisma.user.create({
  data: {
    name,
    email,
    password: hashedPassord,
  },
  select: {
    id: true,
    name: true,
    email: true,
  },
});

return res.status(201).json(newUser);
}catch (err) {
  next(err);
}
};

export const getAllUsers = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return res.json(users);
  } catch (err) {
    next(err);
  }
};