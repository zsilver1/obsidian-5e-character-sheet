import { DiceRoll } from "rpg-dice-roller";
import { diceLog } from "./stores";

export function abilityScoreToBonus(score: number): number {
  return Math.floor((score - 10) / 2);
}

export function rollDiceToLog(formula: string) {
  let dr = new DiceRoll(formula);
  diceLog.set(dr);
}

export function splitCamelCase(text: string): string {
  const result = text.replace(/([A-Z])/g, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
}
