import { talentTypes } from "~~/server/database/schema";

export default async function seedTalents(db: any) {
    const talents = [
      {
        name: "Endure",
        description: `Until the warriors next turn, they gain (TGH \\2) Deflection and (10 + level \\6) temporary Wounds`,
        groupId: 29,
        talentTypeId: 1,
        createdAt: new Date(),
      },
      {
        name: "Reckless Strike",
        description: `The warrior's next melee attack agains +(5 x STR)% armour penetration and (2x Strength) damage and ignores (3x WS)% of the target's parry. Every enemy who survives an attack enhanced by this ability will attawck the warrior in return, including creatures with ranged weapons.`,
        groupId: 29,
        talentTypeId: 1,
        createdAt: new Date(),
      },
      {
        name: "Sworn Enemy",
        description: `The Warrior marks a target, gaining +(10 + 2 x TGH bonus)% armour and +(2 + STR bonus) damage on melee attacks against that target.
If the target attacks the Warrior during this round, the Warrior gains +1 AP (once per round).`,
        groupId: 29,
        talentTypeId: 1,
        createdAt: new Date(),
      },
      {
        name: "Break Through",
        description: ` `,
        groupId: 29,
        talentTypeId: 1,
        createdAt: new Date(),
      },
      {
        name: "Forceful Strike",
        description: `The Warrior gathers all their strength for a crushing strike. Their next melee attack pushes the enemy away. The distance of that push is equal to (1 + Strength bonus / 2) cells.`,
        groupId: 29,
        talentTypeId: 1,
        createdAt: new Date(),
      },
      {
        name: "Taunting Scream",
        description: `The Warrior screams at their enemies to draw their attention and becomes a priority target of any enemy who fails a Willpower resistance test.`,
        groupId: 29,
        talentTypeId: 1,
        createdAt: new Date(),
      },
      // Officer Talents

      {
        name: "Voice of Command",
        description: `The Officer forces an ally to fully push themselves, increasing their characteristics by +(5 + 2 x Officer's FEL bonus) for 1 round. Additionally, all of the Officer's abilities can be applied to the target of Voice of Command from any distance. A character who becomes the target of Voice of Command cannot be targeted by this ability again for the next 2 rounds.`,
        groupId: 30,
        talentTypeId: 1,
        createdAt: new Date(),
      },


      // Common Talents
      ...['Athletics', 'Awareness', 'Carouse', 'Coercion', 'Commerce', 'Demolition', 'Logic', 'Imperium', 'Warp', 'Xenos', 'Medicae', 'Persuasion', 'Tech-Use'].map(skill => ({
        name: `Advanced Skill: ${skill}`,
        description: `Character gains +13 to skill and can re-roll failed skill tests +1`,
        groupId: 34,
        talentTypeId: 4,
        createdAt: new Date(),
      })),
      ...['Athletics', 'Awareness', 'Carouse', 'Coercion', 'Commerce', 'Demolition', 'Logic', 'Imperium', 'Warp', 'Xenos', 'Medicae', 'Persuasion', 'Tech-Use'].map(skill => ({
        name: `Base Skill: ${skill}`,
        description: `Character gains +7 to skill and can improve the skill even if their archetype or origin does not allow it`,
        groupId: 34,
        talentTypeId: 4,
        createdAt: new Date(),
      })),
      ...['Agility','Ballistic Skill', 'Weapon Skill', 'Fellowship', 'Intelligence', 'Perception', 'Toughness', 'Strength', 'Willpower'].map(skill => ({
        name: `Characteristic Training: ${skill}`,
        description: `Character gains +5 to characteristic. The character may improve any trained characteristic even if their archetype or origin does not allow it`,
        groupId: 34,
        talentTypeId: 6,
        createdAt: new Date(),
      })),


      // Death World Talents
      {
        name: "Death World",
        description: "Once per combat, when the wounds of a death world character drop below 30%, they gain +20% of their maximum wounds as temporary wounds. Death world characters also gain a +20% bonus to dodge and armour while they have at least 1 temporary wound from any a source.",
        groupId: 28,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Brutal Hunter",
        description: "Death world characters gain +15% critical hit chance against targets with the bleeding effect or with 50% or less of their maximum wounds",
        groupId: 28,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Trusty Weapons",
        description: "Death world characters gain +10% to critical hit chance for axes, hammers, and las weapons.",
        groupId: 28,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Wounded Beast",
        description: "Every Injury increases the death world character's Agility and Willpower by +5. Every trauma counts as 3 Injuries.",
        groupId: 28,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Lifetime of scars",
        description: "Death World characters take TGH bonus less damage from flame, toxic damage, and bleeding effects.",
        groupId: 28,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Tenacity",
        description: "Once per combat, when a death world character is suffering from the stunned, blinded, or immobilised condition, this condition is ignored, and they instead gain +20% temporary wounds to their maximum wounds.",
        groupId: 28,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Voidborn",
        description: `A voidborn character can reroll any failed attack, dodge, parry, characteristic, or skill test with a 20% chance of success. This chance cannot be greater than the base success chance of the roll.
Additionally, any enemy dodge or parry against a voidborn character has a 20% chance to fail after a successful roll.`,
        groupId: 22,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Bloody Mess",
        description: `Any time a voidborn character scores a critical hit, there is a 10% chance to double the damage.`,
        groupId: 22,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Contagious Luck",
        description: `Using a non-damaging ability on an ally grants that ally the ability to reroll any failed attack, dodge, parry, characteristic, or skill test with a 20% chance of success for 1 round. This chance cannot be greater than the base success chance of
the roll. Using a non-damaging ability on an enemy grants them a 20% chance to fail a successful dodge or parry test against any character for 1 round.`,
        groupId: 22,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Just a flesh wound",
        description: `The voidborn character has a 20% chance to survive after suffering lethal damage, surviving with 1 wound.`,
        groupId: 22,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Jinx",
        description: `While a voidborn character has more than 50% wounds, all chances of all creatures (including enemies) in a 3-cell radius are increased by +10%. While a voidborn character has less than 50% wounds, all chances of all creatures
(including enemies) in a 3-cell radius are decreased by -10%.`,
        groupId: 22,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Be Smart	",
        description: `Any time an ability or talent uses the Fellowship bonus, a voidborn character can instead use the Intelligence bonus, if it is higher. Additionally, voidborn characters can always upgrade Intelligence even if their archetype does not allow it.
`,
        groupId: 22,
        talentTypeId: 2,
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
