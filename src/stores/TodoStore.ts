import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { Todo } from '../types/TodoTypes';

async function getData() {
	const url = 'https://jsonplaceholder.typicode.com/todos?_limit=10&_page=1';
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		if (error instanceof Error) console.error(error.message);
	}
}

const initial = await getData();

export const useTodoStore = defineStore('todos', () => {
	const todos = ref<Todo[]>(initial);
	const activeTab = ref<string>('All');

	const setActiveTab = (tab: string) => {
		activeTab.value = tab;
	};

	const todosInLocalStorage = localStorage.getItem('todos');
	if (todosInLocalStorage) {
		todos.value = JSON.parse(todosInLocalStorage);
	}

	const filteredTodos = computed(() => {
		switch (activeTab.value) {
			case 'All':
				return todos.value;
			case 'Active':
				return todos.value.filter((todo) => !todo.completed);
			case 'Done':
				return todos.value.filter((todo) => todo.completed);
			default:
				break;
		}
	});

	const addTodo = (title: string) => {
		todos.value = [
			{ userId: 1, id: Math.random(), title, completed: false },
			...todos.value,
		];
	};

	const completedToggle = (id: number) => {
		todos.value.forEach((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
		});
	};

	const deleteTodo = (id: number) => {
		todos.value = todos.value.filter((todo) => todo.id !== id);
	};

	// const editTodo = (id: number, title: string) => {
	// 	// todos.value = todos.value.map((todo) => {
	// 	// 	if (todo.id === id) {
	// 	// 		return { ...todo, title };
	// 	// 	}
	// 	// 	return todo;
	// 	// });
	// 	todos.value.forEach((todo) => {
	// 		if (todo.id === id) {
	// 			todo.title = title;
	// 		}
	// 	});
	// };

	watch(
		() => todos.value,
		(state) => {
			localStorage.setItem('todos', JSON.stringify(state));
		},
		{ deep: true }
	);

	return {
		todos,
		filteredTodos,
		activeTab,
		setActiveTab,
		addTodo,
		completedToggle,
		deleteTodo,
	};
});
