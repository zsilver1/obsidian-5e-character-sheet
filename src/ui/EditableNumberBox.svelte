<script lang="ts">
    import Box from "./Box.svelte";

    export let content: number;
    export let editable = true;
</script>

{#if editable}
    <div class="box">
        <input
            type="number"
            contenteditable="true"
            min="0"
            bind:value={content}
        />
    </div>
{:else}
    <Box {content} />
{/if}

<style>
    .box {
        border-style: solid;
        padding: 0.5em;
    }
</style>
