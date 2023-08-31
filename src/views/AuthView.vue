<script setup lang="ts">
import AuthService from '@/services/AuthService';
import { type User } from "@/types/User";
import { reactive } from 'vue';

const auth = new AuthService();

// type User = {
//     email: string,
//     password: string
// }

const user: User = reactive(
    { 
        email: '',
        password: '' 
    })

const authUser = async() => {
  const success =await auth.login(user.email, user.password);
  if(success){
    alert('Authenticated')

    console.log(auth.jwt);

  }else{
    alert(':C')
  }
}


</script>

<template>
  <form class="w-96 p-6 bg-white rounded-lg shadow-md">
    <div class="mb-4">
      <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
      <input type="email" id="email" name="email" class="form-input block w-full border border-gray-300 rounded-md shadow-lg focus:ring focus:ring-indigo-500  
      placeholder-gray-400" placeholder="Your email address"
          v-model="user.email"
      >
      <span class="text-red-400 font-sm p-1"
          v-show="!user.email"

      >Email is required</span>
    </div>
    <div class="mb-4">
      <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
      <input type="password" id="password" name="password" class="form-input block w-full border border-gray-300 rounded-md shadow-lg focus:ring focus:ring-indigo-500  
        placeholder-gray-400" placeholder="Your password"
          v-model="user.password"
      >
      <span class="text-red-400 font-sm p-1"
          v-show="!user.password"
      > Password is required</span>

    </div>
    <div class="flex justify-end">
      <button type="button" class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full"
        @click="authUser()"
      >
        Sign In
      </button>
    </div>
  </form>

</template>

<style scoped>

</style>