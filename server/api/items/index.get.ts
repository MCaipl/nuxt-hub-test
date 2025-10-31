export default eventHandler(async () => {
  const itemsWithRelations = await useDrizzle()
    .select({
      id: tables.items.id,
      name: tables.items.name,
      description: tables.items.description,
      createdAt: tables.items.createdAt,
      actName: tables.acts.name,
      itemSlotName: tables.itemSlots.name,
    })
    .from(tables.items)
    .leftJoin(tables.acts, eq(tables.items.act, tables.acts.id))
    .leftJoin(tables.itemSlots, eq(tables.items.itemSlot, tables.itemSlots.id))
    .all();

  return itemsWithRelations;
});
