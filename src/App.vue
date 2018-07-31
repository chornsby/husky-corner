<template>
  <div id="app">
    <Navbar/>
    <ConvertFileView/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import ConvertFileView from "./views/ConvertFileView";

export default {
  components: {
    ConvertFileView,
    Navbar
  }
};
</script>
