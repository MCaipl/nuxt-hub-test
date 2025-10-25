import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'


export const acts = sqliteTable('acts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
})

export const itemSlots = sqliteTable('item_slots', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
})


export const items = sqliteTable('items', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  description: text('description').notNull(),
  itemSlot: integer('item_slot_id').notNull().references(() => itemSlots.id),
  act: integer('act_id').notNull().references(() => acts.id),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
})
