export default eventHandler(async () => {
  const groupsWithRelations = await useDrizzle()
    .select({
      id: tables.groups.id,
      name: tables.groups.name,

    })
    .from(tables.groups)
    .all();

  return groupsWithRelations;
});
