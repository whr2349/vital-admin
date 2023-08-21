<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
     <n-space>
    <n-button>Default</n-button>
    <n-button type="tertiary">
      Tertiary
    </n-button>
    <n-button type="primary">
      Primary
    </n-button>
    <n-button type="info">
      Info
    </n-button>
    <n-button type="success">
      Success
    </n-button>
    <n-button type="warning">
      Warning
    </n-button>
    <n-button type="error">
      Error
    </n-button>
  </n-space>
    <div class="wrapper">
      <RouterView />
    </div>

 
</template>

<style scoped>
</style>
