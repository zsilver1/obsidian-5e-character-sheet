export class Item {
    name: string;
    weight?: number;
    quantity?: number;
    charges?: number;  // TODO come back to this, no easy way currently
    range?: string; // e.g. "80/120"
    properties?: string;
    value?: string;
}

class Equipable extends Item {}

export class Weapon extends Equipable {
    damage: string; // Include dice formula(s) and damage types. e.g. "2d6 Piercing, 1d6 Fire"
    twoHandedDamage?: string; // e.g. for versatile weapons.
}

enum ArmorType {
	Light = "light",
	Medium = "medium",
	Heavy = "heavy"
}

export class Armor extends Equipable {
    armorClass?: number;
    stealthDisadvantage?: boolean;
}