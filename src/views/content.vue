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
    <div class="glitch bg-red-500" >
      <img src="/src/assets/me.jpg" class="rounded-50 object-cover" alt="Profile Image"></img>
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
.glitch {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}

img{
  width: 100%;
  height: 100%;

}

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
