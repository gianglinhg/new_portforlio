<template>
  <div class="w-full h-full p-10 bg-yellow-ce">
    <div class="w-1/2 mx-auto">
      <div class="my-5">
        <div class="flex items-center justify-center gap-1 mb-7">
          <span class="block w-4 h-4 bg-blue-ff"></span>
          <h4 class="text-2xl font-semibold md:text-3xl">Let's talk</h4>
        </div>
      </div>
      <div>
        <form @submit.prevent="sendMail()">
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900"
                >First name</label
              >
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:none focus:border-none block w-full p-2.5 focus:outline-none"
                placeholder="Enter first name"
                required
                v-model="form.first_name"
              />
            </div>
            <div>
              <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900"
                >Last name</label
              >
              <input
                type="text"
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
                placeholder="Enter last name"
                required
                v-model="form.last_name"
              />
            </div>
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
              >Email address</label
            >
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
              placeholder="name@email.com"
              required
              v-model="form.email"
            />
          </div>
          <div class="mb-6">
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900"
              >Phone number</label
            >
            <input
              type="text"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
              placeholder="Enter your phone"
              required
              v-model="form.phone"
            />
          </div>
          <div class="mb-6">
            <label for="subject" class="block mb-2 text-sm font-medium text-gray-900"
              >Subject</label
            >
            <input
              type="Subject"
              id="subject"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
              placeholder="Enter subject"
              required
              v-model="form.subject"
            />
          </div>
          <div class="mb-6">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900"
              >Message</label
            >
            <textarea
              id="message"
              rows="5"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
              required
              placeholder="Enter your message"
              v-model="form.message"
            ></textarea>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-ff border-2 hover:border-blue-ff hover:bg-transparent hover:text-black font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center transition-all"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { Email } from '../../static/smtp/smtp.js'
import Swal from 'sweetalert2'
const form = ref([])

const sendMail = () => {
  let ebody = `
    <b>Name: </b> ${form.value.first_name}&nbsp;${form.value.last_name}
    <br>
    <b>Email: </b>${form.value.email}
    <br>
    <b>Phone: </b>${form.value.phone}
    <br>
    <b>Suject: </b>${form.value.subject}
    <br>
    <b>Message: </b>${form.value.message}
    <br>
  `
  Email.send({
    SecureToken: 'de1b4315-729f-49c3-ab0c-730a69eb052d',
    To: 'linhbq89@gmail.com',
    From: 'linhbq89@gmail.com',
    Subject: form.value.subject + '(linhgv.name.vn)',
    Body: ebody
  }).then((message) => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer
        toast.onmouseleave = Swal.resumeTimer
      }
    })
    if (message === 'OK') {
      Toast.fire({
        icon: 'success',
        title: 'Send email successfully'
      })
      form.value = []
    } else {
      Toast.fire({
        icon: 'error',
        title: 'An error occurred.'
      })
    }
  })
}
</script>
