<script setup>
import { ref } from 'vue';
import projs from '../assets/json/staticData.json'
const projects = ref(projs.projects.proj);
</script>

<template>
  <div class="projects-grid" >
    <div v-for="project in projects" :key="project.title" class="project-card">
      <img :src="project.image" :alt="project.title" class="project-img" />
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.projects-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
}
.project-card {
  background: #222;
  color: #eee;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  padding: 1.5rem;
  width: 300px;
  text-align: center;
  transition: transform 0.2s;
}
.project-card:hover {
  transform: translateY(-8px) scale(1.03);
}
.project-img {
  width: 100%;
  max-width: 180px;
  border-radius: 8px;
  margin-bottom: 1rem;
}
</style>