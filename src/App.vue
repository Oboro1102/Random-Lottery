<template>
  <div class="control">
    <div class="control__item">
      <label>抽籤總數<input type="number" name="drawFrequency" v-model="drawAmount" min="2" max="25"
          :disabled="drawData.length > 1" /></label>
      <button type="button" class="button" :disabled="drawData.length > 0"
        @click="setDrawData(drawAmount)">載入資料</button>
    </div>
    <div class="control__item">
      <label>抽獎次數<input type="number" name="drawFrequency" v-model="drawFrequency" min="1" :max="drawData.length"
          :disabled="drawResult.length >= 1 || drawData.length < 1" /></label>
      <button type="button" class="button" :disabled="drawResult.length === drawFrequency || drawData.length < 1"
        @click="drawOnce(drawData, drawFrequency)">抽出得獎者</button>
    </div>
    <button type="button" class="button" :disabled="drawResult.length < 1 && drawData.length < 1"
      @click="restData">重置</button>
  </div>
  <main>
    <Pool :data="drawData">
      <Loading :loading="drawDataLoading" />
    </Pool>
    <Pool :data="drawResult" sectionName="得獎者">
      <Loading :loading="drawResultLoading" />
    </Pool>
  </main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { setRandomParticipant } from "./api/index";
import Pool from "./components/Pool.vue";
import Loading from "./components/Loading.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    Pool,
    Loading,
    Footer,
  },
  setup() {
    const drawData = ref([]);
    const drawDataLoading = ref(false);
    const drawAmount = ref(2);
    const drawFrequency = ref([1]);
    const drawResult = ref([]);
    const drawResultLoading = ref(false);
    const setDrawData = (drawAmount: number) => {
      const cacheData: string | null = sessionStorage.getItem("drawData");
      drawDataLoading.value = true;
      if (
        !cacheData ||
        JSON.parse(sessionStorage.drawData).length !== drawAmount
      ) {
        setRandomParticipant(drawAmount)
          .then((res) => {
            sessionStorage.setItem(
              "drawData",
              JSON.stringify(res.data.results)
            );
          })
          .then(() => {
            drawData.value = JSON.parse(sessionStorage.drawData);
          })
          .then(() => {
            drawDataLoading.value = false;
          })
          .catch((err) => {
            console.warn(err);
          });
      } else {
        drawData.value = JSON.parse(cacheData);
        drawDataLoading.value = false;
      }

      return drawData.value;
    }
    const drawOnce = (data: [], frequency: number) => {
      let drawNumber: number[] = [];
      drawResultLoading.value = true;
      for (let index = 0; index < frequency; index++) {
        let randomIndex: number = Math.floor(Math.random() * data.length);

        if (drawNumber.indexOf(randomIndex) !== -1) {
          index -= 1;
          continue;
        } else {
          drawNumber.push(randomIndex);
          drawResult.value.push(data[randomIndex] as never);
        }
      }

      drawResultLoading.value = false;
      return drawResult.value;
    }
    const restData = () => {
      drawData.value.length = 0;
      drawResult.value.length = 0;

      return drawData.value, drawResult.value;
    }

    return {
      drawData,
      drawDataLoading,
      drawAmount,
      drawResult,
      drawResultLoading,
      drawFrequency,
      setDrawData,
      drawOnce,
      restData,
    };
  },
});
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  padding: $grid-gap;
}

main {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: calc(100% - #{$navbar-height} - #{$footer-height} - #{$grid-gap}* 2);

  @include breakpoint-sm {
    height: calc(100% - #{$navbar-height}* 3 - #{$footer-height}* 2 - #{$grid-gap}* 2);
  }
}

.control {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: $navbar-height;
  margin-bottom: $grid-gap;

  @include breakpoint-sm {
    height: calc(#{$navbar-height}* 3);
  }

  &__item {
    margin-right: $grid-gap;

    &:last-of-type {
      margin-right: auto;
    }

    label {
      margin-right: calc(#{$grid-gap}/ 2);
      margin-bottom: 0;
      font-size: $font-size-light;

      input {
        margin-left: 0.5em;
      }
    }
  }
}
</style>
