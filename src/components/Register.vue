<template>
  <div style="max-width: 600px; margin: 2em auto">
    <h1>Sign Up A New Account</h1>
    <div v-if="errorMsg" class="alert alert-danger" role="alert">
      {{ errorMsg }}
    </div>
    <div v-if="successMsg" class="alert alert-success" role="alert">
      {{ successMsg }}
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
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"
          >Password Confirmation</label
        >
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="passwordConfirmation"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button
        type="button"
        class="btn btn-light"
        @click.prevent="$emit('sign-in')"
      >
        Cancel
      </button>
    </form>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  setup() {
    const errorMsg = ref(null);

    const state = reactive({
      email: null,
      password: null,
      passwordConfirmation: null,
    });

    async function onSubmit() {
      try {
        if (state.password !== state.passwordConfirmation) {
          throw new Error("Password Not Matched!");
        }

        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, state.email, state.password);
        errorMsg.value = null;
      } catch (e) {
        errorMsg.value = `${e.code}: ${e.message}`;
      }
    }

    return {
      errorMsg,
      ...toRefs(state),
      onSubmit,
    };
  },
};
</script>

<style>
</style>