<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import PollList from './components/PollList.svelte';
  import CreatePollForm from './components/CreatePollForm.svelte';
  import Tabs from './shared/Tabs.svelte';

  // tabs
  let items = ['Current Polls', 'Create New Poll'];
  let activeItem = 'Current Polls';

  const tabChange = (e) => {
    activeItem = e.detail;
  };

  // polls
  let polls = [
    {
      id: 1,
      question: 'JavaScript or TypeScript?',
      answerA: 'JavaScript',
      answerB: 'TypeScript',
      votesA: 23,
      votesB: 50,
    },
  ];

  const handleAdd = (e) => {
    const poll = e.detail;
    polls = [poll, ...polls];
    activeItem = 'Current Polls';
    console.log(polls);
  };
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={tabChange} />
  {#if activeItem === 'Current Polls'}
    <PollList {polls} />
  {:else if activeItem === 'Create New Poll'}
    <CreatePollForm on:add={handleAdd} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
