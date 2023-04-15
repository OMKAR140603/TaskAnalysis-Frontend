<template>
    <h1>form for the adding user</h1>
       
        <button v-on:click="func()">getUser</button>
        </template>
        
            
        <script>
        import axios from "axios"

      
        export default {
            name: "AdminUserDashbordComponent",
            data() {
                return {
                    //default data which you need to be kept
                    acc_tkn: sessionStorage.getItem("access_token"),
                    username: "",
                    email: "",
                    password: "",
                    mobile: "",
                    is_admin: false,
                    role: ""
                }
            },
            components: {
                //imported components name here
            },
            methods:{
   async func(){

 const result= await  axios.get("https://6edc-210-16-95-84.ngrok-free.app/employee/me",{
    headers:{
        Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODE0OTM3MDQsInN1YiI6InRlc3RAZ21haWwuY29tIn0.1Bhx3UDuqWP2QpFmKSypSqHIKIAZxvc6EWs7Rr2OPnM",
        "Access-Control-Allow-Origin": "http://localhost:3009",
        "Content-Type" : null
    }
  })
  console.log(result.data)
   
  }
            },
            props: {
                //sending one data to another component
            },
            async mounted() {

}
        }
        </script>
            
        <style scoped></style>
        