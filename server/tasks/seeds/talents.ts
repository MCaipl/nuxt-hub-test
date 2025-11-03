import { talentTypes } from "~~/server/database/schema";
import { warrior } from "./talents/warrior";
import { bladedancer } from "./talents/bladedancer";
import { officer } from "./talents/officer";
import { operative } from "./talents/operative";
import { soldier } from "./talents/soldier";
import { origins } from "./talents/origins";
import { assassin } from "./talents/assassin";
import { vanguard } from "./talents/vanguard";
import { bountyhunter } from "./talents/bountyhunter";
import { mastertactician } from "./talents/mastertactician";
import { archmilitant } from "./talents/archmilitant";
import { grandstrategist } from "./talents/grandstrategist";
import { executioner } from "./talents/executioner";
import { exemplar } from "./talents/exemplar";
import { navigator } from "./talents/navigator";

export default async function seedTalents(db: any) {
    const talents = [
      ...origins,
      ...warrior,
      ...officer,
      ...operative,
      ...soldier,
      ...bladedancer,
      ...assassin,
      ...vanguard,
      ...bountyhunter,
      ...mastertactician,
      ...grandstrategist,
      ...archmilitant,
      ...executioner,
      ...exemplar,
      ...navigator,


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
        talentTypeId: 5,
        createdAt: new Date(),
      })),
     ...['Agility','Ballistic Skill', 'Weapon Skill', 'Fellowship', 'Intelligence', 'Perception', 'Toughness', 'Strength', 'Willpower'].map(skill => ({
        name: `${skill}`,
        description: ``,
        groupId: 34,
        talentTypeId: 6,
        createdAt: new Date(),
      })),
      {
        name: "Bolter Weapon Proficiency",
        description: `Allows the character to use bolt weapons, such as bolter or bolt pistol.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Bolt Weapon Expert",
        description: `Bolt weapon attacks gain +10% armour penetration.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Breaking Point",
        description: `Heavy weapons deal +2 damage and ignore 2 deflection.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Chain Weapon Expert",
        description: `Chain weapon attacks gain +4 maximum damage.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Combat Master",
        description: `Enemies gain no melee superiority bonuses against this character.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Drukhari Weapon Proficiency",
        description: `Allows the character to use Drukhari weapons.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Dual-Weapon Combat",
        description: `The character can attack with the second weapon in their current weapon set in addition to the usual one attack per round. This attack suffers a -20 penalty to WS and BS and costs +1 AP more.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Dual-Weapon Specialist",
        description: `Using the Sweep attack of the axes and Shove attack of the maces and hammers does not increase the AP cost or reduce the Weapon Skill or Ballistic Skill of another weapon.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Duelling Mastery",
        description: `Grants +15% bonus to parry.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Flame Weapon Proficiency",
        description: `Allows the character to use flame weapons, such as a flamer, heavy flamer, and hand flamer.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Flame Weapon Expert",
        description: `Flame weapon attacks cost -1 AP less to use (1 AP minimum).`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Grenadier",
        description: `First grenade use in combat does not spend AP and does not count toward the attack limit that turn.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Heavy Armour Proficiency",
        description: `Allows the wearing of heavy armour.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Heavy Weapon Proficiency",
        description: `Reduces the required Strength value for heavy weapons by -25.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "It will not die",
        description: `Increases wounds by half of the character's level (rounded up).`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Las Weapon Expert",
        description: `Enemies suffer a -20% penalty to dodge against las weapon attacks.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Melee Weapon Specialist",
        description: `Sweep attack of the axes and Shove attack of the maces and hammers cost 1 less action point.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Melta Weapon Proficiency",
        description: `Allows the character to use melta weapons, such as a meltagun, multi-melta, and others.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Melta Weapon Expert",
        description: `Melta weapon attacks gain +4 maximum damage.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Nimble",
        description: `Grants +10% bonus to dodge.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Overpower",
        description: `When firing heavy weapons, critical chance is increased by BS and critical damage is increased by 3x BS.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Plasma Weapon Proficiency",
        description: `Allows the character to use plasma weapons, such as plasma gun, plasma pistol, and others.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Plasma Weapon Expert",
        description: `Plasma weapon attacks gain +2 maximum damage.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Power Armour Proficiency",
        description: `Allows the character to equip power armour.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Power Weapon Expert",
        description: `Power weapon attacks gain +10% armour penetration.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Solid Projectile Weapon Expert",
        description: `Solid projectile weapon attacks gain +2 minimum damage.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Swift Movements",
        description: `Grants +2 movement points.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Aeldari Weapon Proficiency",
        description: `Allows the character to use Aeldari weapons, such as Aeldari long rifle, shuriken catapult, and others.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Aeldari Equipment",
        description: `Allows Drukhari character to equip Aeldari equipment.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Drukhari Equipment",
        description: `Allows Aeldari character to equip Drukhari equipment.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },

      // Shield / Wielder talents
      {
        name: "Strong Hand",
        description: `The Wielder gains +5% block and deals +50% more damage with shield bash.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Shield Mastery",
        description: `A shield only occupies the slot in a single weapon set (shields apply to both weapon slots by default).`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Instant Retribution",
        description: `Whenever the wielder successfully blocks an attack, they immediately use shield bash against the attacker, if possible. If the wielder makes a counter-attack triggered by all-around defence, the shield bash follows that counter-attack.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Defensive Manoeuvre",
        description: `Whenever the wielder successfully uses shield bash, they regain +2 MP. If they move, they will not provoke attacks of opportunity from the target until the end of their turn.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },

      // Aeldari / Drukhari finesse talents
      {
        name: "Finesse",
        description: `When this character uses Drukhari or Aeldari melee weapons, weapon damage is calculated using their Agility instead of Strength if Agility is greater.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Deadly Accuracy",
        description: `Critical damage dealt by this character's Aeldari ranged weapons is increased by Perception.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },

      // Webber / Arc rifle / Plasma specialist talents
      {
        name: "Arachnoid Drag-Net",
        description: `Area attacks with a webber create a webbed area which lasts for 3 rounds. Any creature which enters that area, moves through it, or starts its turn in this area must pass an Agility resistance test or become slowed for 1 round.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Durable Knotting",
        description: `Enemies immobilised or slowed by this character's webber have their Weapon Skill, Ballistic Skill and Agility reduced by (3 x PER) while this effect lasts.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Echopulse",
        description: `Enemies hit by this character's arc rifle suffer a number of echopulse stacks equal to 10% of the damage dealt. Those stacks last until the end of combat. At the start of their turn a creature suffers shock damage based on stacks and (INT \\ 2) armour pen.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Enhanced Splash Area",
        description: `The area of plasma overcharge area attack is increased by an additional cell on each side (vertical, horizontal and diagonal).`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "External Power Block",
        description: `This character gains an additional attack with a plasma weapon in the first round of combat and when reloading a plasma weapon for the first time each subsequent round.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Liturgy of Insulation",
        description: `If allies become the secondary targets of this character's arc rifle, they do not suffer damage.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Overclocking Module",
        description: `Whenever this character hits a target with an arc rifle, the radius of the area where additional targets are affected is increased by (INT / 5), minimum 1.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Piercing Charge",
        description: `Plasma overcharge extra damage ignores INT of the target's deflection.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Plasma Bank",
        description: `Reloading a plasma rifle costs -3 AP less and reloading a plasma pistol costs -1 AP less.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Poetry of Pain",
        description: `Drukhari ranged weapons deal 20% more damage for each DoT on enemies.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Promethium Treatment",
        description: `Fire damage suffered by enemies currently immobilised or slowed by this character's webber is increased by 35%.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Residual Charge",
        description: `Whenever this character hits a target with an arc rifle, they gain +1 residual charge stack. When reaching 10 stacks, they immediately gain an additional attack with the arc rifle and the stacks are removed.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Safety Training",
        description: `This character only suffers 25% of the damage dealt by plasma explosion. The damage bonus from each stack of plasma cell overheat is increased by 5%.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Sighter",
        description: `This character's first attack with a webber in a round does not count toward the attack limit per turn.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Staggering Jolt",
        description: `Targets hit by this character's arc rifle must pass a Toughness resistance test or suffer +1 stack of arc-shock for 2 rounds (creature is staggered and suffers 20% more shock damage).`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
      {
        name: "Sticky Webbing",
        description: `Resistance tests against this character's webber effects suffer a -30 penalty.`,
        groupId: 42,
        talentTypeId: 2,
        createdAt: new Date(),
      },
    ];


  const batchSize = 15;
  for (let i = 0; i < talents.length; i += batchSize) {
    const batch = talents.slice(i, i + batchSize);
    if (batch.length) {
      await db.insert(tables.talents).values(batch);
    }
  }

}
