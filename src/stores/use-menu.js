import { defineStore } from 'pinia'

export const useMenu = defineStore('menu', {
  state: () => ({
    isShowMenu: true // Trạng thái ban đầu của menu
  }),
  actions: {
    toggleMenu() {
      this.isShowMenu = !this.isShowMenu
    },
    showMenu() {
      this.isShowMenu = true
    },
    hideMenu() {
      this.isShowMenu = false
    }
  }
})
