<script setup>
const tasks = ["wakeup from sleep", "make wodo", "pray your salah"];
</script>

<template>
  <div class="container mx-auto p-4">
    <header>
      <h1 class="text-4xl font-bold mb-4">Task Manager App</h1>
    </header>
    <div>
      <!-- Task List -->
      <div v-if="tasks.length === 0">No tasks found.</div>
      <div v-else>
        <div v-for="(task, index) in tasks" :key="index">
          <p>{{ task }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
