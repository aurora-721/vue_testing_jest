<template>
  <div>
    <div 
     v-for="todo in todos"
     :key="todo.id"
      data-libera="todo"
      :class="[todo.completed ? 'completed': '']"
    >
        {{ todo.text }}
        <input
            type="checkbox"
            v-model="todo.completed"
            data-test="todo-checkbox"
        />
    </div>

    <form data-test="form" @submit.prevent="createTodo">
        <input data-test="new-todo" v-model="newTodo" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',

  data() {
    return {
        newTodo: "",
        todos: [
            {
            id: 1,
            text: 'Learn Vue Testing',
            completed: false
            },
            {
            id: 2,
            text: 'Learn Vue Testing 2',
            completed: false
            }
        ]
    }
  },
  methods: {
    createTodo() {
        this.todos.push({
            id: 2,
            text: this.newTodo,
            completed: false
        })
        this.newTodo = "";
    }
  }
}
</script>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>