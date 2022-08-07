<template>
  <div class="calculator">
    <div class="display">{{ current || 0 }}</div>
    <div class="btn" @click="clear">C</div>
    <div class="btn" @click="sign">+/-</div>
    <div class="btn" @click="percent">%</div>
    <div class="operator btn" @click="divide">/</div>
    <div class="btn" @click="append(7)">7</div>
    <div class="btn" @click="append(8)">8</div>
    <div class="btn" @click="append(9)">9</div>
    <div class="operator btn" @click="times">x</div>
    <div class="btn" @click="append(4)">4</div>
    <div class="btn" @click="append(5)">5</div>
    <div class="btn" @click="append(6)">6</div>
    <div class="operator btn" @click="minus">-</div>
    <div class="btn" @click="append(1)">1</div>
    <div class="btn" @click="append(2)">2</div>
    <div class="btn" @click="append(3)">3</div>
    <div class="operator btn" @click="add">+</div>
    <div class="btn zero" @click="append(0)">0</div>
    <div class="btn" @click="dot">.</div>
    <div class="operator btn" @click="equal">=</div>
  </div>
</template>

<script>
export default {
  name: "multi-word",
  data() {
    return {
      current: "",
      previous: null,
      operator: null,
      operatorClicked: false,
    };
  },
  methods: {
    clear() {
      this.current = "";
    },
    sign() {
      this.current.charAt(0) === "-"
        ? (this.current = this.current.slice(1))
        : (this.current = "-" + this.current);
    },
    percent() {
      this.current = parseFloat(this.current) / 100;
    },
    append(number) {
      this.current = this.current + number;
    },
    dot() {
      if (this.current.indexOf(".") === -1) {
        this.current = this.current + ".";
      }
    },
    setPrevious() {
      this.previous = this.current;
      this.current = "";
      this.operatorClicked = true;
    },
    divide() {
      this.operator = (a, b) => {
        return a / b;
      };
      this.setPrevious();
    },
    times() {
      this.operator = (a, b) => {
        return a * b;
      };
      this.setPrevious();
    },
    minus() {
      this.operator = (a, b) => {
        return a - b;
      };
      this.setPrevious();
    },
    add() {
      this.operator = (a, b) => {
        return a + b;
      };
      this.setPrevious();
    },
    equal() {
      if (this.operatorClicked) {
        this.current = this.operator(
          parseFloat(this.previous),
          parseFloat(this.current)
        ).toString();
        this.previous = null;
        this.operator = null;
        this.operatorClicked = false;
      }
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
