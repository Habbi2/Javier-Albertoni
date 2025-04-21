<template>
  <div class="about-view">
    <h1>About Me</h1>
    <AboutMe />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AboutMe from '@/components/AboutMe.vue';

export default defineComponent({
  name: 'AboutView',
  components: {
    AboutMe
  }
});
</script>

<style scoped>
.about-view {
  padding: 20px;
}
</style>