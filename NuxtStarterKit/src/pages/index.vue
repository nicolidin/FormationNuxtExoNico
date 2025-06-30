<template>
  qgd
  Hey it's home
  <button @click="goToArticle">goToArticle</button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref(null);

const router = useRouter()

await useAsyncData('key',() => {
  if (import.meta.client) {
    console.log("client !!!")
  }
  if (import.meta.server) {
    console.log("server !!!!")
  }
  return "data"
})
function goToArticle() {
  router.push("/articles")
}

onMounted(() => {
  console.log("mounted")
});
</script>

<style scoped lang="scss"></style>
