<script lang="ts">
  import { AbilityType } from "../model/character";
  import { abilityScoreToBonus } from "../model/utils";

  export let abilityScore: number = 20;
  export let abilityType: AbilityType = AbilityType.Strength;
  $: abilityBonus = abilityScoreToBonus(abilityScore);
</script>

<div class="ability-box">
  <div class="type">
    {abilityType}
  </div>

  <div class="score">
    {abilityScore}
  </div>

  <div class="bonus">{abilityBonus}</div>
</div>

<style>
  .type {
    text-transform: capitalize;
  }
  .ability-box {
    border-radius: 30px;
    border-style: solid;
    padding: 1em;
  }
</style>
