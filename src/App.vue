<template>
  <div class="container mx-auto p-4">
    <header>
      <h1 class="text-4xl font-bold mb-8">Task Manager App</h1>
    </header>
    <div>
      <TaskList />
    </div>
  </div>
</template>

<script setup>
import TaskList from "./components/TaskList.vue";
import { useStore } from "vuex";
import { onMounted } from "vue";

const store = useStore();
const fetchTasksAction = () => store.dispatch("fetchTasksAction");
onMounted(async () => {
  await fetchTasksAction();
});
</script>
