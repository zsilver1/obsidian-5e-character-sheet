<script lang="ts">
    import type { Ability } from "../model/character";
    import { abilityScoreToBonus } from "../model/utils";
    import Box from "./Box.svelte";
    import DiceButton from "./DiceButton.svelte";
    import EditableBox from "./EditableNumberBox.svelte";

    export let ability: Ability;
    export let editMode = true;
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
        {#if editMode}
            <EditableBox bind:content={abilityScore} />
        {:else}
            <Box bind:content={abilityScore} />
        {/if}
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
