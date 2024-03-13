<script>
  // import { onDestroy, onMount } from 'svelte';
  import PollStore from '../stores/PollStore';
  import PollDetails from './PollDetails.svelte';
  // IMPORTANT when you want to automatically subs and unsubs the data just use the store inside the component directly
  // insted of change the polls data

  // export let polls = [];

  // const unsub = PollStore.subscribe((data) => {
  //   polls = data;
  // });

  // onMount(() => {
  //   console.log('component mounted');
  // });

  // onDestroy(() => {
  //   console.log('component destroyed');
  //   unsub();
  // });
</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <div>
      <PollDetails {poll} on:vote />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
