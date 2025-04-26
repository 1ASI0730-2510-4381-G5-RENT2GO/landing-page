<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import FleetSection from './components/FleetSection.vue'
import HowItWorks from './components/HowItWorks.vue'
import Requirements from './components/Requirements.vue'
import Testimonials from './components/Testimonials.vue'
import Faq from './components/Faq.vue'
import Cta from './components/Cta.vue'
import Footer from './components/Footer.vue'

const colorMode = ref('light')

function toggleColorMode() {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
  document.documentElement.classList.toggle('dark', colorMode.value === 'dark')
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header :colorMode="colorMode" @toggle-theme="toggleColorMode" />
    <main>
      <Hero />
      <Features />
      <FleetSection />
      <HowItWorks />
      <Requirements />
      <Testimonials />
      <Faq />
      <Cta />
    </main>
    <Footer />
  </div>
</template>