<template>
  <div class="pool">
    <slot />
    <h6 class="pool__title" v-text="sectionName" />
    <div v-if="data.length < 1">無結果</div>
    <transition-group class="pool__list" tag="ul" name="fade" mode="out-in" appear v-else>
      <li class="pool__list__item" v-for="item in data" :key="item.login.uuid">
        <div class="pool__list__item__cover">
          <img :src="item.picture.medium" :alt="`${item.name.first} ${item.name.last}`" width="72" height="72" />
        </div>
        <div class="pool__list__item__info">
          <p v-text="`${item.name.first} ${item.name.last}`" />
          <p v-text="item.phone" />
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pool",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    sectionName: {
      type: String,
      default: '抽籤池'
    },
  },
});
</script>

<style lang="scss">
.pool {
  position: relative;
  width: calc(calc(100% - #{$grid-gap}) / 2);
  height: 100%;
  padding: $grid-gap;
  margin-left: $grid-gap;
  background-color: $color-white;
  border-radius: $border-radius;

  &:first-child {
    margin-left: 0;
  }

  &__title {
    margin: 0 0 $grid-gap;
  }

  &__list {
    @include list-style;
    max-height: calc(100% - 24px - #{$grid-gap});
    overflow-y: auto;

    &__item {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-top: $grid-gap;

      &:first-child {
        margin-top: 0;
      }

      &__cover {
        border-radius: $border-radius-round;
        overflow: hidden;
        margin-right: $grid-gap;
      }

      &__info {
        p {
          margin: 0;
        }
      }
    }
  }
}
</style>