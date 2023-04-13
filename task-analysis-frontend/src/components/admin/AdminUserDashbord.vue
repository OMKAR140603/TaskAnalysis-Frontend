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
<td><router-link :to="/employees/+user.emp_id">update</router-link></td>
</tr>
</table>

</template>

<script>
import axios from "axios"

export default {

    name: "AdminUserDashbordComponent",
    data() {
        return {
            //default data which you need to be kept
            acc_tkn: sessionStorage.getItem("access_token"),
            usernames: [], //usernames coming from adminAddUserComponent
            sample2: [1,2,3,4]
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
            //this functionality wont work as this route is not added till now 
            await axios.get("https://b11f-210-16-95-84.ngrok-free.app/employee", {timeout:10000},{
                headers: {
                    // "Accept": "text/html",
                   "content-type" : "text/html",
                    "Access-Control-Allow-Origin": "http://localhost:3005",
                    "Authorization ": " Bearer " + this.acc_tkn.toString()

                }
            }).then((response) => {
                console.log(response)

                this.usernames = response.data.map(user => ({
          emp_id: user.emp_id,
          name: user.username,
          email: user.email
        }))

        console.log(this.usernames)
        
            }).catch((error) => { console.log(error) })
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
