<script setup>
  import { RouterLink } from 'vue-router';
  import { useUserStore } from '../stores/user';

  const userStore = useUserStore();
</script>

<template>
  <div>
    Profile from stores
    <div>
        <div>Firstname : {{ userStore.firstname }}</div>
        <div>Lastname : {{ userStore.lastname }}</div>
        <div>Fullname : {{ userStore.fullname }}</div>
    </div>


    <RouterLink :to="{ name:'profile', query: {user_id: 1 }}">
      <button> Go profile </button>
    </RouterLink>

    <!-- <RouterLink :to="{ name:'profile-edit', params: { id: 1 }}">
      <button> profile </button>
    </RouterLink> -->
  </div>
</template>
