export class Effect {
	stat?: string;

	// use for lists and numbers
	static?: number | string[]; // fully replace the value
	add?: number | string;

	// lists only
	remove?: string;

	// numbers only
	subtract?: number;

	// for more complex effects, reminders for the players to adjust some values
	effect?: string;
}
