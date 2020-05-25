<template>
  <div id="app">
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
      <div id="nav">
        <router-link to="/">Create</router-link>|
        <router-link to="/read">Read</router-link>|
        <router-link to="/update">Update</router-link>|
        <router-link to="/delete">Delete</router-link>|
        <router-link to="/form">Form</router-link>
      </div>
    </nav>

    <router-view />
  </div>
</template>
<script>
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
