<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div>
    Page:
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/Profile" stype="margin-left:50px">Profile</RouterLink>
    <RouterView />
  </div>
</template>