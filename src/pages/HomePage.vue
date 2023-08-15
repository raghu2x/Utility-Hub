<template>
  <section>
    <h1>10+ Utils Application for your daily use</h1>

    <ul>
      <li v-for="app in list" class="border hover:shadow-md">
        <h2>{{ app.name }}</h2>
        <h2>{{ app.description }}</h2>
        <router-link :to="app.path">View</router-link>
      </li>
    </ul>
  </section>
</template>
<script setup>
const list = [
  {
    name: 'Simple Calculator',
    description: 'Calculator description here in 100 words',
    path: '/todo',
  },
  {
    name: 'Todo App',
    description: 'Calculator description here in 100 words',
    path: '/todo',
  },
]
</script>
