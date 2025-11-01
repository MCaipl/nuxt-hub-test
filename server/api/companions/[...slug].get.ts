export default eventHandler(async ({ context }) => {
  const companionsWithRelations = await useDrizzle()
    .select({
      id: tables.companionss.id,
      name: tables.companionss.name,
    })
    .from(tables.companionss)
    // .leftJoin(tables.acts, eq(tables.companionss.act, tables.acts.id))
    // .leftJoin(tables.companionsslots, eq(tables.companionss.companionsslot, tables.companionsslots.id))
    // .where(eq(tables.companionss.id, context.params.slug))
    .get();

  return companionsWithRelations;
});
