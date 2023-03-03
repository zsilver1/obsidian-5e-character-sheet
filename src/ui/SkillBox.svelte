<script lang="ts">
  import type { Skill } from "../model/character";
  import { splitCamelCase } from "../model/utils";
  import DiceButton from "./DiceButton.svelte";

  export let skills: Skill[];
</script>

<div class="box">
  {#each skills as skill}
    <div class="skill">
      <div class="skill-name">{splitCamelCase(skill.type)}</div>

      <div class="skill-value">
        <DiceButton
          formula={"d20+" + skill.value}
          display={skill.value >= 0 ? `+${skill.value}` : skill.value}
        />
      </div>
    </div>
  {/each}
</div>

<style>
  .box {
    border-style: solid;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
  }
  .skill {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  /* .skill-name {
    align-self: flex-start;
  } */
  .skill-value {
    align-self: flex-end;
  }
</style>
