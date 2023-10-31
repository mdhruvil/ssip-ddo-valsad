import {
  InferInsertModel,
  InferSelectModel,
  relations,
  sql,
} from "drizzle-orm";

import {
  blob,
  index,
  integer,
  primaryKey,
  sqliteTable,
  sqliteTableCreator,
  text,
} from "drizzle-orm/sqlite-core";
import { type AdapterAccount } from "next-auth/adapters";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */

export const posts = sqliteTable(
  "post",
  {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name"),
    createdById: text("createdById").notNull(),
    createAt: integer("createdAt", { mode: "timestamp" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: integer("updatedAt", { mode: "timestamp" }),
  },
  (post) => ({
    createdByIdIdx: index("createdById_idx").on(post.createdById),
    nameIndex: index("name_idx").on(post.name),
  }),
);

export const schemes = sqliteTable(
  "scheme",
  {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name"),
    createdAt: integer("createdAt", { mode: "timestamp" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    details: text("details"),
    benefits: text("benefits"),
    eligibility: text("eligibility"),
    lastDate: integer("lastDate", { mode: "timestamp" }).notNull(),
    applicationProcess: text("applicationProcess"),
    requiredDocs: text("requiredDocs"),
    portalLink: text("portalLink"),
    gender: text("gender", { enum: ["male", "female", "all"] }),
    maritalStatus: text("maritalStatus", { enum: ["married", "unmarried"] }),
    category: text("category", { enum: ["General", "OBC", "SC", "ST"] }),
    schemeImage: text("schemeImage"),
  },
  (scheme) => ({
    schemeCreatedAtIdx: index("schemeCreatedAtIdx").on(scheme.createdAt),
    genderIdx: index("genderIdx").on(scheme.gender),
    maritalStatusIdx: index("maritalStatus").on(scheme.maritalStatus),
    categoryIdx: index("categoryIdx").on(scheme.category),
    lastDateIdx: index("lastDate").on(scheme.lastDate),
  }),
);

export const users = sqliteTable("user", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: integer("emailVerified", { mode: "timestamp_ms" }),
  image: text("image"),
});

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
}));

export const accounts = sqliteTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
  }),
);

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));

export const sessions = sqliteTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
});

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const verificationTokens = sqliteTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  }),
);

export type Scheme = InferSelectModel<typeof schemes>;
export type SchemeInsert = InferInsertModel<typeof schemes>;
