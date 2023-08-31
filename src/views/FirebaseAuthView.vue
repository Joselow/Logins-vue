<script setup lang="ts">
import { type User } from "@/types/User";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { reactive } from 'vue';


// type User = {
//     email: string,
//     password: string
// }

const user: User = reactive(
    { 
        email: '',
        password: '',
    })

const authUser = async() => {
    const auth = getAuth();
    try {
        const response = await signInWithEmailAndPassword(auth, user.email, user.password);
        console.log(response);
        alert('Authenticated')
    } catch (error) {
        console.log(error); 
        alert(':C')        
       
    }
}

</script>

<template>
    <div class="bg-yellow-200 rounded-lg shadow-md">
        <form action="" class="p-6 w-96">
            <div class="mb-4">
                <label for="email" class="block font-bold">Email</label>
                <input type="text" class="w-full form-input shadow-lg rounded-md placeholder-green-500 focus:ring-lime-600"
                    placeholder="Enter your email"
                    v-model="user.email"
                >
            </div>
            <div class="mb-4">
                <label for="password" class="font-bold block ">Password</label>
            <input type="text" class="w-full  form-input rounded-md shadow-lg placeholder-green-500 focus:ring-lime-600"
                placeholder="Enter your password"
                v-model="user.password"

>
            </div>
            <div class="text-end">
                <button type="button" class="p-2 border border-gray-400 bg-lime-400 rounded-lg hover:bg-lime-500 text-gray-600 font-bold"
                    @click="authUser"
                >
                    Acceder
                </button>
            </div>
        </form>
    </div>
</template>

<style scoped>
    
</style>