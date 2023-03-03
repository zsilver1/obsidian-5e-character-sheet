<script lang="ts">
  import type { CharacterData } from "../model/character";
  import AbilityBox from "./AbilityBox.svelte";
  import Box from "./Box.svelte";
  import SkillBox from "./SkillBox.svelte";

  export let character: CharacterData;
</script>

<div id="character">
  <div class="name">{character.name}</div>
  <div class="class">{character.charClass}</div>

  <!-- 
        Row 1: Abilities, AC, HP, Speed, Initiative, Proficiency
        Row 2: 
          Column 1 (narrow): Conditions, Saving throws, Senses
          Column 2 (narrow): Skills
          Column 3 (wide): Character Pane: (Attacks & Favorites, Spells, Other Actions, Inventory, Features)
        Row 3:
          Description, Proficiencies, Notes, Extras
     -->

  <!-- Row 1  -->
  <div class="row">
    {#each character.abilities as ability}
      <AbilityBox {ability} />
    {/each}
    <div>
      <Box label={"AC"} content={character.stats.armorClass} />
      <Box label={"Initiative"} content={character.stats.initiativeBonus} />
    </div>
  </div>

  <!-- Row 2  -->
  <div class="row">
    <div class="col">
      <div>TODO: Conditions</div>
      <div>TODO: Saving Throws</div>
      <div>TODO: Senses</div>
    </div>
    <div class="col">
      <SkillBox skills={character.skills} />
    </div>
    <div class="col">
      <div>TODO: Character Pane</div>
    </div>
  </div>
</div>

<style>
  #character {
    display: flex;
    flex-direction: column;
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  .col {
    display: flex;
    flex-direction: column;
  }

  /* Global styles in the character sheet */
  :global(.box) {
    text-align: center;
  }
</style>
