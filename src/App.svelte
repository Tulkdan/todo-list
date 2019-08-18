<script>
  import { onMount } from 'svelte';
  import Header from './components/Header.svelte';
  import LoginContainer from './components/LoginContainer.svelte';
  import FormContainer from './components/FormContainer.svelte';

  export let firebase;
  export let db;

  let user = null;

  onMount(() => {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      user = firebaseUser;
    });
  });

  function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  function signOut() {
    firebase.auth().signOut();
  }
</script>

<div class="App">
  <Header signOut={signOut} user={user} />
  {#if user}
    <FormContainer userId={user.uid} db={db}/>
  {:else}
    <LoginContainer login={loginWithGoogle} />
  {/if}
</div>
