import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

const tasksApi = axios.create({
  baseURL: API_BASE_URL,
});

export async function fetchTasks() {
  try {
    const response = await tasksApi.get("/todos", { params: { _limit: 5 } }); // we intentionally limited the number of tasks we receive from the fake api
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
}

export async function addTask(newTask) {
  try {
    const response = await tasksApi.post("/todos", newTask);
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
}

export async function updateTask(updatedTask) {
  try {
    const response = await tasksApi.put(
      `/todos/${updatedTask.id}`,
      updatedTask
    );
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
}

export async function deleteTask(taskId) {
  try {
    await tasksApi.delete(`/todos/${taskId}`);
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
}
