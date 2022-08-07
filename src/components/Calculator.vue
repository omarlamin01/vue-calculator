<template>
  <div class="calculator"></div>
</template>

<script>
export default {
  name: "multi-word",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.calculator {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-columns: minmax(50px, auto);
}
</style>
