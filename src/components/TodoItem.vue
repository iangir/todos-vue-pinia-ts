<template>
	<li class="task" :class="{ 'task-done': todo.completed }">
		<button
			@click="todoStore.completedToggle(todo.id)"
			class="icon-btn task-icon-btn"
			:class="{ 'icon-btn-done': todo.completed }"
		>
			<i class="bi bi-check-circle"></i>
		</button>
		<span v-if="!isEditing">{{ todo.title }}</span>
		<input
			v-else
			v-model="todo.title"
			class="addTask-input edit-input"
			type="text"
			placeholder="New task"
			autocomplete="off"
		/>
		<button @click="handleEdit" class="icon-btn task-icon-btn">
			<i class="bi bi-pencil-square"></i>
		</button>
		<button
			@click="todoStore.deleteTodo(todo.id)"
			class="icon-btn task-icon-btn"
		>
			<i class="bi bi-trash3"></i>
		</button>
	</li>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Todo } from '../types/TodoTypes.ts';
import { useTodoStore } from '../stores/TodoStore.ts';

interface Props {
	todo: Todo;
}

const { todo } = defineProps<Props>();

const todoStore = useTodoStore();

const isEditing: boolean = ref(false);

const handleEdit = () => {
	isEditing.value = !isEditing.value;
};
</script>
