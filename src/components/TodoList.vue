<template>
	<p class="tasks-header">Tasks ({{ todoStore.filteredTodos.length }})</p>
	<ul>
		<TodoItem
			v-for="todo in todoStore.filteredTodos"
			:key="todo.id"
			:todo="todo"
		/>
	</ul>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

import TodoItem from './TodoItem.vue';
import { Todo } from '../types/TodoTypes.ts';
import { useTodoStore } from '../stores/TodoStore.ts';

const todoStore = useTodoStore();
</script>
