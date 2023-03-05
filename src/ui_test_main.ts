import { CharacterData } from "./model/character";
import CharacterStats from "./ui/CharacterStats.svelte";

const app = new CharacterStats({
  target: document.body, props: { character: new CharacterData("Nea", "Ranger") }
});

export default app;
