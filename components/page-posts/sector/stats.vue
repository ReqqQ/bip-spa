<template>
  <div class="mt-3 d-flex justify-content-between align-items-center">
    <div class="flex-grow-1">
      <button class="btn btn-danger ls-border-radius">Czytaj więcej</button>
    </div>
    <div class="flex-grow-1 d-flex justify-content-evenly">
      <small v-for="(statIcon,statIndex) in statsIcons" :key="statIndex" class="text-muted ">
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

</style>