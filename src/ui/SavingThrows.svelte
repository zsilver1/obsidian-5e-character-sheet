<script lang="ts">
    import type { Ability } from "../model/character";
    import { abilityScoreToBonus } from "../model/utils";
    import DiceButton from "./DiceButton.svelte";
    import SavingThrowBox from "./SavingThrowBox.svelte";
  
    export let abilities: Ability[];
    export let proficiencyBonus = 0;
  </script>

<h4>Saving Throws</h4>
<div class="abilities">
    <!-- Str, Dex, Con -->
    <div class="col">
        <SavingThrowBox ability={abilities[0]} proficiencyBonus={proficiencyBonus}/>
        <SavingThrowBox ability={abilities[1]} proficiencyBonus={proficiencyBonus}/>
        <SavingThrowBox ability={abilities[2]} proficiencyBonus={proficiencyBonus}/>
    </div>
    <!-- Int, Wis, Cha -->
    <div class="col">
        <SavingThrowBox ability={abilities[3]} proficiencyBonus={proficiencyBonus}/>
        <SavingThrowBox ability={abilities[4]} proficiencyBonus={proficiencyBonus}/>
        <SavingThrowBox ability={abilities[5]} proficiencyBonus={proficiencyBonus}/>
    </div>
</div>

<style>
    .abilities {
        border-style: solid;
        padding: 0.5em;
        display: flex;
        flex-direction: row;
    }
    .col {
        display: flex;
        flex-direction: column;
    }
</style>
