<template>
  <nav class="navbar" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img :src="favicon" alt="Husky Corner"/>
      </router-link>
      <router-link class="navbar-item" to="/">
        Husky Corner
      </router-link>
      <router-link class="navbar-item" to="/convert">
        Convert to Excel
      </router-link>
    </div>
  </nav>
</template>

<script>
import favicon from "../assets/img/favicon.png";

export default {
  data: function() {
    return {
      favicon
    };
  }
};
</script>
