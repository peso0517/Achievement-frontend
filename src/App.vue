<template>
  <div id="app">
    <headerbar></headerbar>
    <b-container class="bv-example-row" fluid>
      <b-row>
        <b-col cols="3">
          <dashboard></dashboard>
        </b-col>
        <b-col cols="9">
          <router-view/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import headerbar from '@/components/header/Header.vue'
import dashboard from '@/components/dashboard/Dashboard.vue'

export default {
  name: 'App',
  components: {
    headerbar,
    dashboard
  },
}
</script>
<style>
#app {
  color: #d9e1e8;
}
#app .container {
  margin-left: 18.75rem;
  padding-top: 1rem;
  background: white;
  max-height: 100%;
  min-height: calc(100vh - 4.0625rem);
  height: calc(100% - 4.0625rem);
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
