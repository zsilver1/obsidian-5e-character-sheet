<script lang="ts">
  import { rollDiceToLog } from "../model/utils";

  export let formula: string;
  export let display: any = formula;
</script>

<button
  class="box"
  on:click={() => {
    rollDiceToLog(formula);
  }}
>
  <div class="content">{display}</div>
</button>

<style>
  .box {
    border-style: solid;
    padding: 0.5em;
  }
</style>
