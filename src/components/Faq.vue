<script setup lang="ts">
import { ref } from 'vue'

const faqs = ref([
  {
    question: "¿Cuál es la edad mínima para alquilar un vehículo?",
    answer: "La edad mínima para alquilar un vehículo estándar es de 23 años. Para vehículos de lujo y SUVs se requiere una edad mínima de 25 años. Además, se necesita una licencia de conducir con al menos 2 años de antigüedad.",
    isOpen: false
  },
  {
    question: "¿Qué documentos necesito para alquilar un vehículo?",
    answer: "Necesitarás una licencia de conducir válida, un documento de identidad (DNI o pasaporte) y una tarjeta de crédito a tu nombre para el depósito de seguridad. Si eres extranjero, también puedes presentar una licencia internacional o la licencia de tu país de origen.",
    isOpen: false
  },
  {
    question: "¿Cuáles son las políticas de combustible?",
    answer: "Entregamos los vehículos con el tanque lleno y esperamos que se devuelvan de la misma manera. Si el vehículo no se devuelve con el tanque lleno, se cobrará el combustible faltante más un cargo por servicio.",
    isOpen: false
  },
  {
    question: "¿Qué incluye el precio del alquiler?",
    answer: "El precio base incluye el alquiler del vehículo, seguro básico, kilometraje ilimitado y asistencia en carretera 24/7. No incluye combustible, peajes, multas, o servicios adicionales como GPS, sillas para niños o conductores adicionales.",
    isOpen: false
  },
  {
    question: "¿Puedo modificar o cancelar mi reserva?",
    answer: "Sí, puedes modificar o cancelar tu reserva hasta 48 horas antes de la fecha de recogida sin penalización. Para cancelaciones con menos de 48 horas de antelación, se aplicará un cargo del 50% del valor del alquiler.",
    isOpen: false
  },
  {
    question: "¿Qué sucede si tengo un accidente o el vehículo sufre daños?",
    answer: "En caso de accidente, debes notificarnos inmediatamente y presentar un informe policial. El seguro básico cubre daños por colisión con un deducible que varía según el vehículo. Ofrecemos opciones de seguros adicionales para reducir o eliminar el deducible.",
    isOpen: false
  }
])

function toggleFaq(index: number) {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>

<template>
  <section id="faq" class="section">
    <div class="container">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="heading-lg mb-4">Preguntas frecuentes</h2>
        <p class="text-gray-600 dark:text-gray-300">Encuentra respuestas a las preguntas más comunes sobre nuestro servicio de alquiler de vehículos.</p>
      </div>
      
      <div class="max-w-3xl mx-auto">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="mb-4 overflow-hidden rounded-xl border border-gray-200 dark:border-dark-300"
        >
          <button
            @click="toggleFaq(index)"
            class="flex w-full items-center justify-between bg-white dark:bg-dark-400 p-5 text-left transition-all"
          >
            <span class="font-semibold text-lg">{{ faq.question }}</span>
            <svg
              class="h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform duration-300"
              :class="{ 'rotate-180': faq.isOpen }"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div
            v-show="faq.isOpen"
            class="bg-gray-50 dark:bg-dark-500 px-5 py-4 text-gray-600 dark:text-gray-300"
          >
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>