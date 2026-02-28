<template>
  <v-app class="app">
    <Header />
    <v-main
      style="
        --v-layout-left: 0px;
        --v-layout-right: 0px;
        --v-layout-top: 64px;
        --v-layout-bottom: 44px;
      "
    >
      <v-container>
        <slot />
      </v-container>
    </v-main>
    <!-- Footer -->
    <v-footer app>
      <span>&copy; 2024 My Nuxt App</span>
    </v-footer>
  </v-app>
</template>

<script setup>
import Header from "~/components/Organisms/Header/Header.vue";
</script>

<style lang="scss" scoped></style>
