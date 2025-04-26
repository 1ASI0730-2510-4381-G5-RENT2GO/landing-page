<script setup lang="ts">
const requirementsCategories = [
  {
    title: "Requisitos para conductores",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    items: [
      "Edad mínima de 23 años para vehículos estándar",
      "25 años para vehículos de lujo y SUVs",
      "Licencia de conducir válida con al menos 2 años de antigüedad",
      "Para extranjeros: Licencia internacional o licencia del país de origen",
      "Documento de identidad (DNI o pasaporte)"
    ]
  },
  {
    title: "Requisitos financieros",
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
    items: [
      "Tarjeta de crédito a nombre del conductor principal",
      "Depósito de seguridad (varía según el vehículo)",
      "El depósito se reembolsa al devolver el vehículo sin daños",
      "Pago anticipado del alquiler completo",
      "Verificación de fondos disponibles en la tarjeta"
    ]
  },
  {
    title: "Documentos adicionales",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    items: [
      "Comprobante de hospedaje en Perú (para turistas)",
      "Información de contacto de emergencia",
      "Itinerario de viaje para alquileres de larga duración",
      "Información de vuelo para recogidas en aeropuerto",
      "Póliza de seguro personal (opcional)"
    ]
  }
]

const securityMeasures = [
  {
    title: "Verificación de identidad",
    description: "Validamos minuciosamente todos los documentos para garantizar la autenticidad de la identidad del conductor."
  },
  {
    title: "Seguimiento GPS",
    description: "Nuestros vehículos cuentan con sistemas de seguimiento GPS para garantizar su seguridad y prevenir robos."
  },
  {
    title: "Seguros completos",
    description: "Ofrecemos diferentes opciones de cobertura para proteger tanto al cliente como al vehículo durante el alquiler."
  },
  {
    title: "Inspección detallada",
    description: "Realizamos una inspección exhaustiva antes y después de cada alquiler para documentar el estado del vehículo."
  }
]
</script>

<template>
  <section id="requirements" class="section">
    <div class="container">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="heading-lg mb-4">Requisitos y seguridad</h2>
        <p class="text-gray-600 dark:text-gray-300">En Rent2Go priorizamos la seguridad de nuestros clientes y vehículos. Conoce los requisitos necesarios para alquilar con nosotros.</p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="(category, index) in requirementsCategories" 
          :key="index"
          class="card hover:shadow-xl transition-all duration-300"
        >
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-500 mr-4">
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
                  :d="category.icon" 
                />
              </svg>
            </div>
            <h3 class="heading-sm">{{ category.title }}</h3>
          </div>
          
          <ul class="space-y-3 text-gray-600 dark:text-gray-300">
            <li 
              v-for="(item, i) in category.items" 
              :key="i"
              class="flex items-start"
            >
              <svg class="h-5 w-5 text-primary-500 mr-2 mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-8 md:p-12">
        <h3 class="heading-md text-center mb-10">Medidas de seguridad</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(measure, index) in securityMeasures" 
            :key="index"
            class="bg-white dark:bg-dark-400 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h4 class="text-lg font-semibold mb-3 text-primary-500">{{ measure.title }}</h4>
            <p class="text-gray-600 dark:text-gray-300">{{ measure.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>