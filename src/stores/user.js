import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    firstname: '1',
    lastname: '2'
  }),
  getters: {
    fullname ( state ) {
      return `${state.firstname} ${state.lastname}`
    }
  },
  actions: {
    changeName ( formData ) {
      this.firstname = formData.firstname
      this.lastname = formData.lastname
    }
  }
})
