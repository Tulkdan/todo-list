<script>
export let btnClass;
export let eventClick;
export let title;
</script>

<button
  class={btnClass + " font-semibold py-2 px-4 rounded"}
  on:click={_ => eventClick()}
>
  {title}
</button>