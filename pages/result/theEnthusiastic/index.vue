<script setup>
import { useRoute } from "vue-router";
const backHomePage = () => {
  router.push("/");
};
</script>

<template>
  <div
    class="flex justify-center items-certer max-w-2xl m-auto custom-height bg-blue-500"
  >
    <div class="grid grid-rows-1 m-auto justify-center w-96">
      <div
        class="grid justify-center grid-rows-4 border-2 w-80 custom-height-grid place-items-center rounded-3xl bg-white"
      >
        <div class="w-60 mt-10">
          <P>The Enthusiastic</P>
          <p></p>
        </div>
        <div></div>
        <div class="grid grid-cols-1 gap-4">
          <img src="/public/result/image13.png" alt="" srcset="" />
        </div>
      </div>
      <div class="mt-16 flex justify-between">
        <nuxt-link to="/">
          <UButton
            color="white"
            class="w-24 h-10 rounded-3xl hover:bg-yellow-400 flex justify-center items-center"
            @click="backHomePage"
            >กลับ</UButton
          >
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-height {
  height: 852px;
}
.custom-height-grid {
  height: 478px;
}
</style>
