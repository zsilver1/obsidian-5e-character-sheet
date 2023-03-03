<script lang="ts">
  export let content: any;
</script>

<div class="box">
  <div contenteditable="true" class="content" bind:textContent={content}>
    {content}
  </div>
</div>

<style>
  .box {
    border-style: solid;
    padding: 0.5em;
  }
</style>
