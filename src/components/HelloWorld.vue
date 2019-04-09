<template>
  <div class="shnycontainer">
    1111111111111111111111111111111111111111111111111111
    <Button type="primary">Primary</Button>
    <div class="miscontent">
      <router-view/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  mounted () {
    // axios.get("/demo/api/login").then(res=>{
    //   console.log(res)
    // })
  },
}
</script>

<style scoped>
.shnycontainer {
  width: 100%;
  height: auto;
  background-color: #f9f9f9;
}
.miscontent {
  width: 100%;
  height: auto;
}

</style>
