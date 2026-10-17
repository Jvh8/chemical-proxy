<script>
  import { Chemical, Frame } from "chemicaljs";
  import { onMount } from "svelte";

  let chemical = $state();
  let ready = $state(false);
  let frame = $state();
  let url = $state("https://example.com");
  let input = $state("");
  let transport = $state("epoxy"); // "epoxy" or "libcurl"

  function navigate() {
    if (!input.trim()) return;
    frame?.go(input, { autoHttps: true, searchEngine: chemical?.searchEngines?.google });
  }

  function handleKey(e) {
    if (e.key === "Enter") navigate();
  }

  function onUrlChange(newUrl) {
    url = newUrl;
  }
</script>

<div class="app">
  <header>
    <h1>Chemical Proxy</h1>
    <p>Powered by ChemicalJS + Scramjet</p>
  </header>

  <div class="controls">
    <input
      type="text"
      bind:value={input}
      onkeydown={handleKey}
      placeholder="Enter URL or search..."
      class="url-input"
    />
    <button onclick={navigate}>Go</button>
    <button onclick={() => frame?.back()} title="Back">←</button>
    <button onclick={() => frame?.forward()} title="Forward">→</button>
    <button onclick={() => frame?.reload()} title="Reload">↻</button>
    <select bind:value={transport}>
      <option value="epoxy">Epoxy</option>
      <option value="libcurl">Libcurl</option>
    </select>
  </div>

  <div class="status">
    {#if ready}
      <span class="ready">Ready</span> • {url}
    {:else}
      <span class="loading">Loading proxy...</span>
    {/if}
  </div>

  <Chemical bind:this={chemical} bind:ready bind:transport onready={() => console.log("Chemical ready")} />

  {#if chemical}
    <Frame
      bind:this={frame}
      bind:ready
      bind:chemical
      bind:src={url}
      onchange={onUrlChange}
      adblock={true}
      class="proxy-frame"
    />
  {/if}
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: system-ui, -apple-system, sans-serif;
    background: #0f0f13;
    color: #e0e0e0;
  }

  .app {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  header {
    padding: 0.75rem 1.25rem;
    background: #16161d;
    border-bottom: 1px solid #2a2a35;
  }

  header h1 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }

  header p {
    margin: 0.15rem 0 0;
    font-size: 0.8rem;
    color: #888;
  }

  .controls {
    display: flex;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    background: #121218;
    border-bottom: 1px solid #2a2a35;
    align-items: center;
  }

  .url-input {
    flex: 1;
    padding: 0.5rem 0.75rem;
    border: 1px solid #333;
    border-radius: 6px;
    background: #1a1a22;
    color: #eee;
    font-size: 0.95rem;
  }

  .url-input:focus {
    outline: none;
    border-color: #5b8def;
  }

  button, select {
    padding: 0.5rem 0.85rem;
    border: 1px solid #333;
    border-radius: 6px;
    background: #1e1e28;
    color: #eee;
    cursor: pointer;
    font-size: 0.9rem;
  }

  button:hover, select:hover {
    background: #2a2a38;
  }

  .status {
    padding: 0.35rem 1.25rem;
    font-size: 0.8rem;
    color: #777;
    background: #0d0d11;
  }

  .ready {
    color: #4ade80;
  }

  .loading {
    color: #fbbf24;
  }

  :global(.proxy-frame) {
    flex: 1;
    width: 100%;
    border: none;
    background: #fff;
  }
</style>
