<script lang="ts">
    import type { CharacterData } from "../model/character";
    import Abilities from "./Abilities.svelte";
    import SkillBox from "./SkillBox.svelte";
    import SavingThrows from "./SavingThrows.svelte";
    import HpBox from "./HpBox.svelte";
    import Box from "./Box.svelte";

    export let character: CharacterData;
    let proficiencyBonus = 2; // TODO derive from level
    let editMode = true;
</script>

<div id="character-stats">
    <!-- 
        Widgets: 
          - characterStats: (Abilities, AC, HP, Speed, Initiative, Proficiency/Level, Skills, Saving throws, conditions)
     -->

    <!-- Col 1: Abilities and Saves  -->
    <div class="col">
        <Abilities abilities={character.abilities} {editMode} />
        <SavingThrows abilities={character.abilities} {proficiencyBonus} />
        <!-- TODO ADD savingThrowProficiencies!!! -->
    </div>

    <!-- Col 2: Skills  -->
    <div class="col">
        <SkillBox skills={character.skills} />
    </div>
    <!-- Col 3: Misc Stats  -->
    <div class="col">
        <div class="row">
            <!-- HP and Level/Proficiency -->
            <HpBox maxHp={character.stats.hitPointMax} />
        </div>
        <div class="row">
            <!-- AC, Initiative, Speed -->
            <div>
                <h3>AC</h3>
                <Box content={character.stats.armorClass} />
            </div>
            <div>
                <h3>Initiative</h3>
                <Box content={character.stats.initiativeBonus} addSign={true} />
            </div>
            <div>
                <h3>Speed</h3>
                <Box content={`${character.stats.speed} ft.`} />
            </div>
        </div>
        <div class="row">
            <!-- Conditions, Restistances -->
        </div>
    </div>
</div>

<style>
    #character-stats {
        display: flex;
        flex-direction: row;
    }
    :global(.row) {
        display: flex;
        flex-direction: row;
    }
    :global(.col) {
        display: flex;
        flex-direction: column;
    }

    /* Global styles in the character sheet */
    :global(.box) {
        text-align: center;
    }
</style>
