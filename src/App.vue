<template>
  <div id="app">
    <Navbar/>
    <ConvertFilePage/>
  </div>
</template>

<script>
import ConvertFilePage from "./components/ConvertFilePage";
import Navbar from "./components/Navbar";

export default {
  components: {
    ConvertFilePage,
    Navbar
  }
};
</script>
