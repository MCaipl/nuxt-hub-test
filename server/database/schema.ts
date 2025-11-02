import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const acts = sqliteTable("acts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});

export const itemSlots = sqliteTable("item_slots", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});

export const items = sqliteTable("items", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description").notNull(),
  itemSlot: integer("item_slot_id")
    .notNull()
    .references(() => itemSlots.id),
  act: integer("act_id")
    .notNull()
    .references(() => acts.id),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});

export const groups = sqliteTable("groups", {
  id: integer("id").primaryKey().notNull(),
  name: text("name").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});

export const talentTypes = sqliteTable("talent_types", {
  id: integer("id").primaryKey().notNull(),
  name: text("name").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});

export const talents = sqliteTable("talents", {
  id: integer("id").primaryKey().notNull(),
  talentTypeId: integer("talent_type_id")
    .notNull()
    .references(() => talentTypes.id),
  groupId: integer("group_id")
    .notNull()
    .references(() => groups.id),
  name: text("name").notNull(),
  description: text("description").default(""),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});


export const companions = sqliteTable("companions", {
  id: integer("id").primaryKey().notNull(),
  name: text("name").notNull(),
  smallPortait: text("smallPortait").notNull(),
  originId: integer("origin_id")
    .notNull()
    .references(() => groups.id),
  homeworldId: integer("homeworld_id")
    .notNull()
    .references(() => groups.id),
  actId: integer("act_id")
    .notNull()
    .references(() => acts.id),
  basicArchetypeId: integer("basic_archetype_id")
    .notNull()
    .references(() => groups.id),
  starterLevel: integer("starter_level").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});


export const builds = sqliteTable("builds", {
  id: integer("id").primaryKey().notNull(),
  name: text("name").notNull(),
  description: text("description").default(""),
  companionId: integer("companion_id")
    .notNull()
    .references(() => companions.id),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});

export const buildLevels = sqliteTable("build_levels", {
  id: integer("id").primaryKey().notNull(),
  buildId: integer("build_id")
    .notNull()
    .references(() => builds.id),
  level: integer("level").notNull(),
  talentId: integer("talent_id")
    .notNull()
    .references(() => talents.id),
  additonalTalentId: integer("talent_id")
    .references(() => talents.id),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});
