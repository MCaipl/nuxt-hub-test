export default async function seedCompanions(db: any) {
  const companions = [
    {
      name: "Abelard Werserian",
      smallPortait: "abelard.jpg",
      originId: 5,
      homeworldId: 18,
      createdAt: new Date(),
    },
    {
      name: "Idira Tlass",
      smallPortait: "idira.jpg",
      originId: 16,
      homeworldId: 23,
      createdAt: new Date(),
    },
    {
      name: "Pasqal Haneumann",
      smallPortait: "pasqal.jpg",
      originId: 15,
      homeworldId: 19,
      createdAt: new Date(),
    },
    {
      name: "Cassia Orsellio",
      smallPortait: "cassia.jpg",
      originId: 9,
      homeworldId: 24,
      createdAt: new Date(),
    },
    {
      name: "Yrliet Lanaevyss",
      smallPortait: "yrliet.jpg",
      originId: 12,
      homeworldId: 25,
      createdAt: new Date(),
    },
    {
      name: "Sister Argenta",
      smallPortait: "argenta.jpg",
      originId: 10,
      homeworldId: 18,
      createdAt: new Date(),
    },
    {
      name: "Jae Heydari",
      smallPortait: "jae.jpg",
      originId: 13,
      homeworldId: 18,
      createdAt: new Date(),
    },
    {
      name: "Heinrix van Calox",
      smallPortait: "heinrix.jpg",
      originId: 7,
      homeworldId: 18,
      createdAt: new Date(),
    },
    {
      name: "Ulfar",
      smallPortait: "ulfar.jpg",
      originId: 11,
      homeworldId: 26,
      createdAt: new Date(),
    },
    {
      name: "Marazhai Aezyrraesh",
      smallPortait: "marazhai.jpg",
      originId: 14,
      homeworldId: 27,
      createdAt: new Date(),
    },
    {
      name: "Kibellah",
      smallPortait: "kibellah.jpg",
      originId: 17,
      homeworldId: 22,
      createdAt: new Date(),
    },
    {
      name: "Solomorne Anthar",
      smallPortait: "solomorne.jpg",
      originId: 8,
      homeworldId: 18,
      createdAt: new Date(),
    },
    {
      name: "Incendia Bastaal-Chorda",
      smallPortait: "incendia.jpg",
      originId: 4,
      homeworldId: 18,
      createdAt: new Date(),
    },
    {
      name: "Calligos Winterscale",
      smallPortait: "calligos.jpg",
      originId: 6,
      homeworldId: 18,
      createdAt: new Date(),
    }
  ];

  await db.insert(tables.companions).values(companions);
}
