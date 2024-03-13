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

  const handleAdd = (e) => {
    const poll = e.detail;
    polls = [poll, ...polls];
    activeItem = 'Current Polls';
    console.log(polls);
  };

  const handleVote = (e) => {
    // const { option, id } = e.detail;

    // let copiedPolls = [...polls];
    // let upvotedPoll = copiedPolls.find((poll) => poll.id == id);

    // if (option === 'a') {
    //   upvotedPoll.votesA++;
    // }
    // if (option === 'b') {
    //   upvotedPoll.votesB++;
    // }

    // polls = copiedPolls;

    //Actually, you don't need to create a new variable for the array.
    //All you need is to change props in object in the array and then tell Svelte
    //about that by 'polls = polls', so Svelte going to rerender all.
    const { option, id } = e.detail;
    const poll = polls.find((poll) => poll.id === id);

    if (option === 'a') poll.votesA++;
    else poll.votesB++;

    polls = polls;
  };
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={tabChange} />
  {#if activeItem === 'Current Polls'}
    <PollList on:vote={handleVote} />
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
