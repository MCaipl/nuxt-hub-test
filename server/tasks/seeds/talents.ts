export default async function seedTalents(db: any) {
    const talents = [
      {
        name: "Brutal Hunter",
        description: "Death world characters gain +15% critical hit chance against targets with the bleeding effect or with 50% or less of their maximum wounds",
        groupId: 1,
        createdAt: new Date(),
      },
      {
        name: "Trusty Weapons",
        description: "Death world characters gain +10% to critical hit chance for axes, hammers, and las weapons.",
        groupId: 1,
        createdAt: new Date(),
      },
      {
        name: "Wounded Beast",
        description: "Every Injury increases the death world character's Agility and Willpower by +5. Every trauma counts as 3 Injuries.",
        groupId: 1,
        createdAt: new Date(),
      },
      {
        name: "Lifetime of scars",
        description: "Death World characters take TGH bonus less damage from flame, toxic damage, and bleeding effects.",
        groupId: 1,
        createdAt: new Date(),
      },
      {
        name: "Tenacity",
        description: "Once per combat, when a death world character is suffering from the stunned, blinded, or immobilised condition, this condition is ignored, and they instead gain +20% temporary wounds to their maximum wounds.",
        groupId: 1,
        createdAt: new Date(),
      },
    ];


      const batchSize = 5;
  for (let i = 0; i < talents.length; i += batchSize) {
    const batch = talents.slice(i, i + batchSize);
    if (batch.length) {
      await db.insert(tables.talents).values(batch);
    }
  }

}
