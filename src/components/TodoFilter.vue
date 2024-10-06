<template>
	<div class="app-filters">
		<div class="toggle-group">
			<button
				v-for="filter in filters"
				:key="filter"
				class="toggle-button"
				:class="{ 'button--primary': todoStore.activeTab === filter }"
				@click="todoStore.setActiveTab(filter)"
			>
				{{ filter }}
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useTodoStore } from '../stores/TodoStore.ts';

const filters: string[] = ['All', 'Active', 'Done'];

const todoStore = useTodoStore();
</script>
