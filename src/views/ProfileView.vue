<script setup>
import { ref, onMounted, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import {useUserStore } from '../stores/user'

const router = useRouter();
const userStore = useUserStore();

const isUpdated = ref(false);
const firstname = ref('');
const lastname = ref('');

onMounted(() => {
    // console.log(route.params);
    // console.log(route.query)
    // console.log(userStore.firstname);
    // console.log(userStore.lastname);
    firstname.value = userStore.firstname;
    lastname.value = userStore.lastname;
})

watch([firstname, lastname], (newData) => {
    if (newData[0] !== userStore.firstname || newData[1] !== userStore.lastname) {
        isUpdated.value = false;
    }
})

const backToHome = () => {
// do somthing
    router.push({ name: 'home' })
}

const updateProfile = () => {
    // console.log(firstname.value);
    // console.log(lastname.value);
    const formData = {
        firstname: firstname.value,
        lastname: lastname.value
    }
    isUpdated.value = true;
    userStore.changeName(formData);
}

</script>

<template>
    <div>
        profile from stores
        <div v-if="isUpdated" style="color:blue;"> 
            Profile Up to Date
        </div>
        <div>
            <div>Firstname : {{ userStore.firstname }}</div>
            <div>Lastname : {{ userStore.lastname }}</div>
            <div>Fullname : {{ userStore.fullname }}</div>
        </div>
    </div>
    <div>
        Profile Vue
        <div>
            First Name <input type="text" v-model="firstname">
        </div>
        <div>
            Last Name <input type="text" v-model="lastname">
        </div>   
        <button @click="updateProfile()">Update Profile</button>     
    </div>
    <div>
        <RouterLink :to="{ name: 'home'}"> 
            <button> back to home </button>
        </RouterLink>
        <button @click="backToHome"> หรือ home </button>
    </div>
</template>