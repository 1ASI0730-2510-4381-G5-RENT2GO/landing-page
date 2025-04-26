<script setup lang="ts">
const features = [
  {
    title: "Flota Premium",
    description: "Vehículos modernos y bien mantenidos para garantizar tu seguridad y confort.",
    icon: "M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Reservas Flexibles",
    description: "Modifica o cancela tu reserva sin complicaciones hasta 48 horas antes.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Proceso Sencillo",
    description: "Reserva en línea o por teléfono y recoge tu vehículo en minutos.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    title: "Servicio 24/7",
    description: "Asistencia en carretera y soporte al cliente disponible las 24 horas.",
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Tarifas Transparentes",
    description: "Sin cargos ocultos. Nuestros precios incluyen seguro básico y kilometraje ilimitado.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Limpieza Garantizada",
    description: "Todos nuestros vehículos pasan por un riguroso proceso de limpieza y desinfección.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
]
</script>

<template>
  <section class="section bg-gray-50 dark:bg-dark-600">
    <div class="container">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="heading-lg mb-4">¿Por qué elegir Rent2Go?</h2>
        <p class="text-gray-600 dark:text-gray-300">Nuestra misión es brindar la mejor experiencia de alquiler de vehículos en Perú, con un servicio de alta calidad y atención personalizada.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="card hover:shadow-xl hover:-translate-y-1"
        >
          <div class="flex items-start">
            <div class="shrink-0 mr-4">
              <div class="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-500">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    :d="feature.icon" 
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 class="heading-sm mb-2">{{ feature.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>