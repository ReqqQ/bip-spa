<template>
  <div class="mt-3 d-flex d-flex-xs-column justify-content-between align-items-center">
    <div class="flex-grow-1" v-if="isReadMore">
      <button class="btn btn-danger ls-border-radius">Czytaj więcej</button>
    </div>
    <div class="flex-grow-1 d-flex flex-wrap justify-content-evenly justify-content-xs-center mt-2 mt-0">
      <small v-for="(statIcon,statIndex) in statsIcons" :key="statIndex" class="text-muted mx-2">
        <i :class="statIcon.icon"></i> {{statIcon.iconValue ? statIcon.iconValue : createdAt}}
      </small>
    </div>
  </div>
</template>

<script lang="ts">
import  STATS_CONST  from "~/plugins/consts/stats-icon";

export default {
  name: "information",
  props: {
    createdAt: String,
    isReadMore: {
      type : Boolean,
      default: false
    }
  },
  data: () => ({
    statsIcons: STATS_CONST
  })
}
</script>

<style scoped>
@media (min-width: 0px) and (max-width: 375px) {
  .d-flex-xs-column{
    flex-direction: column;
  }
  .justify-content-xs-center{
    justify-content: center !important;
  }
}
</style>