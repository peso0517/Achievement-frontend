<template>
 <div class="hello">
  <h2>aiueo</h2>
  <h1>{{ msg }}</h1>
 </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'HelloWorld',
 data: function() {
  return {
　 msg: ''
  }
 },
 methods: {
  clear () {
   this.msg = ''
  }
 },
 method () {
  axios.get('http://localhost:8888').then(res => {
   this.msg = res.data
  }).catch(err => {
   console.error(err)
  })
 }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
