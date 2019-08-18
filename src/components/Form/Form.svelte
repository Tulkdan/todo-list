<script>
  import Button from './Button.svelte';

  export let task = '';
  export let createTask;
</script>

{@debug task}

<div class="flex w-full justify-center">
  <div class="flex items-center border-b border-b-2 border-teal-500 py-2 mx-4 pt-10 w-full md:mx-0 md:w-1/2">
    <input
      class="appearance-none bg-transparect border-none w-full text-gray-700 leading-tight focus:outline-none"
      placeholder="Create a new task"
      bind:value={task}
    />
    <Button
      btnClass="bg-teal-500 border-teal-500 text-sm flex-shrink-0 text-white"
      title="Add task"
      eventClick={createTask}
    />
  </div>
</div>