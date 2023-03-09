<script>
  let count = 0;

  const handleCount = () => {
    count++;
  };
  // console.log("This is a svelte component");
</script>

<button on:click={handleCount}>
  Count: {count}
</button>

<style>
  button {
    width: 100px;
    height: 100px;
  }
</style>
