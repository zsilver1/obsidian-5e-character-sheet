<script lang="ts">
  import { CharacterData } from "../model/character";
  import Character from "./Character.svelte";
  import DiceLog from "./DiceLog.svelte";
</script>

<div>
  <DiceLog />
  <hr />
  <Character character={new CharacterData("Nea Harjo", "Ranger 2, Rogue 1")} />
</div>
