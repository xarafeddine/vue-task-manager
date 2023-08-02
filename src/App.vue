<template>
  <div class="container mx-auto p-4">
    <header>
      <h1 class="text-4xl font-bold mb-4">Task Manager App</h1>
    </header>
    <div>
      <TaskList />
    </div>
  </div>
</template>

<script setup>
import "@/assets/tailwind.css";
import TaskList from "./components/TaskList.vue";
</script>
