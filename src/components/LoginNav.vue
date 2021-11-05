<template>
  <template v-if="user">
    <span class="btn">{{ user.email }}</span>
    <button @click.prevent="onSignOut" class="btn btn-light">Sign Out</button>
  </template>
  <template v-else>
    <router-link to="/login" class="btn btn-primary">Sign In</router-link>
  </template>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
  setup() {
    const state = reactive({
      user: null,
    });

    const router = useRouter();

    async function onSignOut() {
      try {
        const auth = getAuth();
        await signOut(auth);

        router.push("/login");
      } catch (e) {
        console.log(e);
      }
    }

    const auth = getAuth();
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