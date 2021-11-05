<template>
  <h2 class="m-5 text-center">Dashboard: {{ user.email }}</h2>
</template>

<script>
import { reactive, toRefs } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  setup() {
    const state = reactive({
      user: {},
    });

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      state.user = { ...user };
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style>
</style>