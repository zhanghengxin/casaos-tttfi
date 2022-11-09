<script setup xmlns="http://www.w3.org/1999/html">
import {ref} from 'vue'

const eventModule = ref(false)
const actionModule = ref(false)

function submit() {
  console.log('submit')
}
</script>

<template>
  <v-row align="start" align-content="center" justify="center">
    <v-btn stacked size="x-large" @click.prevent="eventModule = true" prepend-icon="mdi-vuetify"
           class="pa-2 ma-2">
      when
    </v-btn>
    <v-btn stacked size="x-large" @click.prevent="actionModule = true" prepend-icon="mdi-vuetify"
           class="pa-2 ma-2">
      action
    </v-btn>
  </v-row>
  <br>
  <v-row align="start" align-content="center" justify="center">
    <v-btn stacked size="x-large" @click.prevent="submit" prepend-icon="mdi-vuetify">
      submit
    </v-btn>
  </v-row>
  <v-dialog
      v-model="eventModule"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar
          dark
          color="primary"
      >
        <v-btn
            icon
            dark
            @click="eventModule = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>event list</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
              variant="text"
              @click="eventModule = false"
          >
            Save
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list
          lines="two"
          subheader
      >
        <v-subheader>General</v-subheader>
        <v-list-item title="Notifications" subtitle="Notify me about updates to apps or games that I downloaded">
          <template v-slot:prepend>
            <v-checkbox v-model="notifications"></v-checkbox>
          </template>
        </v-list-item>
        <v-list-item title="Sound" subtitle="Auto-update apps at any time. Data charges may apply">
          <template v-slot:prepend>
            <v-checkbox v-model="sound"></v-checkbox>
          </template>
        </v-list-item>
        <v-list-item title="Auto-add widgets" subtitle="Automatically add home screen widgets">
          <template v-slot:prepend>
            <v-checkbox v-model="widgets"></v-checkbox>
          </template>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
  <v-dialog
      v-model="actionModule"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar
          dark
          color="primary"
      >
        <v-btn
            icon
            dark
            @click="actionModule = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>action list</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
              variant="text"
              @click="actionModule = false"
          >
            Save
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-divider></v-divider>
      这里是action列表
      有很多很多的应用。
    </v-card>
  </v-dialog>
</template>

<style scoped>
</style>
