<template lang="">
  <div>
    <h2>Counter</h2>
    <button @click="addCounter">+</button>
    <br>
    <button @click="subCounter">-</button>

    <h3>child:{{ counter }}</h3>

    <h3>vuex: {{ pdata }}</h3>
    <button @click="vuexadd">+</button>
    <br>
    <button @click="vuexsub">-</button>

  </div>
</template>
<script>
export default {
  name:'Counter',
  data() {
    return {
      counter:0
    }
  },
  computed: {
    pdata() {
      return this.$store.getters.getdata
    }
  },
  methods: {
    addCounter() {
      console.log('더하기')
      this.counter += 1
      console.log(this.counter)
      this.$emit('calladd')
    },
    subCounter() {
      this.counter --
      console.log(this.counter)
    },
    vuexadd() {
      console.log('vuexadd')
      console.log(this.$store.state.doubledate)
      this.$store.state.doubledata = this.$store.state.doubledata *2
    }
  }
  
}
</script>
<style lang="">
  
</style>