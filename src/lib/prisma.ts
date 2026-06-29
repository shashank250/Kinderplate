import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

let _instance: PrismaClient | undefined;

function createInstance() {
  const connectionString = process.env.DATABASE_URL as string;

  if (!connectionString) {
    // Return a dummy object during build time to prevent crashing
    return {} as PrismaClient;
  }

  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const client = new PrismaClient({ adapter, log: ['query'] });
  return client;
}

export const prisma = new Proxy({} as PrismaClient, {
  get(target, prop, receiver) {
    if (!_instance) {
      _instance = globalForPrisma.prisma || createInstance();
      if (process.env.NODE_ENV !== 'production') {
        globalForPrisma.prisma = _instance;
      }
    }
    return Reflect.get(_instance, prop, receiver);
  }
});
