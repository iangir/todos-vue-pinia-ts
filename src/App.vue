<template>
	<h1 class="header">Todo</h1>
	<TodoFilter />
	<TodoInput v-if="todoStore.activeTab != 'Done'" />
	<TodoList />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import TodoFilter from './components/TodoFilter.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import { useTodoStore } from './stores/TodoStore.ts';

const todoStore = useTodoStore();

// const addTask = () => {
// 	if (newTask.value.trim() !== '') {
// 		tasks.value = [{ id: Math.random(), title: newTask.value }, ...tasks.value];
// 		newTask.value = '';
// 	}
// };

// const deleteTask = (index) => {
// 	tasks.value = tasks.value.filter((item, idx) => idx !== index);
// };
</script>
