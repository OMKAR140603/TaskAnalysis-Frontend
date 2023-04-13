<template>
    <div>
        <h1>admin user update form here</h1>
    </div>
    <div>
        <label for="username">
        username:
        <input type="text" name="username" v-model="username" id="inp1" placeholder="enter usernname">
    </label> <br>
    <label for="email">
        email:
        <input type="email" name="email" v-model="email" id="inp2" placeholder="enter email">
    </label><br>
    <label for="password">
        password:
        <input type="password" name="password" v-model="password" id="inp3" placeholder="enter password">
    </label><br>
    <label for="number">
        mobile:
        <input type="number" name="number" v-model="mobile" id="inp4" placeholder="enter mobile no">
    </label><br>
    <label for="is_admin">
        is_admin:
        <input type="text" name="is_admin" v-model="is_admin" id="inp5">
    </label><br>
    <label for="role">
        role:
        <input type="text" name="role" v-model="role" id="inp6">
    </label><br>
    
    <input type="button" value="update" v-on:click="update()">
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "AdminUserUpdate",
    data(){
        return{
         usernames : []
        }
    },
    methods:{
       async update(){
        const res = await axios.put("https://b11f-210-16-95-84.ngrok-free.app/employee/"+ this.$route.params.id,
                {
                  emp_id : this.usernames.emp_id,
                  name : this.usernames.username,
                  email : this.usernames.email
                })
                if(res.status==200){
                alert("updated successfully!!")

                }
       }
    }
    
    ,
    async mounted(){
      const result=  await axios.get("https://b11f-210-16-95-84.ngrok-free.app/employee/"+this.$route.params.id)
      console.log(result.data)
      this.usernames = result.data

    }
}
</script>
<style></style>