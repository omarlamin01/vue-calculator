<template>
  <div class="calculator">
    <div class="display">{{ display || 0 }}</div>
    <div class="btn" @click="clear">C</div>
    <div class="btn" @click="sign">+/-</div>
    <div class="btn">%</div>
    <div class="operator btn">/</div>
    <div class="btn">7</div>
    <div class="btn">8</div>
    <div class="btn">9</div>
    <div class="operator btn">x</div>
    <div class="btn">4</div>
    <div class="btn">5</div>
    <div class="btn">6</div>
    <div class="operator btn">-</div>
    <div class="btn">1</div>
    <div class="btn">2</div>
    <div class="btn">3</div>
    <div class="operator btn">+</div>
    <div class="btn zero">0</div>
    <div class="btn">.</div>
    <div class="operator btn">=</div>
  </div>
</template>

<script>
export default {
  name: "multi-word",
  data() {
    return {
      display: "123",
    };
  },
  methods: {
    clear() {
      this.display = "";
    },
    sign() {
      this.display.charAt(0) === "-"
        ? this.display.slice(1)
        : (this.display = "-" + this.display);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.calculator {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-columns: minmax(50px, auto);
  font-size: 40px;
  width: 280px;
  margin: 0 auto;
}

.display {
  background-color: #333;
  color: white;
  grid-column: 1/5;
}

.zero {
  grid-column: 1/3;
}

.btn {
  background-color: #eee;
  color: #212121;
  border: #212121 1px solid;
  cursor: pointer;
}

.operator {
  background-color: orange;
  color: white;
}
</style>
