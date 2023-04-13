<template>
<h1>form for the adding user</h1>
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
    
    <button v-on:click="AddUser()">AddUser</button>
    

    

   
    </template>
    
        
    <script>
    import axios from "axios"
   
    import crypto from 'crypto';
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
                role: "" ,
                usernames: [] 
            }
        },
        components: {
            //imported components name here
        },
        methods: {
            sample() {
                //inside the sample function
            },
            async AddUser() {
                let hashPassword=  crypto.createHash('sha256').update(this.password).digest('hex')
                let user_data = {
                    //this user_data is needed to pass as an argument in body while post req
                    "username": this.username,
                    "email": this.email,
                    "password":  hashPassword,
                    "mobile": this.mobile,
                    "is_admin": this.is_admin,
                    "role": this.role
                    //omkar and 123
    
                }
                await axios.post("https://b11f-210-16-95-84.ngrok-free.app/employee", user_data, {
                    headers: {
                        "Authorization ": " Bearer " + this.acc_tkn.toString()
                    }
                }).then((response) => {
                    if(response.status == 201){
                        alert("user created successfully ")
                        this.$router.push("/employees")
                    }
                    console.log(response)
                }).catch((error) => { console.log("error is :",error) })
            }
            
            
            
    
        },
        props: {
            //sending one data to another component
        }
    }
    </script>
        
    <style scoped></style>
    