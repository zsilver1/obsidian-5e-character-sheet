export const enum AbilityType {
  Strength = "strength",
  Dexterify = "dexterity",
  Constitution = "constitution",
  Intelligence = "intelligence",
  Wisdom = "wisdom",
  Charisma = "charisma",
}

export const enum SkillType {
  Acrobatics = "acrobatics",
  AnimalHandling = "animalHandling",
  Arcana = "arcana",
  Athletics = "athletics",
  Deception = "deception",
  History = "history",
  Insight = "insight",
  Intimidation = "intimidation",
  Investigation = "investigation",
  Medicine = "medicine",
  Nature = "nature",
  Perception = "perception",
  Performance = "performance",
  Persuasion = "persuasion",
  Religion = "religion",
  SleightOfHand = "sleightOfHand",
  Stealth = "stealth",
  Survival = "survival",
}

class NumberMod {
  bonus?: number; // Addition
  malus?: number; // Subtraction
  reason?: string;
  duration?: string;
}

// represents any "number" that can take modifications
class CharacterNumber {
  value: number;
  mods?: NumberMod[];
}

class Ability extends CharacterNumber {
  readonly type: AbilityType;
  bonus: number;
}

class Skill extends CharacterNumber {
  readonly type: SkillType;
  proficient = false;
  expertise = false;
}

// These stats may be automatically modified by effects.
class Stats {
  hitPointMax: number;
  temporaryHitPoints: number;
  initiativeBonus: number;
  speed: number;
  swimSpeed?: number;
  flySpeed?: number;
  climbSpeed?: number;
  spellAttack?: number;
  spellSaveDC?: number;

  // Now for more freeform fields
  resistances: string[];
  immunities: string[];
  vulnerabilities: string[];
  conditions: string[];
}

class Character {
  class: string | string[]; // e.g. ["Bard 1", "Rogue 3"]
  hasInspiration = false;
  proficiencyBonus: number;

  currentHitPoints?: number;

  abilities: Ability[];
  skills: Skill[];
  stats: Stats;

  // Free-form fields
  languages?: string;
}
