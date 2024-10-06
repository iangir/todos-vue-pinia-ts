<template>
	<form @submit.prevent="handleSubmit" class="input-section">
		<input
			v-model="input"
			class="addTask-input"
			type="text"
			id="newTask"
			name="newTask"
			placeholder="New task"
			autocomplete="off"
		/>
		<button type="submit" class="icon-btn">
			<i class="bi bi-plus-circle"></i>
		</button>
	</form>
</template>

<script setup lang="ts">
import { useTodoStore } from '../stores/TodoStore.ts';
const todoStore = useTodoStore();

const input = defineModel();
const handleSubmit = () => {
	if (input.value.trim() !== '') {
		todoStore.addTodo(input.value);
		input.value = '';
	}
};
</script>
