<script setup xmlns="http://www.w3.org/1999/html">
import { ref } from 'vue'
// ref:
// import SvgIcon from '@jamescoyle/vue-icon'
// import { mdiCalendarFilterOutline } from '@mdi/js'

components: {
  // SvgIcon
}
</script>

<template>
  <v-btn stacked size="x-large" @click.prevent="getEvent">
    when
    <v-icon
        end
        icon="mdi-cancel"
    ></v-icon>
  </v-btn>
</template>

<style scoped>
</style>
