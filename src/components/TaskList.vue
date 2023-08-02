<template>
  <div>
    <div v-if="tasks.length === 0">No tasks found.</div>
    <div v-else>
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @edit="editTask"
        @delete="removeTask"
      />
    </div>
    <button
      @click="showForm = true"
      class="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    >
      Add Task
    </button>
    <!-- Modal for TaskForm -->
    <div
      v-if="showForm"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <TaskForm :task="editingTask" @save="saveTask" @cancel="cancelForm" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import TaskItem from "@/components/TaskItem.vue";
import TaskForm from "@/components/TaskForm.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const tasks = computed(() => store.state.tasks);

const addTask = (task) => store.commit("addTask", task);
const updateTask = (task) => store.commit("updateTask", task);
const deleteTask = (taskId) => store.commit("deleteTask", taskId);

const showForm = ref(false);

const editTask = (task) => {
  console.log("asdf");
  showForm.value = true;
};

const saveTask = (task) => {
  if (task.id) {
    updateTask(task);
  } else {
    addTask(task);
  }
  showForm.value = false;
};

const removeTask = (id) => {
  console.log(id);
  deleteTask(id);
};

const cancelForm = () => {
  showForm.value = false;
};
</script>
