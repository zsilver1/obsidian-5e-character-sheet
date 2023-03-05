<script lang="ts">
    import type { Ability } from "../model/character";
    import AbilityBox from "./AbilityBox.svelte";
    export let abilities: Ability[];
    export let editMode = true;
</script>

<h3>Ability Scores</h3>
<div class="abilities">
    <!-- Str, Dex, Con -->
    <div class="col">
        <AbilityBox ability={abilities[0]} {editMode} />
        <AbilityBox ability={abilities[1]} {editMode} />
        <AbilityBox ability={abilities[2]} {editMode} />
    </div>
    <!-- Int, Wis, Cha -->
    <div class="col">
        <AbilityBox ability={abilities[3]} {editMode} />
        <AbilityBox ability={abilities[4]} {editMode} />
        <AbilityBox ability={abilities[5]} {editMode} />
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
