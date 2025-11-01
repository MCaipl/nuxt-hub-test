export default eventHandler(async () => {
  const companionsWithRelations = await useDrizzle()
    .select({
      id: tables.companions.id,
      name: tables.companions.name,
      smallPortait: tables.companions.smallPortait,
    })
    .from(tables.companions)
    .all();

  return companionsWithRelations;
});
