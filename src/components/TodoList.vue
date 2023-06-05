<script setup lang="ts">
import type TodoItem from '@/models/todo';
import TodoItemComp from './TodoItem.vue';
import {useAutoAnimate} from '@formkit/auto-animate/vue'

    const props = defineProps<{
        items: TodoItem[]
    }>();

    const emit = defineEmits<{
        (e: 'deleteRequested', id: number): void
    }>();


    const deleteItem = (id: number) => {
    emit('deleteRequested', id);
}

const [parent] = useAutoAnimate();

</script>

<template>
    <section class="content" v-auto-animate>
        <TodoItemComp v-for="(item, index) in props.items"
            :key="item.id"
            :id="item.id"
            :description="item.description"
            :finished="item.finished"
            @delete-requested="deleteItem(index)"
        ></TodoItemComp>
    </section>
</template>

<style scoped>
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: baseline;
        width: 1200px;
        gap: 2rem;
        overflow-y: auto;
        max-height: 80vh;
    }
</style>