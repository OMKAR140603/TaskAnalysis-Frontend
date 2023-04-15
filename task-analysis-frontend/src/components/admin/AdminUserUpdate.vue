<template>
<div>
    <h1>admin user update form here</h1>
</div>
<div>
    <label for="username">
        username:
        <input type="text" name="username" v-model="usernames.username" id="inp1" placeholder="enter usernname">
    </label> <br>
    <label for="email">
        email:
        <input type="email" name="email" v-model="usernames.email" id="inp2" placeholder="enter email">
    </label><br>

    <label for="number">
        mobile:
        <input type="number" name="number" v-model="usernames.mobile" id="inp4" placeholder="enter mobile no">
    </label><br>
    <label for="is_admin">
        is_admin:
        <input type="text" name="is_admin" v-model="usernames.is_admin" id="inp5">
    </label><br>
    <label for="role">
        role:
        <input type="text" name="role" v-model="usernames.role" id="inp6">
    </label><br>

    <input type="button" value="update" v-on:click="update()">
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "AdminUserUpdate",
    data() {
        return {
            acc_tkn: sessionStorage.getItem("access_token"),
            usernames: {
                username: "",
                email: "",

                mobile: "",
                is_admin: "",
                role: ""

            }
        }
    },
    methods: {
        async update() {
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + this.acc_tkn.toString() // replace this with your actual token value
                }
            }
            const res = await axios.put("https://bda8-210-16-94-134.ngrok-free.app/employee/" + this.$route.params.id,
                this.usernames, config)
            if (res.status == 200) {
                alert("updated successfully!!")
                this.$router.push("/employees")
            }
        }
    },
    async mounted() {
        try {
            const result = await axios.get("https://bda8-210-16-94-134.ngrok-free.app/employee/" + this.$route.params.id, {
                headers: {
                    // "Accept": "text/html",
                    "content-type": "text/html",
                    // "Access-Control-Allow-Origin": "http://localhost:3008",
                    "Authorization ": " Bearer " + this.acc_tkn.toString()

                }
            });
            console.log(result.data);
            this.usernames = result.data;
            //  console.log(this.usernames)
        } catch (error) {
            console.error(error);
        }
    }
}
</script>

<style></style>
