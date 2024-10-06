import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { Todo } from '../types/TodoTypes';

const array = [
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
	{
		userId: 1,
		id: 6,
		title:
			'ayyyy laboriosam mollitia et enim quasi adipisci quia provident illum',
		completed: false,
	},
];

export const useTodoStore = defineStore('todos', () => {
	const todos = ref<Todo[]>(array);
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
	};
});
