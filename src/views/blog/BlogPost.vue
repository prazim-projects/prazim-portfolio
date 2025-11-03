<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { marked } from "marked";

const route = useRoute();
const router = useRouter();
const slug = route.params.slug;

const content = ref("Loading...");

//  import markdown posts
const posts = import.meta.glob("/src/assets/posts/*.md", { as: "raw", eager: true });

onMounted(() => {
  const path = `/src/assets/posts/${slug}.md`;

  if (posts[path]) {
    content.value = marked(posts[path]);
  } else {
    content.value = "<h2>404 — Post not found</h2>";
  }
});

function goBack() {
  router.push("/blog");
}
</script>


<template>
  <div class="blog-post">
    <button @click="goBack" class="back-btn">← Back to Blog</button>
    <div class="post-content" v-html="content"></div>
  </div>
</template>


<style scoped>
.blog-post {
  margin: 5px;
  padding: 4.5rem 3rem;
  max-width: 100%;
  margin: 0 auto;
  color: #e0faff;
  background: radial-gradient(circle at top, #05080f, #000);
  min-height: 100vh;
}

.back-btn {
  background: none;
  border: 1px solid #0ff;
  color: #0ff;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 1rem;
}
.back-btn:hover {
  background: #0ff2;
  box-shadow: 0 0 10px #0ff;
}

.post-content h1, h2, h3 {
  color: #0ff;
  text-shadow: 0 0 12px #0ff, 0 0 20px #ff00ff55;
  width: fit-content;
}
.post-content pre {
  background: #011;
  border: 1px solid #0ff3;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
}
.post-content code {
  color: #0ff;
}



@media (max-width: 576px) {
  #info h2:first-child { font-size: 1.8rem; }
  .img{ max-width: 220px; }
}

footer{
  width: 100%;
}
</style>
