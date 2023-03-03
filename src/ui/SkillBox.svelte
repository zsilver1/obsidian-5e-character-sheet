<script lang="ts">
  import type { Skill } from "../model/character";
  import { splitCamelCase } from "../model/utils";
  import DiceButton from "./DiceButton.svelte";

  export let skills: Skill[];
</script>

<div class="box">
  {#each skills as skill}
    <div class="skill">{splitCamelCase(skill.type)}</div>
    <DiceButton
      formula={"d20+" + skill.value}
      display={skill.value >= 0 ? `+${skill.value}` : skill.value}
    />
  {/each}
</div>

<style>
  .box {
    border-radius: 30px;
    border-style: solid;
    padding: 1em;
  }
</style>
