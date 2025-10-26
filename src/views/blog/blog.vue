<script setup>
import { ref, computed } from "vue";
import blogData from "../../assets/json/blogData.json"; // static JSON file
import { useRouter } from "vue-router";

const router = useRouter();
const posts = ref(blogData.posts);

function openPost(slug) {
  router.push(`/blog/${slug}`);
}
</script>

<template>
    <div class="blog-list">
    <h1>My Blog</h1>

    <div class="post-grid">
      <div v-for="post in posts" :key="post.slug" class="post-card" @click="openPost(post.slug)">
        <h2>{{ post.title }}</h2>
        <p>{{ post.description }}</p>
        <div class="tags">
          <span v-for="tag in post.tags" :key="tag">{{ tag }}</span>
        </div>
        <span class="date">{{ post.date }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-list {
  margin: 15px;
  padding: 3.5rem;
  color: #e0faff;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.post-card {
  border: 1px solid #0ff;
  border-radius: 12px;
  padding: 1rem;
  transition: all 0.3s;
  cursor: pointer;
}
.post-card:hover {
  box-shadow: 0 0 15px #0ff5;
  transform: translateY(-5px);
}
.tags span {
  background: rgba(0,255,255,0.1);
  border: 1px solid #0ff3;
  margin-right: 0.4rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}
</style>
