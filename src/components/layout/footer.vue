<script setup>
import { reactive, ref } from 'vue';
const socials = reactive({
    telegram: 'https://t.me/bilboardmusic',
    xTwitter: 'https://x.com/bealprazim', 
    githubProjects: 'https://github.com/prazim-projects', 
    githubCoding : 'https://github.com/prasimbaal', 
})

</script>

<template>    
<footer class="footer-content">
  <!-- Section: Social media -->
  <section class="social-section">
    <div class="social-links">
      <div v-for="(value, key) in socials" :key="key" class="social-item">
        <a :href="value" class="text-white">{{ key }}</a>
      </div>
    </div>
  </section>

  <!-- Section: Links  -->
  <section class="links-section">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4">
          <!-- Content -->
          <h6 class="text-uppercase fw-bold">Leab freelance</h6>
          <hr class="divider"/>
          <p>Let me be your goto software solutions guy and you will not be disappointed</p>
        </div>
        <div class="col-md-4 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold">Products</h6>
          <hr class="divider"/>
          <p><a href="#!" class="text-white">Web Development</a></p>
          <p><a href="#!" class="text-white">Telegram Bot Development</a></p>
        </div>
        <div class="col-md-4 mb-4">
          <h6 class="text-uppercase fw-bold">Contact</h6>
          <hr class="divider"/>
          <p><i class="fas fa-home mr-3"></i> Adama Nazreth Ethiopia</p>
          <p><i class="fas fa-envelope mr-3"></i> prasimcontact@gmail.com</p>
          <p><i class="fas fa-phone mr-3"></i><a href="https://t.me/earphonesplugd"> Telegram</a> </p>
        </div>
      </div>
    </div>
  </section>

  <div class="copyright">
    © 2024 Copyright:
    <a class="text-white" href="https://">Leab Freelance</a>
  </div>
</footer>
</template>

<style lang="css" scoped>
.footer-content {
  width: 100%;
  background-color: #370839;
  color: white;
}

.social-section {
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.1);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.social-item a {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.social-item a:hover {
  opacity: 0.8;
}

.links-section {
  padding: 2rem 0;
}

.divider {
  width: 60px;
  height: 2px;
  background-color: white;
  margin: 1rem 0;
  border: none;
}

.copyright {
  padding: 1rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.2);
}

a {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

a:hover {
  opacity: 0.8;
  color: white;
}

@media (max-width: 768px) {
  .social-links {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .links-section {
    padding: 1rem;
  }
}
</style>