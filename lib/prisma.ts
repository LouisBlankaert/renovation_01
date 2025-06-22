import * as prismaClient from '@prisma/client';

// PrismaClient est attaché à l'objet global en développement pour éviter
// d'épuiser la limite de connexions à la base de données pendant le hot-reloading
declare global {
  var prisma: typeof prismaClient | undefined;
}

const prisma = global.prisma || prismaClient;

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;
