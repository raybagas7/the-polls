import { writable } from 'svelte/store';

const PollStore = writable([
  {
    id: 1,
    question: 'JavaScript or TypeScript?',
    answerA: 'JavaScript',
    answerB: 'TypeScript',
    votesA: 23,
    votesB: 50,
  },
]);

export default PollStore;
