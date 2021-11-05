<template>
  <div style="max-width: 600px; margin: 2em auto">
    <h1>Sign In</h1>
    <div v-if="errorMsg" class="alert alert-danger" role="alert">
      {{ errorMsg }}
    </div>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model.trim="email"
          required
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="password"
          required
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button
        type="button"
        class="btn btn-light"
        @click.prevent="$emit('sign-up')"
      >
        SignUp
      </button>
    </form>

    <div class="mt-5">
      <button @click.prevent="onOAuthGithub" class="btn btn-dark">
        Sign In with Github
      </button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";

export default {
  setup() {
    const errorMsg = ref(null);
    const state = reactive({
      email: null,
      password: null,
    });

    const router = useRouter();

    async function onSubmit() {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, state.email, state.password);
        errorMsg.value = null;

        router.push("/");
      } catch (e) {
        errorMsg.value = `${e.code}: ${e.message}`;
      }
    }

    async function onOAuthGithub() {
      try {
        const auth = getAuth();
        const provider = new GithubAuthProvider();
        await signInWithPopup(auth, provider);
        errorMsg.value = null;
        router.push("/");
      } catch (e) {
        errorMsg.value = `${e.code}: ${e.message}`;
      }
    }

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        errorMsg.value = "Please Sign In first";
      }
    });

    return {
      errorMsg,
      ...toRefs(state),
      onSubmit,
      onOAuthGithub,
    };
  },
};
</script>

<style>
</style>