<script lang="ts">
  import { onDestroy } from "svelte";
  import { diceLog } from "../model/stores";
  // @ts-ignore
  import { DiceRoll } from "rpg-dice-roller";

  let diceRoll: DiceRoll = null;
  const unsubscribe = diceLog.subscribe((roll) => {
    diceRoll = roll;
  });

  onDestroy(unsubscribe);
</script>

<div class="dice-log">
  {#if diceRoll != null}
    You rolled: {diceRoll.output}
  {/if}
</div>
