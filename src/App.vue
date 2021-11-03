<template>
  <Nav></Nav>
  <div v-if="!loading" class="container">
    <Profile v-if="isSignedIn"></Profile>
    <template v-else>
      <Login v-if="mode === 'Login'" @sign-up="mode = 'Register'"></Login>
      <Register
        v-else-if="mode === 'Register'"
        @sign-in="mode = 'Login'"
      ></Register>
    </template>
  </div>
</template>

<script>
import { ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Nav from "./components/Nav";
import Login from "./components/Login";
import Profile from "./components/Profile";

import Register from "./components/Register";

export default {
  name: "App",
  components: {
    Nav,
    Profile,
    Login,
    Register,
  },
  setup() {
    const mode = ref("Login");
    const loading = ref(true);
    const isSignedIn = ref(false);

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      isSignedIn.value = !!user;
      loading.value = false;
    });

    return {
      mode,
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
