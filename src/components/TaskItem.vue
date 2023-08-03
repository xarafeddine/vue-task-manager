<template>
  <div class="bg-white p-4 rounded-md shadow-md mb-4">
    <h3 class="text-xl font-semibold">{{ task.title }}</h3>
    <p class="text-gray-600 mb-2">
      {{ task.description || "No description" }}
    </p>
    <div class="flex justify-between">
      <button @click="editTask" class="text-blue-500 hover:text-blue-600">
        Edit
      </button>
      <button @click="deleteTask" class="text-red-500 hover:text-red-600">
        Delete
      </button>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["edit", "delete"]);
const { task } = defineProps(["task"]);

const editTask = () => {
  emit("edit", task);
};

const deleteTask = () => {
  emit("delete", task.id);
};
</script>
