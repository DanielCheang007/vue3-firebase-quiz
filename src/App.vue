<template>
  <Nav></Nav>
  <div class="container">
    <Login></Login>
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Login from "./components/Login";
export default {
  name: "App",
  components: {
    Nav,
    Login,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
