<template>
  <Nav></Nav>

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import useAuth from "@/auth";

import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Nav,
  },
  setup() {
    useAuth();
  },
};
</script>

<style>
html {
  /* font-size: 14px; */
  font-size: 13px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
