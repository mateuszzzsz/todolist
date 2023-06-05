<script setup lang="ts">
import { type Ref, ref } from 'vue'
import TodoList from './components/TodoList.vue'
import type TodoItem from './models/todo'

const dummy: Ref<TodoItem[]> = ref([
  {
    id: 1,
    description: 'Lorem ipsum',
    finished: false
  },
  {
    id: 2,
    description: 'Lorem ipsum 2',
    finished: true
  }
])

const description: Ref<string | null> = ref(null)

const addItem = () => {
  dummy.value.push({
    id: dummy.value.length + 1,
    description: description.value || 'Default value',
    finished: false
  })
  description.value = null
}

const deleteItem = (id: number) => {
  console.log(dummy.value, id)
  dummy.value.splice(id, 1)
}
</script>

<template>
  <header>
    <h1>Simple TODO</h1>
    <form class="form">
      <input type="text" v-model="description" class="input" />
      <button type="submit" @click.prevent="addItem">Dodaj</button>
    </form>
  </header>
  <main>
    <TodoList :items="dummy" @delete-requested="deleteItem" />
  </main>
</template>

<style scoped>
.form {
  display: flex;
  margin: 2rem 0;
}
.form button {
  padding: 0 2rem;
  display: block;
  background-color: #121212;
  color: #fff;
  font-size: 1rem;
}
.input {
  width: 100%;
  padding: 2rem;
  font-size: 1.5rem;
  color: #141414;
}
</style>
