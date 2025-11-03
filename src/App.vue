<script setup>
import Navbar from './components/layout/navbar.vue'
import { RouterView } from 'vue-router'
import Footer from './components/layout/footer.vue'
import { Analytics } from '@vercel/analytics/vue';
import { SpeedInsights } from "@vercel/speed-insights/vue"

</script>

<template>
  <Analytics />
  <SpeedInsights />
  <div class="app-wrapper">
    <header>
      <Navbar />
    </header>

    <main class="main-content">
      <RouterView />
    </main>

    <Footer class="footer" />
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Navbar now sticky instead of fixed */
header {
  position: sticky;
  top: 0;
  z-index: 999;
}

/* No more need for large margin-top */
.main-content {
  flex: 1 0 auto;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
}


.navbar {
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(0, 255, 255, 0.3);
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.2);
}

</style>
