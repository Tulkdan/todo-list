<script>
  export let login;
</script>

<div class="flex container mx-auto lg:px-20 sm:px-5 justify-center">
  <div class="w-full max-w-xl shadow-xl p-6 mt-10">
    <span class="text-4xl">Looks like you're not logged in...</span>
    <div class="flex items-center">
      <button
        class="bg-blue-500 w-full hover:bg-blue-700 
          text-white font-bold py-2 px-4 rounded 
          focus:outline-none focus:shadow-outline"
        type="button"
        on:click={() => login()}
      >
        Sign In with Google
      </button>
    </div>
  </div>
</div>