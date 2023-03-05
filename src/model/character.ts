export enum AbilityType {
    Strength = "strength",
    Dexterity = "dexterity",
    Constitution = "constitution",
    Intelligence = "intelligence",
    Wisdom = "wisdom",
    Charisma = "charisma",
}

export enum SkillType {
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

class Mod {
    bonus?: number; // Addition
    malus?: number; // Subtraction
    reason?: string;
    duration?: string;
}

// represents any number value that can take modifications
class Modifiable {
    value: number;
    mods?: Mod[];
}

export class Ability extends Modifiable {
    readonly type: AbilityType;

    constructor(type: AbilityType, value: number) {
        super();
        this.type = type;
        this.value = value;
    }
}

export class Skill extends Modifiable {
    readonly type: SkillType;
    proficient = false;
    expertise = false;

    constructor(type: SkillType) {
        super();
        this.type = type;
        this.value = 0;
    }
}

// These stats may be automatically modified by effects.
class Stats {
    hitPointMax: number = 10;
    armorClass: number = 10;
    temporaryHitPoints: number = 0;
    initiativeBonus: number = 0;
    speed: number = 30;
    swimSpeed?: number;
    flySpeed?: number;
    climbSpeed?: number;
    spellAttackBonus?: number;
    spellSaveDCBonus?: number;

    // Now for more freeform fields
    resistances: string[] = [];
    immunities: string[] = [];
    vulnerabilities: string[] = [];
    conditions: string[] = [];
}

export class CharacterData {
    name: string;
    charClass: string | string[]; // e.g. ["Bard 1", "Rogue 3"]
    level = 1;
    hasInspiration = false;

    savingThrowProficiencies: AbilityType[] = [];

    currentHitPoints?: number;

    abilities: Ability[];
    skills: Skill[];
    stats: Stats;

    // Free-form fields
    languages?: string;

    constructor(name: string, charClass: string | string[]) {
        this.name = name;
        this.charClass = charClass;

        this.abilities = [];
        this.skills = [];
        this.stats = new Stats();
        this.hasInspiration = false;

        // TODO temporary
        for (let abilityType in AbilityType) {
            this.abilities.push(new Ability(AbilityType[abilityType], 10));
        }
        for (let skillType in SkillType) {
            this.skills.push(new Skill(SkillType[skillType]));
        }
    }
}
