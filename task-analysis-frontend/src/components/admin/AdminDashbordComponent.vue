<template>
<h1>Admin it is</h1>
<router-link to="/employees">ShowAllEmployees</router-link> <br>
<router-link to="/invistigations">ShowAllInvistigations</router-link>
</template>
<script>

export default {
    name:"AdminDashbordComponent",
    data(){
        return{
         //default data which you need to be kept
        }
    },
    components:{
    //imported components name here
    },
    methods:{
        sample(){
            //inside the sample function
        }
    },
    props:{
     //sending one data to another component
    }
}
</script>
<style scoped></style>