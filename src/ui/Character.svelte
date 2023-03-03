<script lang="ts">
  import type { CharacterData } from "../model/character";
  import AbilityBox from "./AbilityBox.svelte";
  import Box from "./Box.svelte";
  import SkillBox from "./SkillBox.svelte";

  export let character: CharacterData;
</script>

<div class="character">
  <div class="name">{character.name}</div>
  <div class="class">{character.charClass}</div>

  <div class="abilities">
    {#each character.abilities as ability}
      <AbilityBox {ability} />
    {/each}
  </div>

  <SkillBox skills={character.skills} />

  <Box label={"Initiative"} content={character.stats.initiativeBonus} />
  <Box label={"AC"} content={character.stats.armorClass} />
</div>
