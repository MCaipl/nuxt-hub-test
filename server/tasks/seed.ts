import { desc } from "drizzle-orm";

export default defineTask({
	meta: {
		name: "db:seed",
		description: "Run database seed task",
	},
	async run() {
		console.log("Running DB seed task...");

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
				description:
					"Grants +5 Toughness if the wearer has less than 35 Intelligence.",
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
				name: "Death World",
			},
			{
				name: "Voidborn",
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

		return { result: "success" };
	},
});
