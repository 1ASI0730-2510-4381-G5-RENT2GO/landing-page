<script setup lang="ts">
</script>

<template>
  <section id="hero" class="relative pt-24 lg:min-h-screen flex items-center">
    <div class="absolute inset-0 z-0">
      <img 
        src="https://norisk.mx/wp-content/uploads/2021/07/vehiculo-deportivo-blindado-1080x675.jpeg" 
        alt="Luxury car on road" 
        class="w-full h-full object-cover"
      />
    </div>
    
    <div class="container relative z-10 py-20 md:py-32">
      <div class="max-w-2xl text-white">
        <h1 class="heading-xl mb-6">
          Explora Perú con libertad y estilo
        </h1>
        <p class="text-lg md:text-xl mb-8 text-white/90">
          Rent2Go te ofrece la mejor flota de vehículos en Perú. Vehículos modernos, limpios y seguros para que disfrutes de tu viaje con tranquilidad.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="#fleet" class="btn-primary">
            Explorar vehículos
          </a>
          <a href="#how-it-works" class="btn bg-white text-primary-500 hover:bg-gray-100">
            ¿Cómo funciona?
          </a>
        </div>
        
        <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="font-bold text-2xl">100+</div>
            <div class="text-white/90">Vehículos</div>
          </div>
          <div class="text-center">
            <div class="font-bold text-2xl">5000+</div>
            <div class="text-white/90">Clientes satisfechos</div>
          </div>
          <div class="text-center">
            <div class="font-bold text-2xl">12</div>
            <div class="text-white/90">Ciudades</div>
          </div>
          <div class="text-center">
            <div class="font-bold text-2xl">24/7</div>
            <div class="text-white/90">Soporte</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>