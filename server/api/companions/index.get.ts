import { alias } from 'drizzle-orm/sqlite-core';

export default eventHandler(async () => {
  const groupsOrigin = alias(tables.groups, 'origin');
  const groupsHomeworld = alias(tables.groups, 'homeworld');

  const companionsWithRelations = await useDrizzle()
    .select({
      id: tables.companions.id,
      name: tables.companions.name,
      smallPortait: tables.companions.smallPortait,
      originName: groupsOrigin.name,
      homeworldName: groupsHomeworld.name,
    })
    .from(tables.companions)
    .leftJoin(groupsOrigin, eq(tables.companions.originId, groupsOrigin.id))
    .leftJoin(groupsHomeworld, eq(tables.companions.homeworldId, groupsHomeworld.id))
    .all();

  return companionsWithRelations;
});
