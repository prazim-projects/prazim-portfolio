<script lang="js" setup>
import { ref } from 'vue';
import stackList from '../assets/json/staticData.json'


const secTools = [
    {category: 'Network Security', img: 'src/assets/Nmap Project.png'},
    {category: 'Web security', img: 'src/assets/burpsuite-security.svg'}
]

const frameworks = ref(stackList.offers.stack)
</script>

<template>
<div class="container-sk">
    <div id="stack">
        <div class="h-2" v-for="(value, key) in frameworks" :key="key">    
            <img :src="value.img" :alt="value.desc"></img>
            <p class="text-light text-center">{{value.desc}}</p>
        </div>  
    </div>
    <div class="secTools">
        <div v-for="(tool, index) in secTools">
            <img :src="tool.img" :alt="tool.category" class="img-fluid"></img>
            <p>{{ tool.category }}</p>
        </div>
    </div>
</div>
</template>

<style lang="css" scoped>
.container-sk{
    display: flex;
    flex-direction: row;
    min-height: 200px;    /* set your desired minimum height */
    width: 100%;
    box-sizing: border-box;
    padding-top: 10px;
}

#stack{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px 0px;
    flex-wrap: wrap;
    
    :hover{
      transform: scale(1.1);
      box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
    }

  }

.secTools{
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    
    :hover{
      transform: scale(1.1);
      box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
    }
    
    img{
        height: 200px;
        width: 200px;
    }
  } 

#stack > div{
    flex: 1 ;
    img{
        height: 200px;
        width: 200px;

    }


    
  }

  @media (max-width: 780px){
    .container-sk{
      width: 100%;
      flex-direction: column;
      align-items: center;
    }

    .sectools{
      width: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
    
      :hover{
        transform: scale(1.1);
        box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
      }
    
      img{
        height: 200px;
        width: 200px;
      }
 
    }
  }

</style>