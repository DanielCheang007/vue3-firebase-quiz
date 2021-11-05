<template>
  <h2>Edit Question</h2>
  <form @submit.prevent="onSubmit">
    <div class="form-group">
      <label for="question-name">Question Name</label>
      <input
        type="text"
        class="form-control"
        id="question-name"
        aria-describedby="questionNameHelp"
        placeholder="Question Name"
        v-model.trim="name"
        required
      />
    </div>
    <h3>Options</h3>
    <ol>
      <li v-for="(option, idx) in options" :key="idx">
        <textarea v-model="options[idx]" required></textarea>
        <input type="checkbox" :value="idx" v-model="correct" />
        <button class="btn btn-light" @click.prevent="options.splice(idx, 1)">
          x
        </button>
      </li>
    </ol>
    <button class="btn btn-light" @click.prevent="options.push('')">+</button>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import { ref, reactive, toRefs, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc, setDoc } from "firebase/firestore";

const COLLECTION = "questions";

export default {
  setup() {
    const question = reactive({
      name: null,
      options: [],
    });

    const correct = ref([]);

    const correctValues = computed(() =>
      correct.value.map((idx) => question.options[idx])
    );

    const route = useRoute();
    const router = useRouter();
    const db = getFirestore();

    getDoc(doc(db, COLLECTION, route.params.id)).then((res) => {
      console.log(res);
      const { name, options, correct: _correct } = res.data();
      question.name = name;
      question.options = options;
      correct.value = _correct.map((val) => options.indexOf(val));
    });

    async function onSubmit() {
      try {
        const db = getFirestore();
        await setDoc(
          doc(db, COLLECTION, route.params.id),
          {
            ...question,
            correct: correctValues.value,
          },
          { merge: true }
        );

        router.push("/questions");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    return {
      ...toRefs(question),
      correct,
      onSubmit,
    };
  },
};
</script>

<style>
</style>