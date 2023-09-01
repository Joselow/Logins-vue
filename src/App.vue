<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <nav>
        <RouterLink :to="{name: 'home'}">Home</RouterLink>
        <RouterLink :to="{name: 'auth'}">Auth</RouterLink>
        <RouterLink :to="{name: 'firebase'}">Firebase</RouterLink>
        <RouterLink :to="{name: 'socials'}">Socials</RouterLink>
        <RouterLink :to="{name: 'aws'}">AWS/ Azure ad</RouterLink>
      </nav>
    </div>
  </header>
  <div>
    <main class="flex justify-center mt-10">
      <RouterView />

    </main>
  </div>
</template>

<style scoped>
main{
  /* background-color: aliceblue; */
  /* text-align: center; */

}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  color: rgb(0, 189, 126);

}


nav a:hover{
  background-color: rgb(179, 234, 71);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
  /* background-color: aqua; */
} 
</style>
