<script setup lang="ts">
import { ref, computed } from 'vue'

const activeCategory = ref('all')

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'Económico', name: 'Económicos' },
  { id: 'suv', name: 'SUVs' },
  { id: 'Lujo', name: 'Lujo' },
  { id: 'vans', name: 'Vans' },
]

const vehicles = [
  {
    id: 1,
    name: 'Toyota Yaris',
    category: 'Económico',
    image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 35,
    features: ['5 pasajeros', 'A/C', 'Manual', '4 maletas'],
  },
  {
    id: 2,
    name: 'Kia Sportage',
    category: 'suv',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 55,
    features: ['5 pasajeros', 'A/C', 'Automático', '5 maletas'],
  },
  {
    id: 3,
    name: 'BMW Serie 3',
    category: 'Lujo',
    image: 'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 95,
    features: ['5 pasajeros', 'A/C', 'Automático', '3 maletas'],
  },
  {
    id: 4,
    name: 'Hyundai H1',
    category: 'vans',
    image: 'https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 75,
    features: ['12 pasajeros', 'A/C', 'Manual', '10 maletas'],
  },
  {
    id: 5,
    name: 'Suzuki Swift',
    category: 'Económico',
    image: 'https://images.pexels.com/photos/1592261/pexels-photo-1592261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 32,
    features: ['5 pasajeros', 'A/C', 'Manual', '3 maletas'],
  },
  {
    id: 6,
    name: 'Toyota RAV4',
    category: 'suv',
    image: 'https://images.pexels.com/photos/13001670/pexels-photo-13001670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 60,
    features: ['5 pasajeros', 'A/C', 'Automático', '5 maletas'],
  },
]

const filteredVehicles = computed(() => {
  if (activeCategory.value === 'all') {
    return vehicles
  }
  return vehicles.filter(vehicle => vehicle.category === activeCategory.value)
})

function setActiveCategory(categoryId: string) {
  activeCategory.value = categoryId
}
</script>

<template>
  <section id="fleet" class="section">
    <div class="container">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="heading-lg mb-4">Nuestra Flota</h2>
        <p class="text-gray-600 dark:text-gray-300">Explora nuestra amplia selección de vehículos y encuentra el que mejor se adapte a tus necesidades.</p>
      </div>
      
      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-2 mb-12">
        <button 
          v-for="category in categories" 
          :key="category.id"
          @click="setActiveCategory(category.id)"
          class="px-5 py-2 rounded-xl transition-all duration-300"
          :class="[
            activeCategory === category.id 
              ? 'bg-primary-500 text-white' 
              : 'bg-gray-100 dark:bg-dark-400 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-300'
          ]"
        >
          {{ category.name }}
        </button>
      </div>
      
      <!-- Vehicles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="vehicle in filteredVehicles" 
          :key="vehicle.id"
          class="card overflow-hidden group"
        >
          <div class="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
            <img 
              :src="vehicle.image" 
              :alt="vehicle.name" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-xl">
              {{ vehicle.category.charAt(0).toUpperCase() + vehicle.category.slice(1) }}
            </div>
          </div>
          
          <h3 class="heading-sm mb-2">{{ vehicle.name }}</h3>
          
          <div class="flex flex-wrap gap-2 mb-4">
            <span 
              v-for="(feature, i) in vehicle.features" 
              :key="i"
              class="text-sm bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg"
            >
              {{ feature }}
            </span>
          </div>
          
          <div class="flex items-center justify-between mt-auto">
            <div class="text-primary-500 font-bold">
              <span class="text-2xl">${{ vehicle.price }}</span> <span class="text-sm">/día</span>
            </div>
            <a href="#contact" class="btn-primary">Reservar</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>