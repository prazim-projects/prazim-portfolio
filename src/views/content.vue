<script lang="js" setup>
import { onUnmounted, ref, onMounted } from 'vue';
import tech_stack from './tech_stack.vue';
import Projects from './projects.vue';
import About from './about.vue';
  
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

const name = "Bealprasim Demere"

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
        {{currentGreet}} , Welcome to my page, I am Bealprasim Demere a software engineer hailing from the lands of Abyssinia.</h1>
      <p class="text-gray-300 mt-2">Full-Stack web Developer • Progressive Web App Developer • Cyber Security Practitioner • CTF Player </p>

    </div>
  </div>
      <!-- Middle -->
  <div class="text-center h-64 " id="middle">
    <div class="glitch">
      <img src="/src/assets/me.jpg" height="350px" width="250px" class="rounded rounded-full w-5 h-10" alt="Profile Image"></img>
    </div>
      <div class="mt-4 flex gap-4">
        <a href="#projects" class="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white">View Projects</a>
        <a href="#contact" class="px-4 py-2 border border-cyan-500 hover:bg-cyan-600 rounded-lg text-white">Contact Me</a>
      </div>
  </div>

      <!-- Right -->
  <div class="text-center w-25" >  
    </div>
    <h2 class="slide-title" id="skills">Skills & Tools</h2>
    <tech_stack />
</div>
<h2 class="slide-title" id="projects"> Projects </h2>
<Projects />
<h2 id="about">My Career and Hobbies so far</h2>
<About />
</template>


<style lang="css" scoped>
  h2{
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    color: white;
    font-size: 2.5rem
  }

  .container{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: stretch;

    div {
      flex: 1;
      min-width: 400px;
    }
  }
  
  .container > div {
    flex: 1 1 calc(50% - 32px); /* 3 per row, minus gap */
    box-sizing: border-box;
    min-width: 0;
    margin-bottom: 32px;
  }

  .glitch {
      position: relative;
      width: 200px;
      animation: spin 6s linear infinite;
    }

  .glitch img {
      width: 100%;
      display: block;
    }

    /* Red and blue ghost layers */
    .glitch::before,
    .glitch::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      mix-blend-mode: screen;
      opacity: 0.6;
      animation: glitch 0.3s infinite;
    }

    .glitch::before {
      left: 2px;
      background-color: cyan;
      animation-delay: 0.05s;
    }

    .glitch::after {
      left: -2px;
      background-color: magenta;
      animation-delay: 0.1s;
    }

    img{
      width: 200px;
      animation: spin 4s linear infinite, glitch 0.3s infinite, ;
      margin: 0 auto;
    }

    .placeholder {
      min-height: 200px; 
      background: transparent;
      flex: 1 1 calc(33.333% - 32px);
    }

    @keyframes spin {
      from {  transform: rotate(0deg);}
      to {  transform: translateY(360deg);}
    /* 50% {
      transform: translateY(-50px);
    } */
  }
  
   @keyframes glitch {
      0%   { clip-path: inset(0 0 0 0); transform: translate(0,0); }
      20%  { clip-path: inset(10% 0 30% 0); transform: translate(-2px, -2px); }
      40%  { clip-path: inset(40% 0 20% 0); transform: translate(2px, 2px); }
      60%  { clip-path: inset(20% 0 40% 0); transform: translate(-2px, 1px); }
      80%  { clip-path: inset(30% 0 10% 0); transform: translate(2px, -1px); }
      100% { clip-path: inset(0 0 0 0); transform: translate(0,0); }
    }

.img-fluid {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.img-fluid:hover {
  transform: scale(1.02);
}

.btn {
  padding: 0.5rem 1.5rem;
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-10px);
}

form {
  height: fit-content;
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


/* Transitions */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* Responsive Design */
@media (max-width: 780px) {
  .container {
    display: flex;
    flex-direction: column;

  }

  .container > div {
    flex: 1 1 calc(50% - 32px); /* 3 per row, minus gap */
    box-sizing: border-box;
    min-width: 0;
    margin-bottom: 32px;
  }
  
  #info h2:first-child {
    font-size: 2rem;
  }

  .img-fluid {
    max-width: 250px;
    margin: 1rem auto;
  }


  .btn {
    margin: 0.5rem;
    width: 80%;
  }

  form {
    margin: 1rem;
  }
}

@media (max-width: 576px) {
  #info h2:first-child {
    font-size: 1.8rem;
  }

  .img-fluid {
    max-width: 200px;
  }

}

</style>