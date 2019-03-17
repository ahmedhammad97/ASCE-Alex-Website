<template>
  <div></div>
</template>

<script>
import { pleaseWait } from 'please-wait'
import 'please-wait/build/please-wait.css'

export default {
  name: 'LoaderComponent',
  props: ['isLoading'],
  methods: {
    open() {
      // Attaching a `pleaseWaitInstance` property (no need to declare)...
      if (!this.pleaseWaitInstance) {
        this.pleaseWaitInstance = pleaseWait({
          logo: require('../assets/loader.png'),
          backgroundColor: '#0c5fa8',
          loadingHtml: '<div><span class="spinner-grow text-light m-3"></span><span class="spinner-grow text-light m-3"></span><span class="spinner-grow text-light m-3"></span></div>'
        })
      }
    },
    close() {
      if (this.pleaseWaitInstance) {
        this.pleaseWaitInstance.finish()
        this.pleaseWaitInstance = null
      }
    }
  },
  watch: {
    isLoading: {
      handler(isLoading) {
        if (isLoading) {
          this.open()
        } else {
          this.close()
        }
      },
      immediate: true,
    }
  },
}
</script>
