export default eventHandler(async (event) => {

  const query = getQuery(event)
  const companionId = query.companionId

  const buildsWithRelations = await useDrizzle()
    .select({
      id: tables.builds.id,
      name: tables.builds.name,
      description: tables.builds.description,
      createdAt: tables.builds.createdAt,
      companionName: tables.companions.name,
    })
    .from(tables.builds)
    .leftJoin(tables.companions, eq(tables.builds.companionId, tables.companions.id))
    .where(companionId ? eq(tables.builds.companionId, Number(companionId)) : undefined)
    .all()

  return  buildsWithRelations;
});
