<template>
    <div>
        
    <h1>testing</h1>
    <button v-on:click="func()">click</button>
   </div>
</template>
<script>
import axios from 'axios';

export default {
    name:"testingCompo",
    data(){

    },
    methods:{
       async func(){
      const result =  await axios.get("https://465b-210-16-95-80.ngrok-free.app/employee/me",{
        headers:{
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODE1NDIwNjksInN1YiI6InJtcEBnbWFpbC5jb20ifQ.0IoaEpNxnx215uyy9tzBkdZi1zMCuVN0JcL_jrYc3qI"
            ,
            "Access-Control-Allow-Origin": "http://localhost:3009/",
        }
      })
      console.log(result.data.is_admin)
      if(result.data.is_admin==true){
        console.log("hi")
        this.$router.push("/admin")
      }
      else{
        this.$router.push("/invistigations")
      }
        }
    }
}
</script>
<style></style>