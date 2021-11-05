<template>
  <Nav></Nav>

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
// import { ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRoute, useRouter } from "vue-router";

import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Nav,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const auth = getAuth();

    // router.beforeEach((to, from, next) => {
    //   console.log(to);
    //   console.log(auth.currentUser);

    //   if (to.path !== "/login" && auth.currentUser === null) {
    //     next("/login");
    //   } else {
    //     next();
    //   }
    // });

    onAuthStateChanged(auth, (user) => {
      if (route.path !== "/login" && user === null) {
        router.push("/login");
      }
    });
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
