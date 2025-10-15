<script setup>
import { ref } from 'vue';
import about from '../assets/json/staticData.json'

const hoveredIndex = ref(null);

const ctf = ref(about.about.CTF)
const edu = ref(about.about.education)
const misc = ref(about.about.misc)
const intern = ref(about.about.Internship)

</script>


<template>
  <section class="timeline">
    <div class="roadmap">
      <div
        class="milestone"
        v-for="(s, i) in edu"
        :key="i"
        @mouseenter="hoveredIndex = i"
        @mouseleave="hoveredIndex = null"
        :class="{ expanded: hoveredIndex === i }"
      >
        <h3>{{ s.title }}</h3>
        <p>{{ s.text }}</p>
        <span>{{ s.year }}</span>
        <img v-if="hoveredIndex === i && s.img" :src="s.img" class="milestone-img" />
      </div>

      <div class="ctf"
         v-for="(s, i) in ctf"
        :key="i"
        @mouseenter="hoveredIndex = i"
        @mouseleave="hoveredIndex = null"
        :class="{ expanded: hoveredIndex === i }"
        >
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
          <span>{{ s.year }}</span>
          <img v-if="hoveredIndex === i && s.img" :src="s.img" class="milestone-img" />
      </div>

      <div class="intern"
         v-for="(s, i) in intern"
        :key="i"
        @mouseenter="hoveredIndex = i"
        @mouseleave="hoveredIndex = null"
        :class="{ expanded: hoveredIndex === i }"
        >
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
          <span>{{ s.year }}</span>
          <img v-if="hoveredIndex === i && s.img" :src="s.img" class="milestone-img" />
      </div>

    </div>
  </section>
</template>

<style scoped>
.roadmap {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  justify-content: flex-start;
}

.milestone, .intern, .ctf {
  flex: 0 0 23%;
  background: rgba(0,0,0,0.12);
  color: #fff;
  border: 2px solid #00ffff;
  border-radius: 1rem;
  padding: 1rem;
  transition: transform 0.4s, max-height 0.4s;
  cursor: pointer;
  max-height: 200px;
  max-width: 23%;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
}
.milestone.expanded, .intern.expanded, .ctf.expanded {
  max-height: 400px;
  background: rgba(0,0,0,0.25);
}
.milestone-img {
  width: 100%;
  margin-top: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,255,255,0.2);
}
.milestone:hover, .intern:hover, .ctf:hover {
  transform: translateY(-10px);
}

@media (max-width: 780) {
  .roadmap {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  justify-content: flex-start;
}

.milestone, .intern, .ctf {
  flex: 0 0 50%;
  background: rgba(0,0,0,0.12);
  color: #fff;
  border: 2px solid #00ffff;
  border-radius: 1rem;
  padding: 1rem;
  transition: transform 0.4s, max-height 0.4s;
  cursor: pointer;
  max-height: 500px;
  max-width: 23%;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
}
.milestone.expanded, .intern.expanded, .ctf.expanded {
  max-height: 500px;
  max-width: 50%;
  background: rgba(0,0,0,0.25);
}
.milestone-img {
  width: 100%;
  margin-top: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,255,255,0.2);
}
.milestone:hover, .intern:hover, .ctf:hover {
  transform: translateY(-10px);
}
  
}
</style>