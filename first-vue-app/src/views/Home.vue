<template>
  <div class="home">
    
    <h1>Parent counter : {{ Pcounter }}</h1>
    <br>
    <Counter @calladd="Padd"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from '../components/Counter.vue'

export default {
  name: 'Home',
  components: {
    Counter,
  },
  data() {
    return {
      Pcounter:0
    }
  },
  methods: {
    Padd() {
      console.log('부모더하기')
      this.Pcounter ++
    },
    Psub() {
      this.Pcounter --
    }
  },
}
</script>
