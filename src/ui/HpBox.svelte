<script lang="ts">
    import Box from "./Box.svelte";
    import EditableBox from "./EditableNumberBox.svelte";

    export let maxHp: number;
    export let currentHp = maxHp;
    export let temporaryHp = 0;

    let damageHealingBox = 0;

    function applyDamage() {
        if (temporaryHp) {
            let remainingDamage = damageHealingBox - temporaryHp;
            temporaryHp = Math.max(temporaryHp - damageHealingBox, 0);
            if (remainingDamage > 0) {
                currentHp -= remainingDamage;
            }
        } else {
            currentHp -= damageHealingBox;
        }
    }

    function applyHealing() {
        currentHp = Math.min(currentHp + damageHealingBox, maxHp);
    }
</script>

<div class="row">
    <div class="col">
        <!-- Apply damage and healing -->
        <input
            type="number"
            contenteditable="true"
            bind:value={damageHealingBox}
        />
        <div class="row" id="hp-buttons">
            <button on:click={applyHealing}>Heal</button>
            <button on:click={applyDamage}>Damage</button>
        </div>
    </div>
    <EditableBox bind:content={currentHp} />
    <Box content={maxHp} />
    <EditableBox bind:content={temporaryHp} />
</div>

<style>
    #hp-buttons {
        justify-content: space-evenly;
        align-items: stretch;
    }

    button {
        flex-grow: 1;
    }
</style>
