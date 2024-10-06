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
];

export const useTodoStore = defineStore('todos', () => {
	const todos = ref<Todo[]>(array);
	const activeTab = ref<string>('All');

	const setActiveTab = (tab: string) => {
		activeTab.value = tab;
	};

	const todosInLocalStorage = localStorage.getItem('todos');
	if (todosInLocalStorage) {
		todos.value = JSON.parse(todosInLocalStorage)._value;
	}

	const active = computed(() => todos.value.filter((todo) => !todo.completed));

	const done = computed(() => todos.value.filter((todo) => todo.completed));

	const completedToggle = (id: number) => {
		todos.value.forEach((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
		});
	};

	watch(
		() => todos,
		(state) => {
			localStorage.setItem('todos', JSON.stringify(state));
		},
		{ deep: true }
	);

	return { todos, activeTab, active, done, setActiveTab, completedToggle };
});
