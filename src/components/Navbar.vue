<template>
  <nav class="navbar" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img :src="favicon" alt="Husky Corner"/>
      </a>
      <div class="navbar-item">Husky Corner</div>
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
