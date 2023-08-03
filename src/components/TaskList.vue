<template>
  <div>
    <button
      @click="addNewTask"
      class="my-4 mx-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    >
      Add Task
    </button>
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

const addTask = (task) => store.dispatch("addTaskAction", task);
const updateTask = (task) => store.dispatch("updateTaskAction", task);
const deleteTask = (taskId) => store.dispatch("deleteTaskAction", taskId);

const showForm = ref(false);
const editingTask = ref(null);

const editTask = (task) => {
  editingTask.value = task;
  showForm.value = true;
};

const addNewTask = () => {
  editingTask.value = null;
  showForm.value = true;
};
const saveTask = async (task) => {
  if (task.id) {
    await updateTask(task);
  } else {
    await addTask(task);
  }
  showForm.value = false;
};

const removeTask = async (id) => {
  console.log(id);
  await deleteTask(id);
};

const cancelForm = () => {
  showForm.value = false;
};
</script>
