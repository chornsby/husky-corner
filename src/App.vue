<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default {
  components: {
    Footer,
    Navbar
  }
};
</script>
