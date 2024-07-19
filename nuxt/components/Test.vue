<script setup>
const result = ref('')
async function getUser() {
    result.value = await useCustomFetch(`/api/user`)
}

</script>
<template>
    <button @click="getUser">fetch</button>
    <pre>{{ result }}</pre>
</template>