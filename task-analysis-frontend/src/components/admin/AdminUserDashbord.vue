<template>
<h1>Admins user dash bord layout here where he will crud the user</h1>
<router-link to="/employees/addUser">Add user</router-link>
<p>added users data will show below</p>
<input type="button" value="getUsersdata" v-on:click="getUsersData() ">
<table border="2px solid red">
<tr>

<td>emp_id</td>
<td>name</td>
<td>email</td>
<td>action</td>
</tr>
<tr v-for="(user , index ) in usernames"  :key="index">
<td>{{ user.emp_id }}</td>
<td>{{  user.name}}</td>
<td>{{  user.email}}</td>
<td><router-link :to="/employees/+user.emp_id">update</router-link>/
<router-link :to="/employee/+user.emp_id"><button>delete</button></router-link>

</td>
</tr>
</table>

</template>

<script>
import axios from "axios"
//axios.defaults.baseURL = 'https://84d3-210-16-94-134.ngrok-free.app/';
export default {

    name: "AdminUserDashbordComponent",
    data() {
        return {
            //default data which you need to be kept
            acc_tkn: sessionStorage.getItem("access_token"),
            usernames: [], //usernames coming from adminAddUserComponent
          
        }
    },
    components: {
        //imported components name here
    },
    methods: {
        sample() {
            //inside the sample function
        },
        async getUsersData() {
           
            await axios.get("https://b3cf-210-16-95-85.ngrok-free.app/api/team-member").then((response) => {
                console.log(JSON.stringify(response.data));
                this.usernames = response.data.map(user => ({
          emp_id: user.emp_id,
          name: user.username,
          email: user.email
        }))

        console.log(this.usernames)
        
            }).catch((error) => { console.log(error) })
        },
        async deleteUser(){
          const response =  await axios.delete("https://6edc-210-16-95-84.ngrok-free.app/employee/4",{
                headers: {
                        "Authorization ": " Bearer " + this.acc_tkn.toString()
                    }
            })
            console.log(response.data)
            if(response.status==200){
                alert("user deleted!!!")
                this.$router.push("/employees")
            }
        }

    },
    props: {
        //sending one data to another component
    },
    mounted(){
        // this.getUsersData()
    }
}
</script>

<style scoped></style>
