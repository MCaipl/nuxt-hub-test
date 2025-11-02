import { alias } from 'drizzle-orm/sqlite-core';

export default eventHandler(async () => {
  const groupsOrigin = alias(tables.groups, 'origin');
  const groupsHomeworld = alias(tables.groups, 'homeworld');
  const groupsBaseArchetype = alias(tables.groups, 'baseArchetype');
  const groupsActs = alias(tables.acts, 'acts');

  const companionsWithRelations = await useDrizzle()
    .select({
      id: tables.companions.id,
      name: tables.companions.name,
      smallPortait: tables.companions.smallPortait,
      originName: groupsOrigin.name,
      homeworldName: groupsHomeworld.name,
      baseArchetypeName: groupsBaseArchetype.name,
      actName: groupsActs.name,
      starterLevel: tables.companions.starterLevel,
    })
    .from(tables.companions)
    .leftJoin(groupsOrigin, eq(tables.companions.originId, groupsOrigin.id))
    .leftJoin(groupsHomeworld, eq(tables.companions.homeworldId, groupsHomeworld.id))
    .leftJoin(groupsBaseArchetype, eq(tables.companions.basicArchetypeId, groupsBaseArchetype.id))
    .leftJoin(groupsActs, eq(tables.companions.actId, groupsActs.id))
    .orderBy(tables.companions.actId)
    .all();

  return companionsWithRelations;
});
