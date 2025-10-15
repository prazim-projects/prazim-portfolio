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

      <div class="intern"
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

    </div>
  </section>
</template>

<style scoped>
.roadmap {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 2rem;
  padding: 2rem;
}
.milestone, .intern {
  flex: 0 0 300px;
  background: rgba(0,0,0,0.12);
  color: #fff;
  border: 2px solid #00ffff;
  border-radius: 1rem;
  scroll-snap-align: start;
  padding: 1rem;
  transition: transform 0.4s, max-height 0.4s;
  cursor: pointer;
  max-height: 180px;
  overflow: hidden;
  position: relative;
}
.milestone.expanded, .intern.expanded {
  max-height: 450px;
  background: rgba(0,0,0,0.25);
}
.milestone-img, .intern-img {
  width: 100%;
  margin-top: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,255,255,0.2);
}
.milestone:hover, .intern:hover {
  transform: translateY(-10px);
}
</style>