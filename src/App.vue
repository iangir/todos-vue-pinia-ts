<template>
	<h1 class="header">Todo list</h1>
	<TodoFilter />
	<TodoInput />
	<TodoList :todos="tasks" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TodoFilter from './components/TodoFilter.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

const tasks = ref([
	{
		userId: 1,
		id: 1,
		title: 'delectus aut autem',
		completed: true,
	},
	{
		userId: 1,
		id: 2,
		title: 'quis ut nam facilis et officia qui',
		completed: false,
	},
	{
		userId: 1,
		id: 3,
		title: 'fugiat veniam minus',
		completed: false,
	},
	{
		userId: 1,
		id: 4,
		title: 'et porro tempora',
		completed: true,
	},
	{
		userId: 1,
		id: 5,
		title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
		completed: false,
	},
]);
const newTask = ref('');

const addTask = () => {
	if (newTask.value.trim() !== '') {
		tasks.value = [{ id: Math.random(), title: newTask.value }, ...tasks.value];
		newTask.value = '';
	}
};

const deleteTask = (index) => {
	tasks.value = tasks.value.filter((item, idx) => idx !== index);
};
</script>
