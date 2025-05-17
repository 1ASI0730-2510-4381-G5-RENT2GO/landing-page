<script setup lang="ts">
import { ref, watch } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import ThemeToggle from './ThemeToggle.vue'

defineProps({
  colorMode: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['toggle-theme'])

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const { y } = useWindowScroll()

watch(y, (value) => {
  isScrolled.value = value > 50
})

const navLinks = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Vehículos', href: '#fleet' },
  { name: '¿Cómo funciona?', href: '#how-it-works' },
  { name: 'Requisitos', href: '#requirements' },
  { name: 'Preguntas', href: '#faq' },
  { name: 'Contacto', href: '#contact' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header 
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="[isScrolled ? 'bg-white dark:bg-dark-500 shadow-md' : 'bg-transparent']"
  >
    <div class="container py-4 flex items-center justify-between">
      <a href="#" class="flex items-center">
        <span class="text-primary-500 font-bold text-2xl">AutoElite</span>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center space-x-8">
        <ul class="flex items-center space-x-8">
          <li v-for="link in navLinks" :key="link.name">
            <a 
              :href="link.href" 
              class="text-dark-500 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
        <ThemeToggle :mode="colorMode" @toggle="emit('toggle-theme')" />
        <div class="flex items-center space-x-4">
          <a href="https://rent2go.netlify.app/" class="btn-outline">Iniciar sesión</a>
          <a href="#contact" class="btn-primary">Reservar ahora</a>
        </div>
      </nav>

      <!-- Mobile menu toggle -->
      <div class="flex items-center md:hidden space-x-4">
        <ThemeToggle :mode="colorMode" @toggle="emit('toggle-theme')" />
        <button @click="toggleMenu" class="text-dark-500 dark:text-white" aria-label="Toggle menu">
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile nav -->
    <div 
      v-if="isMenuOpen" 
      class="md:hidden absolute top-full left-0 w-full bg-white dark:bg-dark-500 shadow-lg transition-all duration-300 z-50"
    >
      <nav class="container py-4">
        <ul class="space-y-4">
          <li v-for="link in navLinks" :key="link.name">
            <a 
              :href="link.href" 
              @click="closeMenu"
              class="block py-2 text-dark-500 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
        <div class="flex flex-col space-y-2 mt-4">
          <a href="https://rent2go.netlify.app/" class="btn-outline w-full flex justify-center">Iniciar sesión</a>
          <a href="#contact" @click="closeMenu" class="btn-primary w-full flex justify-center">Reservar ahora</a>
        </div>
      </nav>
    </div>
  </header>
</template>
