<template>
  <v-card id="checklist-widget" flat width="100%">
    <v-slide-y-transition group>
      <v-list
        v-for="(modelItem, i) in model"
        :key="i"
        dense
        class="pa-0 transparent"
      >
        <v-divider v-if="i !== 0" :key="`v-divider-${i}`"></v-divider>
        <v-list-item :key="`v-list-item-${i}`">
          <v-list-item-action>
            <v-checkbox v-model="done[i]" color="text" @change="handleChange">
              <template #label>
                <div
                  :class="done[i] ? 'secondary--text' : 'grey--text'"
                  class="ml-3"
                  v-text="modelItem"
                ></div>
              </template>
            </v-checkbox>
          </v-list-item-action>
          <v-spacer></v-spacer>
          <v-scroll-x-transition>
            <v-icon :color="done[i] ? widget.display.color : 'grey'"
              >power_settings_new</v-icon
            >
          </v-scroll-x-transition>
        </v-list-item>
      </v-list>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
export default {
  name: 'ChecklistWidget',
  data() {
    return {
      model: [],
      done: []
    }
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler(newVal) {
        this.model = newVal
        this.done = Array(newVal ? newVal.length : 0).fill(false)
      }
    }
  },
  methods: {
    handleChange(event) {
      this.$emit('vibrate')
      this.$emit('action', event)
    }
  }
}
</script>

<style scoped>
#checklist-widget {
  background-color: transparent;
}
</style>
