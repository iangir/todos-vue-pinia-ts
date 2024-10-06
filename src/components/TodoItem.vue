<template>
	<li class="task">
		<button class="icon-btn task-icon-btn">
			<i class="bi bi-check-circle"></i>
		</button>
		<span>{{ todo.title }}</span>
		<button class="icon-btn task-icon-btn">
			<i class="bi bi-pencil-square"></i>
		</button>
		<button class="icon-btn task-icon-btn">
			<i class="bi bi-trash3"></i>
		</button>
	</li>
</template>

<script setup lang="ts">
import { Todo } from '../types/TodoTypes.ts';

interface Props {
	todo: Todo;
}

const { todo } = defineProps<Props>();
</script>
