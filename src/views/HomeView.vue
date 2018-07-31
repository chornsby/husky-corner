<template>
  <section class="hero is-info is-bold">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <h1 class="title">Welcome to Husky Corner</h1>
            <h2 class="subtitle">
              This good boy will help you with what you need to do.
            </h2>
          </div>
          <div class="column">
            <img :src="husky" style="max-height: 50%"/>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import husky from "@/assets/img/husky-frontpage.png";

export default {
  data: function() {
    return {
      husky
    };
  }
};
</script>
