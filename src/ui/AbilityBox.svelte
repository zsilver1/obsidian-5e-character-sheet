<script lang="ts">
  import type { Ability } from "../model/character";
  import { abilityScoreToBonus } from "../model/utils";
  import DiceButton from "./DiceButton.svelte";
  import EditableBox from "./EditableBox.svelte";

  export let ability: Ability;
  let abilityScore = ability.value;
  $: abilityBonus = abilityScoreToBonus(abilityScore);
</script>

<div class="box">
  <div class="type">
    {ability.type}
  </div>

  <DiceButton
    formula={"d20+" + abilityBonus}
    display={abilityBonus >= 0 ? `+${abilityBonus}` : abilityBonus}
  />

  <div class="score">
    <EditableBox bind:content={abilityScore} />
  </div>
</div>

<style>
  .type {
    text-transform: capitalize;
  }
  .box {
    border-style: solid;
    padding: 0.5em;
  }
</style>
