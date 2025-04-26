<script setup lang="ts">
const steps = [
  {
    number: 1,
    title: "Elige tu vehículo",
    description: "Explora nuestra flota y selecciona el vehículo que mejor se adapte a tus necesidades y presupuesto.",
  },
  {
    number: 2,
    title: "Reserva en línea",
    description: "Completa el formulario de reserva con tus datos y fechas de alquiler. Recibe confirmación inmediata.",
  },
  {
    number: 3,
    title: "Prepara los documentos",
    description: "Ten listos tu licencia de conducir, identificación y tarjeta de crédito para el día de recogida.",
  },
  {
    number: 4,
    title: "Recoge el vehículo",
    description: "Visita nuestra oficina en la fecha acordada. Realizaremos una breve inspección y firmarás el contrato.",
  },
  {
    number: 5,
    title: "Disfruta tu viaje",
    description: "Explora Perú con libertad. Nuestro equipo de asistencia está disponible 24/7 si necesitas ayuda.",
  },
  {
    number: 6,
    title: "Devuelve el vehículo",
    description: "Regresa el vehículo en la fecha y ubicación acordadas con el tanque de combustible lleno.",
  },
]
</script>

<template>
  <section id="how-it-works" class="section bg-gray-50 dark:bg-dark-600">
    <div class="container">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="heading-lg mb-4">¿Cómo funciona?</h2>
        <p class="text-gray-600 dark:text-gray-300">Alquilar con Rent2Go es rápido y sencillo. Sigue estos simples pasos para tener el vehículo perfecto para tu viaje.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="step in steps" 
          :key="step.number"
          class="card relative hover:shadow-xl transition-all duration-300"
        >
          <div class="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
            {{ step.number }}
          </div>
          <div class="pt-2">
            <h3 class="heading-sm mb-3">{{ step.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>