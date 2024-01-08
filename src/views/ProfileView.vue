<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div>
        Profile Vue
        <div>
            First Name <input type="text">
        </div>
        <div>
            Last Name <input type="text">
        </div>        
    </div>
    <div>
        <RouterLink :to="{ name: 'home'}"> 
            <button> back to home </button>
        </RouterLink>
    </div>
</template>