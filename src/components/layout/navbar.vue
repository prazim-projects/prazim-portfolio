<script lang="js" setup>
import { ref } from 'vue';
import staticData from '../../assets/json/staticData.json'


const navs = ref(staticData.navbar.links)

</script>

<template>
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"><em>Beal</em></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon bg-white"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item" v-for="(value, key) in navs">
                     <a class="nav-link" aria-current="page" :href="'#'+value.path" >{{value.label}}</a>                 
                  </li>

                </ul>
              </div>
            </div>
          </nav>
</template>

<style lang="css" scoped>
  li a{
      color: aliceblue;
     }
  em{
    color: bisque;
  }

  .navbar{
    margin-bottom: 10px;
  }
</style>