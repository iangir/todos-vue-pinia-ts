<template>
	<div class="app-filters">
		<div class="toggle-group">
			<button
				v-for="filter in filters"
				:key="filter"
				class="toggle-button"
				:class="{ 'button--primary': activeFilter === filter }"
				@click="setFilter(filter)"
			>
				{{ filter }}
			</button>
		</div>
	</div>
</template>

<script setup>
const filters = ['All', 'Active', 'Done'];
</script>
