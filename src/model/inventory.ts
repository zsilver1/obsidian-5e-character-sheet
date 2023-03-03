import { AbilityType } from "@types";

export class Item {
	name: string;
	weight?: number = 0;
	quantity?: number = 1;
	charges?: number;
	range?: string; // e.g. "80/120"
	requiresAttunement?: boolean = false;
	properties?: string[];
	value?: string;
	shortNotes?: string; // will show up in the item's card

	// source metadata
	source?: string;
	page?: string | number;
}

class Equipable extends Item {}

export type WeaponCategory = "simple" | "martial";
export class Weapon extends Equipable {
	// For determining what ability score bonus to use.
	ranged?: boolean = false;
	versatile?: boolean = false;
	finesse?: boolean = false;

	damage: string; // Include dice formula(s) and damage types. e.g. "2d6 Piercing, 1d6 Fire"
	altDamageDie?: string; // e.g. for versatile weapons.

	hitBonus?: number = 0;
	damageBonus?: number = 0;
	bonus?: number = 0; // For both damange and hitting

	category?: WeaponCategory;
}

export class Armor extends Equipable {
	armorClass?: number;
	armorClassBonus?: number; // For shields
	includeDexModifier = false;
	dexModifierCap?: number;
	stealthDisadvantage = false;
}

// For built in weapon and armor types
export const builtInWeapons: Weapon[] = [
	{
		name: "Club",
		value: "1 sp",
		damage: "1d4 bludgeoning",
		weight: 2,
		properties: ["Light"],
	},
	{
		name: "Dagger",
		value: "2 gp",
		damage: "1d4 piercing",
		weight: 1,
		properties: ["Finesse", "Light", "Thrown (range 20/60)"],
		finesse: true,
	},
	{
		name: "Greatclub",
		value: "2 sp",
		damage: "1d8 bludgeoning",
		weight: 10,
		properties: ["Two Handed"],
	},
	{
		name: "Handaxe",
		value: "5 gp",
		damage: "1d6 slashing",
		weight: 2,
		properties: ["Light", "Thrown (range 20/60)"],
	},
	{
		name: "Javelin",
		value: "5 sp",
		damage: "1d6 piercing",
		weight: 2,
		properties: ["Thrown (range 20/60)"],
	},
	{
		name: "Light Hammer",
		value: "2 gp",
		damage: "1d4 bludgeoning",
		weight: 2,
		properties: ["Light", "Thrown (range 20/60)"],
	},
	{ name: "Mace", value: "5 gp", damage: "1d6 bludgeoning", weight: 4 },
	{
		name: "Quarterstaff",
		value: "2 sp",
		damage: "1d6 bludgeoning",
		weight: 4,
		altDamageDie: "1d8",
		properties: ["Versatile"],
	},
	{
		name: "Sickle",
		value: "1 gp",
		damage: "1d4 slashing",
		weight: 2,
		properties: ["Light"],
	},
	{
		name: "Spear",
		value: "1 gp",
		damage: "1d6 piercing",
		weight: 3,
		altDamageDie: "1d8",
		properties: ["Versatile", "Thrown (range 20/60)"],
	},
];

// TODO other weapons

// TODO armor
