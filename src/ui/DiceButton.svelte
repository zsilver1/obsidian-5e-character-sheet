<script lang="ts">
  export let formula: string;
  export let display: string = formula;
</script>

<button class="box">
  <div class="content">{{ display }}</div>
</button>

<style>
  .box {
    border-radius: 30px;
    border-style: solid;
    padding: 1em;
  }
</style>
