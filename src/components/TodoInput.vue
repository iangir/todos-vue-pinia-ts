<template>
	<form @submit.prevent="addTask" class="input-section">
		<input
			v-model="newTask"
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
