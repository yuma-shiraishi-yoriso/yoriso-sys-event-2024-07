<script setup>
const result = ref('')
async function postTasks() {
    result.value = await useCustomFetch(`/api/tasks`, {
        method: 'POST',
        body: {
            title: 'テス値',
            description: '説明',
            completed: 0
        }
    })
}
</script>
<template>
    <button @click="postTasks">crate</button>
    <pre>{{ result }}</pre>
</template>