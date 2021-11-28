<template>
  <div class="mt-2 d-flex justify-content-evenly align-items-end">
    <button v-if="isReadMore" class="btn btn-danger ls-border-radius">Czytaj więcej</button>
    <small v-for="(statIcon,statIndex) in statsIcons" :key="statIndex" class="text-muted ">
      <i :class="statIcon.icon"></i> {{statIcon.iconValue ? statIcon.iconValue : createdAt}}
    </small>
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