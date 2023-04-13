<template>
    <div>
      <form @submit.prevent="login">
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import crypto from 'crypto'
  
  export default {
    name: 'hashPass',
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      async login() {
        // Hash the password with sha256 algorithm
        const hashPassword = crypto.createHash('sha256').update(this.password).digest('hex')
  
        // Send a post request to the API to authenticate the user
        try {
          const response = await axios.post('http://localhost:3000/password', {
            email: this.email,
            password: hashPassword,
          })
          // Redirect to the admin page component on successful authentication
          if (response.data.success) {
            this.$router.push('/admin')
          } else {
            console.log(response.data.message)
          }
        } catch (error) {
          console.log(error)
        }
      },
    },
  }
  </script>
  