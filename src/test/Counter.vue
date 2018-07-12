<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <p>{{ initNum }}</p>
  </div>
</template>

<script>
export default {
  props: ['initNum'],
  data () {
    return {msg: 'counter'}
  },
  methods: {
    increment: function () {
      this.$emit('incre')
    },
    decrement: function () {
      this.$emit('decre')
    }
  }
}
</script>

<style scoped>

</style>
