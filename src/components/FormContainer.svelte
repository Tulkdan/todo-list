<script>
  import { onMount } from 'svelte';
  import Form from './Form/Form.svelte'
  const COLLECTION = 'todods';

  export let db;
  export let userId
  $: todos = [];
  $: task = '';


  onMount(() => {
    console.log(task);
    db.collection(COLLECTION)
      .where('user', '==', userId)
      .onSnapshot(data => {
        todos = [];
        console.log(data);
        data.docs.forEach(task => {
          todos.push({
            ...task.data(),
            id: task.id,
          });
        });
      });
  });

  function createTask() {
    if (!task) return;
    db.collection(COLLECTION).add({
      todo: task,
      created_at: new Date().toISOString(),
      user: userId
    }).then(() => { task = '' })
    .catch(error => console.error(`Error adding document ${error}`));
  }

  function completeTask(taskId) {
    db.collection(COLLECTION).doc(taskId).delete()
      .catch(error => console.error(`Error to complete task ${taskId}`, error));
  }
</script>

{@debug task}

<Form {task} createTask={createTask} />

<ul>
  {#each todos as task}
    <li>{task}</li>
  {/each}
</ul>
