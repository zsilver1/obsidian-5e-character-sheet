<script lang="ts">
    import type { Ability } from "../model/character";
    import { abilityScoreToBonus } from "../model/utils";
    import DiceButton from "./DiceButton.svelte";
  
    export let ability: Ability;
    export let proficiencyBonus: number;
    
    let abilityScore = ability.value;
    $: abilityBonus = abilityScoreToBonus(abilityScore) + proficiencyBonus;
  </script>
  
  <div class="box">
    <div class="type">
      {ability.type}
    </div>
  
    <DiceButton
      formula={"d20+" + abilityBonus}
      display={abilityBonus >= 0 ? `+${abilityBonus}` : abilityBonus}
    />
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
  