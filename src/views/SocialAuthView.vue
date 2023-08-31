<script setup lang="ts">
import { type User } from "@/types/User";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { reactive } from 'vue';

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twiterProvider = new TwitterAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth =  getAuth()


const user: User = reactive(
{ 
    email: '',
    password: '',
})


const loginGoogle = async() => {
    try {
        const response = await signInWithPopup(auth, googleProvider )
        alert('Authenticated')
        const credentials = GoogleAuthProvider.credentialFromResult(response)
        const token = credentials?.accessToken;
        console.log(response);
        console.log(credentials);
        console.log(token);
        
    } catch (error) {
        alert(':C')
        console.log(error);
        
    }
}

const loginFacebook = async() => {
    try {
        const response = await signInWithPopup(auth, facebookProvider )
        alert('Authenticated')
        const credentials = FacebookAuthProvider.credentialFromResult(response)
        const token = credentials?.accessToken;
        console.log(response);
        console.log(credentials);
        console.log(token);
        
    } catch (error) {
        alert(':C')
        console.log(error);
        
    }
}

const loginX = async() => {
    try {
        const response = await signInWithPopup(auth, twiterProvider )
        alert('Authenticated')
        const credentials = TwitterAuthProvider.credentialFromResult(response)
        const token = credentials?.accessToken;
        console.log(response);
        console.log(credentials);
        console.log(token);
        
    } catch (error) {
        alert(':C')
        console.log(error);
        
    }
}

const loginGithub = async() => {
    try {
        const response = await signInWithPopup(auth, githubProvider )
        alert('Authenticated')
        const credentials = GithubAuthProvider.credentialFromResult(response)
        const token = credentials?.accessToken;
        console.log(response);
        console.log(credentials);
        console.log(token);
        
    } catch (error) {
        alert(':C')
        console.log(error);
        
    }
}

</script>

<template>
    <div class="flex justify-center gap-1">
            <button class="bg-blue-400 px-4 py-1 hover:bg-blue-500 text-white rounded-lg shadow-lg" 
            @click="loginFacebook">Facebook</button>
        
            <button class="bg-red-400 px-4 py-1 hover:bg-red-500 text-white rounded-lg shadow-lg" 
            @click="loginGoogle">Google</button>
        
            <button class="bg-sky-400 px-4 py-1 hover:bg-sky-500 text-white rounded-lg shadow-lg" 
            @click="loginX">X - twiter</button>

            <button class="bg-gray-600 px-4 py-1 hover:bg-gray-700 text-white rounded-lg shadow-lg" 
            @click="loginGithub">Github</button>
          
    </div>
  
  
</template>

<style scoped>
    
</style>