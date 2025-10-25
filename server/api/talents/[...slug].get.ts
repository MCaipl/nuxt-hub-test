export default eventHandler(async ({context}) => {
const talentWithRelations = await useDrizzle()
  .select({
    id: tables.talents.id,
    name: tables.talents.name,
    description: tables.talents.description,

  })
  .from(tables.talents)
  // .leftJoin(tables.acts, eq(tables.talents.act, tables.acts.id))
  // .leftJoin(tables.talentslots, eq(tables.talents.talentslot, tables.talentslots.id))
  // .where(eq(tables.talents.id, context.params.slug))
  .get()

  return talentWithRelations

})