<template>
  <h2>Questions</h2>

  <router-link to="/questions/new" class="btn btn-primary">
    Add Question
  </router-link>

  <div>
    <div v-for="question in questions" :key="question.id" class="question">
      <h3>{{ question.name }}</h3>
      <ul>
        <li
          v-for="option in question.options"
          :key="option"
          :class="{ correct: question.correct.includes(option) }"
        >
          {{ option }}
        </li>
      </ul>

      <router-link
        :to="`/questions/${question.id}/edit`"
        class="btn btn-primary btn-xs"
      >
        Edit
      </router-link>
      <button class="btn btn-light" @click.prevent="onDelete(question.id)">
        X
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const COLLECTION = "questions";

export default {
  setup() {
    const questions = ref([]);
    const db = getFirestore();

    async function loadData() {
      try {
        const questionsRef = collection(db, COLLECTION);
        const querySnapshot = await getDocs(questionsRef);
        // console.log(querySnapshot);

        questions.value.splice(0);
        querySnapshot.forEach((question) => {
          // console.log(question);
          questions.value.push({ id: question.id, ...question.data() });
        });
      } catch (e) {
        console.error("Error: ", e);
      }
    }

    onMounted(loadData);

    async function onDelete(qId) {
      try {
        await deleteDoc(doc(db, COLLECTION, qId));
        loadData();
      } catch (e) {
        console.error("Error: ", e);
      }
    }

    return {
      questions,
      onDelete,
    };
  },
};
</script>

<style>
.correct {
  background: lightgreen;
}

.question {
  border: 1px solid;
  padding: 1em;
  margin: 1em 0;
}
</style>