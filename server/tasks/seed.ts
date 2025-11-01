

export default defineTask({
  meta: {
    name: "db:seed",
    description: "Run database seed task",
  },
  async run() {

const drizzle = useDrizzle() as unknown as any;
    const client = drizzle.client ?? drizzle.db ?? drizzle;

    // Robust helper to run raw SQL against different sqlite client shapes
    const runSql = async (sql: string) => {
      if (!client) throw new Error("No DB client available");
      // better-sqlite3
      if (typeof client.exec === "function") return client.exec(sql);
      // node-sqlite3 (callback API) — wrap in Promise
      if (typeof client.run === "function" && client.run.length > 1) {
        return await new Promise((res, rej) =>
          client.run(sql, function (err: any) {
            if (err) return rej(err);
            res(this);
          })
        );
      }
      // node-sqlite3 with Promise API or other clients
      if (typeof client.run === "function") return client.run(sql);
      if (typeof client.prepare === "function") {
        // better-sqlite3 prepare/run
        const stmt = client.prepare(sql);
        if (typeof stmt.run === "function") return stmt.run();
        if (typeof stmt.all === "function") return stmt.all();
      }
      if (typeof client.all === "function") return client.all(sql);
      if (typeof client.query === "function") return client.query(sql);
      throw new Error("No executable SQL method found on client");
    };

    // Diagnostic: list sqlite_sequence entries (if any)
    try {
      const seqBefore = await runSql("SELECT name, seq FROM sqlite_sequence;");
      // eslint-disable-next-line no-console
      console.log("sqlite_sequence before reset:", seqBefore);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn("Could not read sqlite_sequence (may not exist):", e?.message || e);
    }

    // Delete rows (dependents first) to avoid FK issues, then remove sqlite_sequence entries and VACUUM.
    await useDrizzle().delete(tables.items).execute();
    await useDrizzle().delete(tables.companions).execute();
    await useDrizzle().delete(tables.talents).execute();
    await useDrizzle().delete(tables.groups).execute();
    await useDrizzle().delete(tables.itemSlots).execute();
    await useDrizzle().delete(tables.acts).execute();

    // Attempt to clear sqlite_sequence for these table names
    const tableNames = ["acts", "item_slots", "items", "companions", "talents", "groups"];
    try {
      await runSql(`
        DELETE FROM sqlite_sequence
        WHERE name IN (${tableNames.map((n) => `'${n}'`).join(",")});
      `);
      // VACUUM to ensure sqlite frees space and resets internal state
      await runSql("VACUUM;");
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn("Could not reset sqlite_sequence or vacuum:", e?.message || e);
      // fallback already deleted rows above; if AUTOINCREMENT wasn't used, sqlite_sequence won't exist.
    }

    // Diagnostic: list sqlite_sequence entries after the reset attempt
    try {
      const seqAfter = await runSql("SELECT name, seq FROM sqlite_sequence;");
      // eslint-disable-next-line no-console
      console.log("sqlite_sequence after reset:", seqAfter);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn("Could not read sqlite_sequence after reset:", e?.message || e);
    }

    const acts = [
      {
        name: "Prologue",
        createdAt: new Date(),
      },
      {
        name: "Act 1",
        createdAt: new Date(),
      },
      {
        name: "Act 2",
        createdAt: new Date(),
      },
      {
        name: "Act 3",
        createdAt: new Date(),
      },
      {
        name: "Act 4",
        createdAt: new Date(),
      },
      {
        name: "Act 5",
        createdAt: new Date(),
      },
    ];
    await useDrizzle().insert(tables.acts).values(acts);

    const itemSlots = [
      {
        name: "Armor",
        createdAt: new Date(),
      },
      {
        name: "Helmet",
        createdAt: new Date(),
      },
      {
        name: "Necklace",
        createdAt: new Date(),
      },
      {
        name: "Trinket",
        createdAt: new Date(),
      },
      {
        name: "Glove",
        createdAt: new Date(),
      },
      {
        name: "Cloak",
        createdAt: new Date(),
      },
      {
        name: "Boots",
        createdAt: new Date(),
      },
      {
        name: "Weapon",
        createdAt: new Date(),
      },
    ];
    await useDrizzle().insert(tables.itemSlots).values(itemSlots);

    const items = [
      {
        name: "Pneumo Boots",
        description: "Use Charge cost -1 AP.",
        itemSlot: 7, // Boots
        act: 2,
        createdAt: new Date(),
      },
      {
        name: "Skirmisher Boots",
        description: "When dealing dmg the wearer has 25% chance to gain 2MP.",
        itemSlot: 7, // Boots
        act: 2,
        createdAt: new Date(),
      },
      {
        name: "Warmonger Boots",
        description:
          "When the wearer kills 2 or more enemies with a single attack, the attack doesnt spend all of the wearers MP	.",
        itemSlot: 7, // Boots
        act: 2,
        createdAt: new Date(),
      },
      {
        name: "Grace of the Oblivious	",
        description: "Grants +5 Toughness if the wearer has less than 35 Intelligence.",
        itemSlot: 3, // Necklace
        act: 1,
        createdAt: new Date(),
      },
      {
        name: "Daemon Tool",
        description:
          "When weaer inflict warp dmg, target suffers burning (3) burning effects inflicted by the wearer scale with veil degregation.",
        itemSlot: 3, // Necklace
        act: 2,
        createdAt: new Date(),
      },
    ];
    await useDrizzle().insert(tables.items).values(items);

    const groups = [
      {
        name: "Astra Militarum Commander",
      },
      {
        name: "Commissar",
      },
      {
        name: "Crime Lord",
      },
      {
        name: "Ministorum Priest",
      },
      {
        name: "Navy Officer",
      },
      {
        name: "Noble",
      },
      {
        name: "Sanctioned Psyker",
      },
      {
        name: "Arbitrator",
      },
      {
        name: "Navigator",
      },
      {
        name: "Adepta Sororitas",
      },
      {
        name: "Adeptus Astartes",
      },
      {
        name: "Asuryani Outcast",
      },
      {
        name: "Cold Trader",
      },
      {
        name: "Kabalite Dracon",
      },
      {
        name: "Tech-Priest",
      },
      {
        name: "Unsanctioned Psyker",
      },

    ];
    await useDrizzle().insert(tables.groups).values(groups);

    const talents = [
      {
        name: "Brutal Hunter",
        description: "Increases damage dealt to beasts by 20%.",
        groupId: 1,
      },
      {
        name: "Trusty Weapons",
        description: "Increases damage dealt to beasts by 20%.",
        groupId: 1,
      },
    ];
    await useDrizzle().insert(tables.talents).values(talents);


    const companions = [
      {
        name: "Abelard Werserian",
        smallPortait: "abelard.jpg",
        originId: 5
      },
      {
        name: "Idira Tlass",
        smallPortait: "idira.jpg",
        originId: 16
      },
      {
        name: "Pasqal Haneumann",
        smallPortait: "pasqal.jpg",
        originId: 15
      },
      {
        name: "Cassia Orsellio",
        smallPortait: "cassia.jpg",
        originId: 9
      },
      {
        name: "Yrliet Lanaevyss",
        smallPortait: "yrliet.jpg",
        originId: 12
      },
      {
        name: "Sister Argenta",
        smallPortait: "argenta.jpg",
        originId: 10
      },
      {
        name: "Jae Heydari",
        smallPortait: "jae.jpg",
        originId: 13
      },
      {
        name: "Heinrix van Calox",
        smallPortait: "heinrix.jpg",
        originId: 7
      },
      {
        name: "Ulfar",
        smallPortait: "ulfar.jpg",
        originId: 11
      },
      {
        name: "Kibellah",
        smallPortait: "kibellah.jpg",
        originId: 1
      },
      {
        name: "Solomorne Anthar",
        smallPortait: "solomorne.jpg",
        originId: 8
      }
    ];
    await useDrizzle().insert(tables.companions).values(companions);



    return { result: "success" };
  },
});
