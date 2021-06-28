<template>
  <div class="loading" v-if="loading">
    <i class="gg-loadbar-alt"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loading",
  props: {
    loading: {
      type: Boolean,
    },
  },
});
</script>

<style lang="scss">
.loading {
  position: absolute;
  top: 0;
  left: 0;
  z-index: $layer-lv1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: $color-gray;
  background-color: $color-white;
  border-radius: $border-radius;
  transition: $transition-fast;

  i {
    transform: scale(var(--ggs, 2));
  }
}
</style>
