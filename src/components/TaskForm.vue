<template>
  <div class="bg-white p-8 rounded-md shadow-md w-1/3 min-w-fit">
    <h2 class="text-2xl font-semibold mb-4">
      {{ editing ? "Edit Task" : "Add Task" }}
    </h2>
    <form @submit.prevent="saveForm">
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-700"
          >Title:</label
        >
        <input
          v-model="formTitle"
          placeholder="Enter a Title"
          type="text"
          id="title"
          class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-600 h-8 p-2"
          required
        />
      </div>
      <div class="mb-4">
        <label for="description" class="block text-sm font-medium text-gray-700"
          >Description:</label
        >
        <textarea
          v-model="formDescription"
          placeholder="Enter a description"
          id="description"
          rows="4"
          class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-600 h-40 p-2"
        ></textarea>
      </div>
      <div class="flex justify-end">
        <button
          type="submit"
          class="px-4 py-2 mr-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded"
        >
          Save
        </button>
        <button
          type="button"
          @click="cancelForm"
          class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const { task } = defineProps(["task"]);
const emit = defineEmits(["save", "cancel"]);

const editing = !!task;
const formTitle = ref(task?.title || "");
const formDescription = ref(task?.description || "");

const saveForm = () => {
  const updatedTask = {
    id: task?.id || null,
    title: formTitle.value,
    description: formDescription.value,
  };
  emit("save", updatedTask);
};

const cancelForm = () => {
  emit("cancel");
};
</script>
