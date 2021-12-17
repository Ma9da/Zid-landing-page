<template>
  <div id="app">
    <Navbar />
    <Hero-section/>
    <Visuals/>
    <Services/>
    <Specials/>
    <Footer/>
    <HelloWorld />

  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import HelloWorld from "./components/HelloWorld.vue";
import HeroSection from './components/Hero-section.vue';
import Navbar from "./components/Navbar.vue";
import Services from './components/Services.vue';
import Specials from './components/Specials.vue';
import Visuals from "./components/Visuals.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Navbar,
    HeroSection,
    Visuals,
    Services,
    Specials,
    Footer,
  
  },
};
</script>

<style>

</style>
