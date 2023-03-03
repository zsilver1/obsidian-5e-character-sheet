<script lang="ts">
  export let label: any;
  export let content: any;
</script>

<div class="box">
  <div class="label">{{ label }}</div>
  <div class="content">{{ content }}</div>
</div>

<style>
  .box {
    border-radius: 30px;
    border-style: solid;
    padding: 1em;
  }
</style>
