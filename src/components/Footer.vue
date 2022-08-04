<template>
  <footer class="footer">
    <div class="footer__about">
      <button type="button" class="button button--about" @focus="showPopover = true"
        @blur="showPopover = false">ABOUT</button>
      <transition name="slideDown" mode="out-in" appear>
        <div class="footer__about__popover" v-if="showPopover">本系統採用<a href="https://v3.vuejs.org/"
            target="_blank">Vue3</a>進行前端開發，隨機抽籤人員資料使用<a href="https://randomuser.me/" target="_blank">Random user
            generator</a>。</div>
      </transition>
    </div>
    <div class="footer__copyright">&copy; 2021<span v-if="thisYear !== 2021"
        v-text="`&nbsp;-&nbsp;${thisYear}`" />&nbsp;Design & Coding by ツキノリュウ.</div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "Footer",
  setup() {
    const showPopover = ref(false);
    const thisYear = computed(() => new Date().getFullYear());

    return { showPopover, thisYear };
  },
});
</script>

<style lang="scss">
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: $footer-height;
  margin-top: $grid-gap;

  @include breakpoint-sm {
    height: calc(#{$footer-height}* 2);
  }

  &__about {
    position: relative;

    &__popover {
      position: absolute;
      left: 0;
      bottom: 120%;
      min-width: 200px;
      padding: 0.75em;
      font-size: $font-size-light;
      background-color: $color-white;
      border-radius: $border-radius;
      border: 1px solid $color-gray-thin;
    }
  }

  &__copyright {
    margin-left: auto;
    padding: 0 $grid-gap;
    line-height: $footer-height;
    color: $color-black;
    font-size: $font-size-thin;
    background-color: $color-white;
    border-radius: $border-radius-round;

    @include breakpoint-sm {
      border-radius: $border-radius;
    }

    @include breakpoint-esm {
      margin: auto auto 0;
      line-height: 2.75;
    }
  }

  a {
    margin: 0 0.25em;
  }
}
</style>