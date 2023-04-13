<template>
    <div>
      <form @submit.prevent="handleSubmit">
        <label>
          Username:
          <input type="text" v-model="username">
        </label> <br>
        <label>
          Password:
          <input type="password" v-model="password">
        </label> <br>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import crypto from 'crypto';
  import axios from 'axios';
  

  
  export default {
    name: 'LoginForm',
    data() {
      return {
        initial : 0,
        username: '',
        password: '',
      };
    },
   
    methods: {
      handleSubmit() {
      const hashPassword=  crypto.createHash('sha256').update(this.password).digest('hex') 
        console.log(hashPassword)
        axios.post('https://b11f-210-16-95-84.ngrok-free.app/login', {
          username: this.username,
          password: hashPassword,
          "Access-Control-Allow-Origin" : "http://localhost:3000/",
        }).then((response) => {
          try{
            if (response.status === 200) {
            console.log( " accessToken",response.data.access_token)
            const accessToken = response.data.access_token
            const refreshToken = response.data.refresh_token
            sessionStorage.setItem("access_token", accessToken);
            sessionStorage.setItem("refresh_token", refreshToken);
            alert("login successfully!!!")
            this.$router.push('/admin');

          }
          }
          catch{
            alert("invalid credentials ")
          }
         
        })
        .catch((error) => {
          if(error.response.status == 400){
            alert("inalid credentials")
          }
          else{

  console.error("error ",error);
          }
       
        })
       
      },
    },
  };
  </script>
 
            
           