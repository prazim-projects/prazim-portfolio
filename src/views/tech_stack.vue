<script lang="js" setup>
import { ref } from 'vue';
import stackList from '../assets/json/staticData.json'


const secTools = [
    {category: 'Network Security & pentest with NMAP', img: 'svgs/Nmap Project.png'},
    {category: 'Web application security with burp suite', img: 'svgs/burpsuite-security.svg'}
]

const frameworks = ref(stackList.offers.stack)
</script>

<template>
<h2 class="slide-title" id="skills">Skills & Tools</h2>
<div class="container-sk">

    <div id="stack">
        <div v-for="(value, key) in frameworks" :key="key" class="stack-item">    
            <img :src="value.img" :alt="value.desc"></img>
            <p class="text-light text-start m-4">{{value.desc}}</p>
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
h2 {
  width: 100%;
  text-align: center;
  margin-bottom: 2px;
  color: white;
  font-size: 2.5rem;
}

.stack-item{
  margin: 10px;
}
.container-sk{
    display: flex;
    flex-direction: row;
    min-height: 200px;    /* set your desired minimum height */
    width: fit-content;
    box-sizing: border-box;
    padding-top: 10px;
}

#stack{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
    flex-wrap: wrap;
    
    :hover{
      transform: scale(1.1);
      box-shadow: 0 1px 10px rgba(0, 255, 255, 0.5);
    }

  }

.secTools{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
    
    :hover{
      transform: scale(1.03);
      box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    }
    
    img{
        height: 200px;
        width: 150px;
    }
  } 

.secTools div {
  text-align: center;
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

    /* .sectools{
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
 
    } */
  }

</style>