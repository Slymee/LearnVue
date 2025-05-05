<template>
    <section id="home" class="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div class="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,hsl(var(--primary)/0.2)_0%,rgba(255,255,255,0)_100%)]"></div>
  
      <div class="section-container flex flex-col md:flex-row items-center">
        <div class="flex-1 animate-fade-in">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span class="block">Hi, I'm</span>
            <span class="text-primary block mt-2">John Doe</span>
          </h1>
  
          <h2 class="mt-6 text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground">
            Full-stack Developer & UI/UX Designer
          </h2>
  
          <p class="mt-8 max-w-lg text-lg text-muted-foreground">
            I create beautiful, functional websites and applications with modern technologies.
            Let's turn your ideas into reality.
          </p>
  
          <div class="mt-10 flex flex-col sm:flex-row gap-4">
            <ButtonComponent size="lg" class="btn-primary" asChild>
              <a href="#projects">
                View Projects
                <!--  <ArrowRight class="ml-2 h-4 w-4" /> -->
              </a>
            </ButtonComponent>
            <ButtonComponent size="lg" variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </ButtonComponent>
          </div>
        </div>
  
        <div class="flex-1 mt-12 md:mt-0 md:ml-12 flex justify-center md:justify-end">
          <div class="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center p-2 animate-fade-in" :style="{ animationDelay: '0.3s' }">
            <div class="w-full h-full bg-background rounded-full overflow-hidden border-2 border-primary/20">
              <img
                src=""
                alt="John Doe"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import ButtonComponent from '@/components/ButtonComponent.vue'; // Adjust the import path as necessary
//   import ArrowRight from './ArrowRight.vue'; // Adjust the import path as necessary
  
  export default {
    components: {
      ButtonComponent,
    //   ArrowRight,
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here if needed */
  </style>