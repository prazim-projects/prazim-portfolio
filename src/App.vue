<script setup>
import navbar from './components/layout/navbar.vue'
// import { RouterLink, RouterView } from 'vue-router'
import content from './views//content.vue'
import Footer from './components/layout/footer.vue'

const foot = Footer



</script>

<template>
  <div class="app-wrapper">
    <header>
      <navbar />
    </header>
    
    <main class="main-content">
      <div>
        <content />
      </div>    
    </main>

    <Footer class="footer" />
  </div>


  <!-- <router-view /> -->
</template>

<style scoped>

.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  position: fixed;
  width: 100%;
  z-index: 999;
  padding-bottom: 20px;
  margin-bottom: 10px;
  top: 0;
}

.main-content {
  flex: 1 0 auto;
  margin-top: 100px;
  width: 100%;
  padding-bottom: 0.5rem; }


@media (max-width: 768px) {
  .main-content {
    margin-top: 80px;
  }
}
</style>
