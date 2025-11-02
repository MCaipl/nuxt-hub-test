export default eventHandler(async ({ context }) => {
  const buildsWithRelations = await useDrizzle()
    .select({
      id: tables.builds.id,
      name: tables.builds.name,
      description: tables.builds.description,
    })
    .from(tables.builds)
    .where(eq(tables.builds.id, context.params.slug))
    .get();

  return buildsWithRelations;
});
