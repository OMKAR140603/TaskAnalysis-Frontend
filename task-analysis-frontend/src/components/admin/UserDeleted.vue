<template>
    <div>
        welcome
        do you want to delete ?
        <button v-on:click="deleteUser()"> yes</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:"UserDeleted",
    data(){
        return{
         acc_tkn : sessionStorage.getItem("access_token")
        }
    },
    methods:{
        async deleteUser(){
            const response =  await axios.delete("https://b3cf-210-16-95-85.ngrok-free.app/api/team-member/"+this.$route.params.id,{
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

        }
    }
    

</script>
<style></style>