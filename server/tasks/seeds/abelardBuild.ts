const basicLevels = [
  [1],      // level 1: talentId only
  [53],     // level 2: talentId only
  [1],      // level 3: talentId only
  [7, 213],  // level 4: talentId + additionalTalentId
  [207, 67],  // level 5: talentId + additionalTalentId
  [6, 43], // level 6: talentId + additionalTalentId
  [67, 137], // level 7: talentId + additionalTalentId
  [43, 216], // level 8: talentId + additionalTalentId
  [9], // level 9: talentId + additionalTalentId
  [217, 71], // level 10: talentId + additionalTalentId
  [2, 138], // level 11: talentId + additionalTalentId
  [71, 45], // level 12: talentId + additionalTalentId
  [223, 45], // level 13: talentId + additionalTalentId
  [70, 20], // level 14: talentId + additionalTalentId
  [11], // level 15: talentId + additionalTalentId
];

const advancedLevels = [
  [5],        // level 1: talentId only
];

const exemplarLevels = [
  [5],        // level 1: talentId only
];

const buildId = 1;

const expandedLevels = (comp, archeTypeId, offset = 0) =>  comp.map((entry, index) => {
  const [talentId, additionalTalentId] = entry;
  const level = index + 1 + offset;

  const result = {
    buildId,
    level,
    archeTypeId,
    talentId,
    createdAt: new Date(),
  };

  if (additionalTalentId !== undefined) {
    result.additonalTalentId = additionalTalentId;
  }

  return result;
});


export default async function seedAbelard(db: any) {
  const companions = [
    ...expandedLevels(basicLevels, 29),
    ...expandedLevels(advancedLevels, 40, 15),
    ...expandedLevels(exemplarLevels, 35, 25)
  ]

  const batchSize = 5;
  for (let i = 0; i < companions.length; i += batchSize) {
    const batch = companions.slice(i, i + batchSize);
    if (batch.length) {
      await db.insert(tables.buildLevels).values(batch);
    }
  }
}
