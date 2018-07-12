<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Counter :initNum="num" @incre="increment" @decre="decrement"></Counter>
    parent: {{ num }}
  </div>
</template>

<script>
import Counter from './Counter'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: 10
    }
  },
  components: {
    Counter
  },
  methods: {
    increment () {
      this.num++
    },
    decrement () {
      this.num--
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
