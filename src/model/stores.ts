import type { DiceRoll } from "rpg-dice-roller";
import { writable } from "svelte/store";

export const diceLog = writable<DiceRoll>();
