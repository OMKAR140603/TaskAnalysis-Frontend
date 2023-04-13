<template>
    <h1>form for the adding user</h1>
       
        <button v-on:click="fetchData()">getUser</button>
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
            methods: {
                sample() {
                    //inside the sample function
                },
                async  fetchData() {
  const url = 'https://b11f-210-16-95-84.ngrok-free.app/employee';
  const header = {
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODEzMDAzNzksInN1YiI6InJhakBnbWFpbC5jb20ifQ.gWhu5bV7yrxrbE3Tj7ATZf10zzqh1vC11-eKFjtHuBY',
  
  };
  try {
    const response = await axios.get(url, { headers: header });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
                
        
            },
            props: {
                //sending one data to another component
            }
        }
        </script>
            
        <style scoped></style>
        