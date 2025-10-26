<script setup>
import { ref } from 'vue';
import about from '../assets/json/staticData.json';

const hoveredIndex = ref(null);

const ctf = ref(about.about.CTF);
const edu = ref(about.about.education);
const intern = ref(about.about.Internship);
</script>

<template>
  <h2 id="about">Career, Achievements, & Hobbies</h2>
 <div class="roadmap">
     <div
      class="card neon"
      v-for="(s, i) in edu"
      :key="'edu-' + i"
      @mouseenter="hoveredIndex = 'edu-' + i"
      @mouseleave="hoveredIndex = null"
      :class="{ expanded: hoveredIndex === 'edu-' + i }"
    >
      <h3 class="glow-text">{{ s.title }}</h3>
      <p>{{ s.text }}</p>
      <span>{{ s.year }}</span>
      <transition name="fade-slide">
        <img v-if="hoveredIndex === 'edu-' + i && s.img" :src="s.img" class="card-img" />
      </transition>
    </div>

    <!-- CTF -->
    <div
      class="card neon"
      v-for="(s, i) in ctf"
      :key="'ctf-' + i"
      @mouseenter="hoveredIndex = 'ctf-' + i"
      @mouseleave="hoveredIndex = null"
      :class="{ expanded: hoveredIndex === 'ctf-' + i }"
    >
      <h3 class="glow-text pink">{{ s.title }}</h3>
      <p>{{ s.text }}</p>
      <span>{{ s.year }}</span>
      <transition name="fade-slide">
        <img v-if="hoveredIndex === 'ctf-' + i && s.img" :src="s.img" class="card-img" />
      </transition>
    </div>

    <!-- Internship -->
    <div
      class="card neon"
      v-for="(s, i) in intern"
      :key="'intern-' + i"
      @mouseenter="hoveredIndex = 'intern-' + i"
      @mouseleave="hoveredIndex = null"
      :class="{ expanded: hoveredIndex === 'intern-' + i }"
    >
      <h3 class="glow-text cyan">{{ s.title }}</h3>
      <p>{{ s.text }}</p>
      <span>{{ s.year }}</span>
      <transition name="fade-slide">
        <img v-if="hoveredIndex === 'intern-' + i && s.img" :src="s.img" class="card-img" />
      </transition>
    </div>
  </div>
</template>

<style scoped>
/* Layout */
.roadmap {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  justify-content: center;
  background: radial-gradient(circle at top, #04080f, #000);
  overflow: hidden;
}

h2 {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  color: white;
  font-size: 2.5rem;
}


.card {
  flex: 1 1 calc(25% - 2rem);
  background: rgba(0, 5, 10, 0.7);
  color: #fff;
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 1rem;
  padding: 1.2rem;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.35s ease;
  overflow: hidden;
  backdrop-filter: blur(6px);
}

/* Neon glow ring */
.neon::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 2px solid transparent;
  background: linear-gradient(45deg, #00ffff, #ff00ff, #00ffff) border-box;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: destination-out;
  opacity: 0.3;
  filter: blur(3px);
  transition: opacity 0.4s;
}

/* Hover expand with glow pulse */
.card.expanded {
  transform: translateY(-8px);
  border-color: #0ff;
  box-shadow: 0 0 20px #00ffff99, inset 0 0 15px #00ffff33;
}

.card.expanded::before {
  opacity: 1;
  animation: pulse 1.5s infinite alternate;
}

/* Flicker effect */
@keyframes pulse {
  0%, 100% { filter: blur(2px) brightness(1.2); }
  50% { filter: blur(3px) brightness(1.6); }
}

/* Glowing text */
.glow-text {
  color: #0ff;
  text-shadow: 0 0 5px #0ff, 0 0 15px #00ffff, 0 0 25px #00ffff;
  letter-spacing: 0.05em;
  transition: text-shadow 0.3s ease;
}

.glow-text.pink {
  color: #ff00ff;
  text-shadow: 0 0 5px #ff00ff, 0 0 15px #ff00ff, 0 0 25px #ff00ff;
}

.glow-text.cyan {
  color: #00ffff;
}

/* Flickering glitch animation */
@keyframes flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    opacity: 1;
  }
  20%, 24%, 55% {
    opacity: 0.4;
  }
}

.card.expanded h3 {
  animation: flicker 2s infinite;
}

/* Image reveal animation */
.card-img {
  width: 100%;
  margin-top: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 12px rgba(0, 255, 255, 0.5);
}

/* Transition animation for fade-slide */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Responsive layout */
@media (max-width: 900px) {
  .card {
    flex: 1 1 calc(50% - 2rem);
  }
}

@media (max-width: 600px) {
  .card {
    flex: 1 1 100%;
  }
}
</style>