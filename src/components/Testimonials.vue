<script setup lang="ts">
const testimonials = [
  {
    name: "Carlos Mendoza",
    location: "Lima",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Excelente servicio. El proceso de alquiler fue muy sencillo y el vehículo estaba en perfectas condiciones. Lo recomiendo totalmente."
  },
  {
    name: "María Fernández",
    location: "Arequipa",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "La atención fue impecable. El personal fue muy amable y respondió todas mis dudas. El coche estaba muy limpio y funcionaba perfectamente."
  },
  {
    name: "Juan García",
    location: "Cusco",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    rating: 4,
    text: "Muy buena experiencia. El SUV que alquilé era justo lo que necesitaba para recorrer el Valle Sagrado. La recogida y devolución fueron rápidas."
  },
  {
    name: "Ana López",
    location: "Trujillo",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "Increíble servicio al cliente y vehículos de primera calidad. Definitivamente volveré a alquilar con Rent2Go en mi próximo viaje."
  }
]
</script>

<template>
  <section class="section bg-gray-50 dark:bg-dark-600">
    <div class="container">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="heading-lg mb-4">Lo que dicen nuestros clientes</h2>
        <p class="text-gray-600 dark:text-gray-300">Nos enorgullece brindar un servicio excepcional. Estas son algunas experiencias de nuestros clientes.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="testimonial in testimonials" 
          :key="testimonial.name"
          class="card hover:shadow-xl transition-all duration-300"
        >
          <div class="flex items-center mb-4">
            <img 
              :src="testimonial.avatar" 
              :alt="testimonial.name"
              class="w-14 h-14 rounded-full mr-4 object-cover"
            />
            <div>
              <h4 class="font-semibold text-lg">{{ testimonial.name }}</h4>
              <p class="text-gray-500 dark:text-gray-400">{{ testimonial.location }}</p>
            </div>
          </div>
          
          <div class="flex mb-4">
            <template v-for="i in 5" :key="i">
              <svg 
                class="w-5 h-5" 
                :class="i <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </template>
          </div>
          
          <p class="text-gray-600 dark:text-gray-300">{{ testimonial.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>