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
});

export const talents = sqliteTable("talents", {
	id: integer("id").primaryKey().notNull(),
	groupId: integer("group_id")
		.notNull()
		.references(() => groups.id),
	name: text("name").notNull(),
	description: text("description").default(""),
});
