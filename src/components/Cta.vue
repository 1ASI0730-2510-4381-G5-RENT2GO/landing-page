<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  carType: '',
  pickupDate: '',
  returnDate: '',
  message: ''
})

const isSubmitted = ref(false)
const isSubmitting = ref(false)

const carTypes = [
  { value: '', label: 'Selecciona un tipo de vehículo' },
  { value: 'Económico', label: 'Económico' },
  { value: 'suv', label: 'SUV' },
  { value: 'Lujo', label: 'Lujo' },
  { value: 'van', label: 'Van' },
]

async function handleSubmit() {
  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1000)) // Simulating API call
  isSubmitting.value = false
  isSubmitted.value = true
}
</script>

<template>
  <section id="contact" class="section relative">
    <!-- Background with overlay -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary-500/90 to-primary-700/80 dark:from-primary-700/90 dark:to-dark-500/95 z-10"></div>
      <img 
        src="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1600" 
        alt="Luxury car on road" 
        class="w-full h-full object-cover"
      />
    </div>
    
    <div class="container relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <!-- Left content -->
        <div class="lg:col-span-2 text-white">
          <h2 class="heading-lg mb-6">¿Listo para explorar Perú con estilo?</h2>
          <p class="text-white/90 mb-8">
            Reserva tu vehículo ahora y disfruta de una experiencia de alquiler sin complicaciones con Rent2Go. Nuestro equipo está listo para ayudarte a encontrar el vehículo perfecto para tu viaje.
          </p>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Ubicación</h3>
                <p class="text-white/80">Av. La Marina 3245, San Miguel<br>Lima, Perú</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Contáctanos</h3>
                <p class="text-white/80">+51 1 234 5678<br>info@rent2go.pe</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Horario de atención</h3>
                <p class="text-white/80">Lunes a Viernes: 8:00 - 20:00<br>Sábado y Domingo: 9:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Contact form -->
        <div class="lg:col-span-3">
          <div class="bg-white dark:bg-dark-400 rounded-2xl shadow-lg p-8">
            <h3 class="heading-md mb-6 text-gray-800 dark:text-white">Reserva tu vehículo</h3>
            
            <div v-if="isSubmitted" class="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 p-4 rounded-xl mb-6">
              <div class="font-semibold mb-1">¡Solicitud enviada con éxito!</div>
              <p>Nos pondremos en contacto contigo a la brevedad para confirmar tu reserva.</p>
            </div>
            
            <form v-else @submit.prevent="handleSubmit" class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre completo</label>
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 dark:border-dark-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-500 text-gray-900 dark:text-white"
                    placeholder="Tu nombre completo"
                  >
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Correo electrónico</label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    required
                    class="w-full px-4 py-2 border border-gray-300 dark:border-dark-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-500 text-gray-900 dark:text-white"
                    placeholder="correo@ejemplo.com"
                  >
                </div>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Teléfono</label>
                  <input
                    id="phone"
                    v-model="formData.phone"
                    type="tel"
                    required
                    class="w-full px-4 py-2 border border-gray-300 dark:border-dark-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-500 text-gray-900 dark:text-white"
                    placeholder="+51 123 456 789"
                  >
                </div>
                <div>
                  <label for="carType" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tipo de vehículo</label>
                  <select
                    id="carType"
                    v-model="formData.carType"
                    required
                    class="w-full px-4 py-2 border border-gray-300 dark:border-dark-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-500 text-gray-900 dark:text-white"
                  >
                    <option v-for="option in carTypes" :key="option.value" :value="option.value">
                      {{ option.label }}
                    </option>
                  </select>
                </div>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="pickupDate" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Fecha de recogida</label>
                  <input
                    id="pickupDate"
                    v-model="formData.pickupDate"
                    type="date"
                    required
                    class="w-full px-4 py-2 border border-gray-300 dark:border-dark-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-500 text-gray-900 dark:text-white"
                  >
                </div>
                <div>
                  <label for="returnDate" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Fecha de devolución</label>
                  <input
                    id="returnDate"
                    v-model="formData.returnDate"
                    type="date"
                    required
                    class="w-full px-4 py-2 border border-gray-300 dark:border-dark-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-500 text-gray-900 dark:text-white"
                  >
                </div>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensaje (opcional)</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="3"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-dark-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-500 text-gray-900 dark:text-white"
                  placeholder="¿Alguna solicitud especial?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                class="w-full btn-primary py-3"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">Enviando...</span>
                <span v-else>Solicitar reserva</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>