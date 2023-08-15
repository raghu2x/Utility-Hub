<template>
  <section class="text-white">
    <h1 class="text-2xl font-bold">10+ Utils Application for your daily use</h1>

    <ul
      class="grid text-center mt-10 px-10 grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10"
    >
      <li
        v-for="app in list"
        class="border border-gray-700 hover:border-gray-500 py-2 px-3 rounded hover:shadow-md bg-gray-800"
      >
        <router-link
          :to="app.path"
          class="flex flex-col items-center justify-center"
        >
          <i class="fa-2xl" :class="app.icon"></i>
          <p class="text-xs mt-3">{{ app.name }}</p>
        </router-link>
      </li>
    </ul>
  </section>
</template>
<script setup>
const list = [
  {
    name: 'Simple Calculator',
    icon: 'fa-solid fa-calculator',
    path: '/simple-calculator',
  },
  {
    name: 'Emi Calculator',
    icon: 'fa-solid fa-landmark',
    path: '/emi-calculator',
  },
]
</script>
