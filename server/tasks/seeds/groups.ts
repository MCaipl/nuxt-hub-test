export default async function seedGroups(db: any) {
  const groups = [
    { name: "Astra Militarum Commander", createdAt: new Date() },
    { name: "Commissar", createdAt: new Date() },
    { name: "Crime Lord", createdAt: new Date() },
    { name: "Ministorum Priest", createdAt: new Date() },
    { name: "Navy Officer", createdAt: new Date() },
    { name: "Noble", createdAt: new Date() },
    { name: "Sanctioned Psyker", createdAt: new Date() },
    { name: "Arbitrator", createdAt: new Date() },
    { name: "Navigator", createdAt: new Date() },
    { name: "Adepta Sororitas", createdAt: new Date() },
    { name: "Adeptus Astartes", createdAt: new Date() },
    { name: "Asuryani Outcast", createdAt: new Date() },
    { name: "Cold Trader", createdAt: new Date() },
    { name: "Kabalite Dracon", createdAt: new Date() },
    { name: "Tech-Priest", createdAt: new Date() },
    { name: "Unsanctioned Psyker", createdAt: new Date() },
    { name: "Death Cult Assassin", createdAt: new Date() },

    { name: "Imperial World", createdAt: new Date() }, // 18
    { name: "Forge World", createdAt: new Date() },
    { name: "Fortress World", createdAt: new Date() }, // 20
    { name: "Hive World", createdAt: new Date() },
    { name: "Voidborn", createdAt: new Date() },
    { name: "Forsaken World", createdAt: new Date() },
    { name: "Unknown", createdAt: new Date() },
    { name: "Craftworld Crudarch", createdAt: new Date() },
    { name: "Fenris", createdAt: new Date() },
    { name: "Dark City of Commorragh", createdAt: new Date() },


  ];

  await db.insert(tables.groups).values(groups);
}
