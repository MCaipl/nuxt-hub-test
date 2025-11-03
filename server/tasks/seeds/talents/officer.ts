export const officer = [
  {
    name: "Voice of Command",
    description: `The Officer forces an ally to fully push themselves, increasing their characteristics by +(5 + 2 x Officer's FEL bonus) for 1 round. Additionally, all of the Officer's abilities can be applied to the target of Voice of Command from any distance. A character who becomes the target of Voice of Command cannot be targeted by this ability again for the next 2 rounds.`,
    groupId: 30,
    talentTypeId: 1,
    createdAt: new Date(),
  },
  {
    name: "Air of Authority",
    description: `The Officer increases an ally's Resolve by a Resolve until the end of combat.
If the target is under the effect of Voice of Command, they will start their next turn with 1 additional action point.`,
    groupId: 30,
    talentTypeId: 1,
    createdAt: new Date(),
  },
  {
    name: "Get back in the fight!",
    description: `The Officer encourages a target ally to immediately recover from burning, bleeding, toxin and stun effects.
If the target is under Voice of Command effect, it gains +2×(Officer's WP bonus) temporary Wounds.`,
    groupId: 30,
    talentTypeId: 1,
    createdAt: new Date(),
  },
  {
    name: "Break Their Ranks!",
    description: `This ability can only target allies who have enemies adjacent to them.
Until the start of the Officer's next turn all melee attacks made by the target deal additional damage equal to (Officer's FEL bonus/ 2) multiplied by the number of enemies adjacent to the target when this ability is used.
If the target is under the effect of Voice of Command, they immediately make an attack of opportunity against an adjacent enemy, targeting the one with the lowest remaining wounds.`,
    groupId: 30,
    talentTypeId: 1,
    createdAt: new Date(),
  },
  {
    name: "Move, Move, Move!",
    description: `The Officer immediately grants an ally additional Movement points equal to FEL bonus.
If the target is under the effect of Voice of Command, it ignores attacks of opportunity until the end of the Officer's turn.`,
    groupId: 30,
    talentTypeId: 1,
    createdAt: new Date(),
  },

  {
    name: "Take Aim!",
    description: `The target's next attack will ignore cover and will
If the target is under the effect of voice of command, this attack will ignore enemy dodge. Additionally, the damage from this attack can't be reduced below (30 + 3 x FEL bonus)% for any reason.`,
    groupId: 30,
    talentTypeId: 1,
    createdAt: new Date(),
  },

  {
    name: "Finest Hour",
    description: ``,
    groupId: 30,
    talentTypeId: 5,
    createdAt: new Date(),
  },

  {
    name: "Finest Hour I",
    description: ``,
    groupId: 30,
    talentTypeId: 5,
    createdAt: new Date(),
  },

  {
    name: "Finest Hour II",
    description: ``,
    groupId: 30,
    talentTypeId: 5,
    createdAt: new Date(),
  },

  {
    name: "Finest Hour III",
    description: ``,
    groupId: 30,
    talentTypeId: 5,
    createdAt: new Date(),
  },
  {
    name: "Finest Hour IV",
    description: ``,
    groupId: 30,
    talentTypeId: 5,
    createdAt: new Date(),
  },

  {
    name: "Blood Of Martyrs",
    description: `Whenever an ally uses a heroic act, that ally gains temporary wounds equal to (10% of their maximum wounds + Resolve).`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },
  {
    name: "Commanding Voice",
    description: `The range of the Officer's abilities is increased by +3. The range of Voice of Command is increased by +6.`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },
  {
    name: "Focus!",
    description: `Whenever the Officer uses an ability on an ally, that ally gains a bonus to their Perception and Ballistic Skill equal to 2 + (Officer's Resolve Bonus / 2). These bonuses stack, but half of the stacks (rounded up) are lost at the end of the target's turn.`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },
  {
    name: "Inspire Courage",
    description: `Whenever the Officer targets an ally with an ability for the first time in a round, that ally gains +WP bonus temporary wounds.`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },
  {
    name: "Personal Oversight",
    description: `Whenever the Officer targets an ally with an action (an ability or an attack), that ally's resolve is increased by +1 until the end of the Officer's next turn. This effect stacks and is prolonged until the end of the Officer's next turn each time it stacks. Cannot be prolonged past the Officer's next turn.`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },
  {
    name: "Steel Resolve",
    description: `The Officer's resolve is increased by +3.`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },
  {
    name: "Armour of Contempt",
    description: `Whenever an ally is affected by an Officer's ability or talent that grants temporary wounds, that ally's armour is increased by +10% for 1 round. Does not stack.`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },
  {
    name: "Be Vigilant!",
    description: `Allies under the effect of the Officer's abilities gain a bonus to their Weapon Skill equal to (3 + Officer's FEL bonus) and will deal +FEL bonus more damage on attacks of opportunity until the start of the Officer's next turn.`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },
  {
    name: "Decisive Response",
    description: `Whenever the officer uses Voice of Command or Bring It Down! for the first time in combat, this ability costs -1 AP.`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },
  {
    name: "Heroism",
    description: `Whenever a heroic act is used in combat by any character, the Officer's next attack will cost 0 AP.`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },
  {
    name: "Inspiring Speech",
    description: `Air of Authority immediately grants momentum to the target equal to the target's resolve.`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },
  {
    name: "Iron Discipline",
    description: `Allies affected by the Officer's abilities gain a bonus to all resistance tests equal to (2 x Officer's WP bonus).`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },
  {
    name: "Lasting Impression",
    description: `Half of the bonus granted by the Voice of Command remains until the end of combat. This bonus does not stack with itself or with bonuses granted by Voice of Command but does count as an Officer ability effect for the purposes of other talent effects.`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },
  {
    name: "Lead by Example",
    description: `Whenever the Officer uses an Officer archetype ability two times in one turn that does not grant an extra turn, they gain the Stand Witness effect. Stand Witness: the next Officer archetype ability that does not grant an extra turn will also affect the Officer.`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },
  {
    name: "Leader's Assault",
    description: `Whenever the Officer makes an attack, they gain +5 Fellowship until the end of combat.`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },
  {
    name: "March",
    description: `Whenever the Officer's ability moves any target, the Officer gains movement points equal to half the distance the target moved. If this happens on another character's turn, the Officer will gain these movement points on their next turn.`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },
  {
    name: "No Respite",
    description: `Whenever the Officer's ability grants action points to an ally, that ally also gains +1 to all characteristics for every action point gained until the end of combat.`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },
  {
    name: "Physical Encouragement",
    description: `Whenever an ally starts a turn (including any extra turn) adjacent to the Officer, that ally gains additional MP equal to (Officer's FEL bonus / 2).`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },
  {
    name: "Prepare for an assault!",
    description: `Break Their Ranks! works as if there were one more enemy adjacent to the target. This allows this ability to be used on targets with no enemies adjacent to them.`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },
  {
    name: "Seize the initiative",
    description: `Allow officers and allies under the effect of the Officer's Voice of Command to deal additional damage to enemies that have not yet acted in this combat.`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },
  {
    name: "Steady!",
    description: `Take Aim! also increases the damage of the next ranged attack by 5% + 1% for each cell between the attacker and the target.`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },
  {
    name: "Undaunted",
    description: `The Officer gains +10 Willpower and +10 Fellowship when they have less than 50% of their maximum wounds remaining. They also gain an additional +10 Willpower and +10 Fellowship after using any officer ability on a target with less than 50% wounds for 1 round. These two sets of bonuses stack with each other but do not stack with themselves.`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },
  {
    name: "Watch Yourself!",
    description: `Targets of Move, Move, Move! gain a +10% bonus to dodge and a +10% bonus to cover efficiency until the start of the Officer's next turn.`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },
  {
    name: "Wounds Are No Excuse!",
    description: `Get Back in the Fight! removes 1 fresh injury from the target and heals the target for (Officer's WP bonus / 2) wounds for each condition removed by Get Back in the Fight! (including fresh injuries). A minimum of (Officer's WP bonus / 2) wounds is always healed, even if no conditions are removed.`,
    groupId: 30,
    talentTypeId: 2,
    createdAt: new Date(),
  },




]
