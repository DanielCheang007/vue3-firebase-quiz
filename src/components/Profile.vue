<template>
  <div class="m-5">
    <h1>Signed In as: {{ user.email }}</h1>
    <button @click.prevent="signOut" class="btn btn-light">Sign Out</button>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";

import { logout } from "@/api/auth";

export default {
  setup() {
    const auth = getAuth();
    const user = auth.currentUser;

    function signOut() {
      try {
        logout();
      } catch (e) {
        console.log(e);
      }
    }

    return {
      user,
      signOut,
    };
  },
};
</script>

<style>
</style>