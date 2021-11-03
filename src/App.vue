<template>
  <Nav></Nav>
  <div v-if="!loading" class="container">
    <Profile v-if="isSignedIn"></Profile>
    <Login v-else></Login>
  </div>
</template>

<script>
import { ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Nav from "./components/Nav";
import Login from "./components/Login";
import Profile from "./components/Profile";

export default {
  name: "App",
  components: {
    Nav,
    Profile,
    Login,
  },
  setup() {
    const loading = ref(true);
    const isSignedIn = ref(false);

    console.log(getAuth);

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      isSignedIn.value = !!user;
      loading.value = false;
    });

    return {
      loading,
      isSignedIn,
    };
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
