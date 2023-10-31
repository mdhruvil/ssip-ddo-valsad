import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { SchemeInsert, schemes } from "~/server/db/schema";

export const schemeRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.custom<SchemeInsert>())
    .mutation(async ({ ctx: { db }, input }) => {
      await db.insert(schemes).values({ ...input, createdAt: new Date() });
    }),

  getAll: publicProcedure.query(async ({ ctx: { db } }) => {
    return await db.select().from(schemes);
  }),
});
