<template>
  <template v-if="user">
    <span class="btn">{{ user.email }}</span>
    <button @click.prevent="onSignOut" class="btn btn-light">Sign Out</button>
  </template>
  <template v-else>
    <router-link to="/login" class="btn btn-primary">Sign In</router-link>
  </template>

  <router-link to="/sign_up" class="btn btn-primary">Sign Up</router-link>
</template>

<script>
import { reactive, toRefs } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
  setup() {
    const state = reactive({
      user: null,
    });

    const auth = getAuth();

    async function onSignOut() {
      try {
        await signOut(auth);
      } catch (e) {
        console.log(e);
      }
    }

    onAuthStateChanged(auth, (user) => {
      state.user = user;
    });

    return {
      ...toRefs(state),
      onSignOut,
    };
  },
};
</script>

<style>
</style>