<template>
	<p class="tasks-header">Tasks ({{ todos.length }})</p>
	<ul>
		<li v-for="(todo, index) in todos" :key="todo.id" class="task">
			<button class="icon-btn task-icon-btn">
				<i class="bi bi-check-circle"></i>
			</button>
			<span>{{ todo.title }}</span>
			<button class="icon-btn task-icon-btn">
				<i class="bi bi-pencil-square"></i>
			</button>
			<button @click="deleteTask(index)" class="icon-btn task-icon-btn">
				<i class="bi bi-trash3"></i>
			</button>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { Todo } from '../types/TodoTypes.ts';
interface Props {
	todos: Todo[];
}

const { todos } = defineProps<Props>();
</script>
