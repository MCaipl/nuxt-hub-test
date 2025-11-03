const basicLevels = [
  [128],      // level 1: talentId only
  [571],     // level 2: talentId only
  [129],      // level 3: talentId only
  [135, 151],  // level 4: talentId + additionalTalentId
  [145, 585],  // level 5: talentId + additionalTalentId
  [134, 561], // level 6: talentId + additionalTalentId
  [585, 64], // level 7: talentId + additionalTalentId
  [561, 154], // level 8: talentId + additionalTalentId
  [137], // level 9: talentId + additionalTalentId
  [217, 589], // level 10: talentId + additionalTalentId
  [130, 65], // level 11: talentId + additionalTalentId
  [589, 563], // level 12: talentId + additionalTalentId
  [161, 563], // level 13: talentId + additionalTalentId
  [588, 598], // level 14: talentId + additionalTalentId
  [139], // level 15: talentId + additionalTalentId
];

const advancedLevels = [
  // [5],        // level 1: talentId only
  // [5],        // level 2: talentId only
  // [446], // level 3: talentId + additionalTalentId
  // [209, 139], // level 4: talentId + additionalTalentId
  // [210, 67], // level 5: talentId + additionalTalentId
  // [449, 67], // level 6: talentId + additionalTalentId
  // [212, 142], // level 7: talentId + additionalTalentId
  // [214, 143], // level 8: talentId + additionalTalentId
  // [215, 144], // level 9: talentId + additionalTalentId
  // [218, 145], // level 10: talentId + additionalTalentId
  // [219, 146], // level 11: talentId + additionalTalentId
  // [220, 147], // level 12: talentId + additionalTalentId
  // [221, 148], // level 13: talentId + additionalTalentId
  // [222, 149], // level 14: talentId + additionalTalentId
  // [224],      // level 15
  // [225],      // level 16
  // [226],      // level 17
  // [227],      // level 18
  // [228],      // level 19
  // [229],      // level 20
];

const exemplarLevels = [
  // [483, 204],        // level 1: talentId only
  // [43, 461],        // level 2: talentId only
  // [71, 135], // level 3: talentId + additionalTalentId
  // [5, 43], // level 4: talentId + additionalTalentId
  // [480, 467], // level 5: talentId + additionalTalentId
  // [67, 211], // level 6: talentId + additionalTalentId
  // [212, 142], // level 7: talentId + additionalTalentId
  // [214, 143], // level 8: talentId + additionalTalentId
  // [215, 144], // level 9: talentId + additionalTalentId
  // [218, 145], // level 10: talentId + additionalTalentId
  // [219, 146], // level 11: talentId + additionalTalentId
  // [220, 147], // level 12: talentId + additionalTalentId
  // [221, 148], // level 13: talentId + additionalTalentId
  // [222, 149], // level 14: talentId + additionalTalentId
  // [224],      // level 15
  // [225],      // level 16
  // [226],      // level 17
  // [227],      // level 18
  // [485, 452],      // level 19
  // [229],      // level 20
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
