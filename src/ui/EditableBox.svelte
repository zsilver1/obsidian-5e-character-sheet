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
    border-radius: 30px;
    border-style: solid;
    padding: 1em;
  }
</style>
