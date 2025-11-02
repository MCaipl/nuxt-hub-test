import { alias } from 'drizzle-orm/sqlite-core';

export default eventHandler(async ({ context }) => {
  const drizzle = useDrizzle();

  const archetypeTalent = alias(tables.talents, 'archetypeTalent');
  const additionalTalent = alias(tables.talents, 'additionalTalent');

  const rows = await drizzle
    .select({
      buildId: tables.builds.id,
      buildName: tables.builds.name,
      buildDescription: tables.builds.description,

      level: tables.buildLevels.level,

      groupId: tables.groups.id,
      groupName: tables.groups.name,

      archetypeTalentId: archetypeTalent.id,
      archetypeTalentName: archetypeTalent.name,

      additionalTalentId: additionalTalent.id,
      additionalTalentName: additionalTalent.name,
    })
    .from(tables.builds)
    .leftJoin(tables.buildLevels, eq(tables.builds.id, tables.buildLevels.buildId))
    .leftJoin(tables.groups, eq(tables.buildLevels.archeTypeId, tables.groups.id))
    .leftJoin(archetypeTalent, eq(tables.buildLevels.talentId, archetypeTalent.id))
    .leftJoin(additionalTalent, eq(tables.buildLevels.additonalTalentId, additionalTalent.id))

    .where(eq(tables.builds.id, context.params.slug))
    .all();

  if (!rows || rows.length === 0) {
    return { error: 'Build not found or has no levels' };
  }

  const build = {
    id: rows[0].buildId,
    name: rows[0].buildName,
    description: rows[0].buildDescription,
    levels: rows
      .map(row => ({
        level: row.level,
        archetype: row.groupId
          ?  row.groupName
          : null,
        talent: row.archetypeTalentId
          ? { name: row.archetypeTalentName }
          : null,
        additionalTalent: row.additionalTalentId
          ? { id: row.additionalTalentId, name: row.additionalTalentName }
          : null,
      })),
  };

  return build;
});
