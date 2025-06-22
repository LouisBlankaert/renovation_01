// Importation du client Prisma de la manière la plus simple possible
import * as prisma from '@prisma/client';

// Définition du type global pour éviter les connexions multiples
declare global {
  var prismaClient: any | undefined;
}

// Création d'une instance unique du client
let client: any;

if (process.env.NODE_ENV === 'production') {
  client = new prisma.PrismaClient();
} else {
  if (!global.prismaClient) {
    global.prismaClient = new prisma.PrismaClient();
  }
  client = global.prismaClient;
}

export default client;
