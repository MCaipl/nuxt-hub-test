export default eventHandler(async () => {
  const talentsWithRelations = await useDrizzle()
    .select({
      id: tables.talents.id,
      name: tables.talents.name,
      description: tables.talents.description,
      groupName: tables.groups.name,
    })
    .from(tables.talents)
    .leftJoin(tables.groups, eq(tables.talents.groupId, tables.groups.id))
    .all();

  return talentsWithRelations;
});
