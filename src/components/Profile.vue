<template>
  <div class="m-5">
    <h1>Signed In as: {{ user.email }}</h1>
    <button @click.prevent="userSignOut" class="btn btn-light">Sign Out</button>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  setup() {
    const auth = getAuth();
    const user = auth.currentUser;

    async function userSignOut() {
      try {
        const auth = getAuth();
        await signOut(auth);
      } catch (e) {
        console.log(e);
      }
    }

    return {
      user,
      userSignOut,
    };
  },
};
</script>

<style>
</style>