<script>
  export let user;
  export let signOut
</script>

<nav class="flex bg-gray-800 p-4">
  <div class="flex items-center flex-shrink-o text-black w-full">
    <!-- <img src={logo} class="fill-current App-logo" alt="logo" /> -->
    <nav class="w-full text-white">
      <span class="font-semibold text-xl tracking-tight">Todo list</span>
      <div class="float-right">
        {#if user}
          <button
            class="bg-red-600 hover:bg-red-700 font-bold rounded py-2 px-4 focus:outline-none focus:shadow-outline"
            onClick={signOut}
          >
            Log Out
          </button>
        {/if}
      </div>
    </nav>
  </div>
</nav>