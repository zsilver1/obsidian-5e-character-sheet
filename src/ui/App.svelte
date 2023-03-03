<script lang="ts">
  import DiceButton from "./DiceButton.svelte";
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <DiceButton formula="1d5" />
</main>
