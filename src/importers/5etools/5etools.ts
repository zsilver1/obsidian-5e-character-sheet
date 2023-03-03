export {};

const itemProperties = {
	T: "Thrown",
	V: "Versatile",
	H: "Heavy",
	"2H": "Two-Handed",
	F: "Finesse",
	L: "Light",
	R: "Reach",
	A: "Ammunition",
	LD: "Loading",
	S: "Special",
	AF: "Ammunition (futuristic)",
	RLD: "Reload",
	BF: "Burst Fire",
};

const damageTypes = {
	A: "Acid",
	B: "Bludgeoning",
	C: "Cold",
	F: "Fire",
	O: "Force",
	L: "Lightning",
	N: "Necrotic",
	P: "Piercing",
	I: "Poison",
	Y: "Psychic",
	R: "Radiant",
	S: "Slashing",
	T: "Thunder",
};

const itemTypes = {
	A: "Ammunition",
	AF: "Ammunition (futuristic)",
	AT: "Artisan Tool",
	EM: "Eldritch Machine",
	EXP: "Explosive",
	G: "Adventuring Gear",
	GS: "Gaming Set",
	HA: "Heavy Armor",
	INS: "Instrument",
	LA: "Light Armor",
	M: "Melee Weapon",
	MA: "Medium Armor",
	MNT: "Mount",
	GV: "Generic Variant",
	P: "Potion",
	R: "Ranged Weapon",
	RD: "Rod",
	RG: "Ring",
	S: "Shield",
	SC: "Scroll",
	SCF: "Spellcasting Focus",
	OTH: "Other",
	T: "Tool",
	TAH: "Tack and Harness",
	TG: "Trade Good",
	$: "Treasure",
	VEH: "Vehicle (land)",
	SHP: "Vehicle (water)",
	AIR: "Vehicle (air)",
	WD: "Wand",
};

const spellSchools = {
	C: "Conjuration",
	N: "Necromancy",
	V: "Evocation",
	A: "Abjuration",
	T: "Transmutation",
	D: "Divination",
	E: "Enchantment",
	I: "Illusion",
};

function parseSpecialString(str: string) {
	if (!str) return "";
	return str
		.replace(/{@condition (.+?)}/g, `[$1]]`)
		.replace(/{@item (.+?)}/g, `[[$1]]`)
		.replace(/{@spell ([\s\S]+?)}/g, `[[$1]]`)
		.replace(/{@recharge (.+?)}/g, `(Recharge $1-6)`)
		.replace(/{@recharge}/g, `(Recharge 6)`)
		.replace(/{@h}/g, ``)
		.replace(/{@damage (.+?)}/g, `$1`)
		.replace(/{@atk ms}/g, `Melee Spell Attack`)
		.replace(/{@atk rs}/g, `Ranged Spell Attack`)
		.replace(/{@atk mw}/g, `Melee Weapon Attack`)
		.replace(/{@atk rw}/g, `Ranged Weapon Attack`)
		.replace(/{@atk mw,rw}/g, `Melee / Ranged Weapon Attack`)
		.replace(/{@creature (.+?)}/g, `[[$1]]`)
		.replace(/{@skill (.+?)}/g, `$1`)
		.replace(/{@dice (.+?)}/g, `$1`)
		.replace(/{@hit (\d+?)}/g, `+$1`)
		.replace(/{@dc (\d+?)}/g, `$1`)
		.replace(/{@quickref (.+?)\|\|.+?}/, `$1`);
}
