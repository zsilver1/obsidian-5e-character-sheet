<script lang="ts">
    export let content: any;
    export let addSign = false;

    if (addSign) {
        content = content < 0 ? content : `+${content}`;
    }
</script>

<div class="box">
    <div class="content">{content}</div>
</div>

<style>
    .box {
        border-style: solid;
        padding: 0.5em;
    }
</style>
