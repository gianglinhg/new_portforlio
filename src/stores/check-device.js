import { ref, onMounted, onUnmounted } from 'vue'
import { defineStore } from 'pinia'

// Khai báo hàm checkDevice bên ngoài để có thể dùng trong lifecycle hooks
const checkDevice = (isMobile) => {
  isMobile.value = window.matchMedia('(max-width: 668px)').matches
}

export const useDeviceStore = defineStore('device', () => {
  const isMobile = ref(false)

  // Kiểm tra thiết bị khi mounted và lắng nghe sự thay đổi kích thước màn hình
  onMounted(() => {
    window.addEventListener('resize', () => checkDevice(isMobile))
    checkDevice(isMobile)
  })

  // Hủy lắng nghe sự kiện khi component bị hủy
  onUnmounted(() => {
    window.removeEventListener('resize', () => checkDevice(isMobile))
  })

  // Function để toggle trạng thái mobile (nếu cần thiết)
  function toggleMobile() {
    isMobile.value = !isMobile.value
  }

  return { isMobile, toggleMobile }
})
