<script setup lang="ts">
import { ref, type Ref } from 'vue'

const emit = defineEmits<{
  (e: 'deleteRequested'): void
}>()

const props = defineProps<{
  id: number
  description: string
  finished: boolean
}>()
const visible: Ref<boolean> = ref(props.finished || false)

function toggleStatus() {
  visible.value = !visible.value
}

const deleteItem = () => {
  emit('deleteRequested')
}
</script>

<template>
  <div class="element" :class="visible === true ? 'finished' : ''">
    <p>{{ description }}</p>
    <p>Status: {{ finished }}</p>
    <button @click.prevent="toggleStatus">Toggle</button>
    <button @click.prevent="deleteItem">DeleteItem</button>
  </div>
</template>

<style scoped>
.element {
  width: 100%;
  background-color: #169;
  padding: 4rem;
  color: #fff;
}

.finished {
  background-color: #161616;
  text-decoration: line-through;
  color: #bacada;
}
</style>
