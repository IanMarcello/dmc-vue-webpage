import { defineStore } from 'pinia'

export const useToggleStore = defineStore('toggle', {
  state: () => ({
    openList: true
  }),
  actions: {
    toggleList() {
      this.openList = !this.openList
    }
  }
})
