<script lang="js" setup>
import { onUnmounted, ref, onMounted } from 'vue';
import tech_stack from './tech_stack.vue';
import Projects from './projects.vue';
import About from './about.vue';
import myImage from '../assets/me.jpg';

const greetings = [
  'Hello there',
  'ሰላም',
  'Bonjour',
  'Hola',
  'こんにちは',
  'Guten Tag'
]

const currentIndex = ref(0)
const currentGreet = ref(greetings[0])

const full_name = ref('Bealprasim Demere')

function startRotation(interval = 2000) {
  const timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % greetings.length
    currentGreet.value = greetings[currentIndex.value]
  }, interval)

  onUnmounted(() => clearInterval(timer))
}

onMounted(() => startRotation(2000)) // 2s interval

</script>


<template>
<div class="container text-light">
  <!-- Left-->
  <div >
    <div id="info">
      <h1 class="text-4xl font-bold text-white">
        {{currentGreet}} , Welcome to my page! I am {{ full_name }} a software engineer hailing from the lands of Abyssinia 🇪🇹.</h1>
      <p class="text-gray-300 mt-2">Full-Stack web Developer • Progressive Web App Developer • Cyber Security Practitioner • CTF Player </p>

    </div>
  </div>
      <!-- Middle -->
  <div class="text-center h-64 " id="middle">
    <div class="glitch" :style="`--glitch-img: url(${myImage})`">
      <img src="/src/assets/me.jpg" height="350px" width="250px" class="rounded rounded-full w-5 h-10" alt="Profile Image"></img>
    </div>
      <div class="mt-4 flex gap-4">
        <a href="#projects" class="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white">View Projects</a>
        <a href="#contact" class="px-4 py-2 border border-cyan-500 hover:bg-cyan-600 rounded-lg text-white">Contact Me</a>
      </div>
  </div>

      <!-- Right -->
  <!-- <div class="text-center w-25" >  
    </div> -->
    <tech_stack />
</div>
<Projects />
<About />
</template>


<style scoped>

.container {
  padding-top: 50px;
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 25px;
}

.container > div {
  flex: 1 1 calc(50% - 32px);
  box-sizing: border-box;
  min-width: 300px;
}
 
/* --------- Hover effects --------- */
.img-fluid {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.img-fluid:hover { transform: scale(1.02); }

.btn {
  padding: 0.5rem 1.5rem;
  transition: transform 0.3s ease;
}
.btn:hover { transform: translateY(-10px); }

/* --------- Form styling --------- */
form {
  background: #1d3044;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  color: antiquewhite;
}

input, select {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

/* --------- Vue Transitions --------- */
.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
}

/* --------- Responsive Design --------- */
@media (max-width: 780px) {
  .container { flex-direction: column; }
  #info h2:first-child { font-size: 2rem; }
  .img-fluid { max-width: 250px; margin: 1rem auto; }
  .btn { width: 80%; margin: 0.5rem; }
  form { margin: 1rem; }
}

@media (max-width: 576px) {
  #info h2:first-child { font-size: 1.8rem; }
  .img-fluid { max-width: 220px; }
}
</style>
