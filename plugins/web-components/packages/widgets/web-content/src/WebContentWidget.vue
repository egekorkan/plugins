<template>
  <div class="web-content-widget-container">
    <iframe class="web-content-widget" :src="widget.url" seamless />
  </div>
</template>

<script>
export default {
  name: 'WebContentWidget'
}
</script>

<style scope>
.web-content-widget-container {
  padding: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.web-content-widget-container .web-content-widget {
  padding: 10px;
  width: 100%;
  height: calc(100% - 24px);
  /* height: calc(100% - 24px - 8px - 48px); */
  border: none;
  position: absolute; /* deleting this removes responsiveness of iframe */
  left: 0;
  /* top: 0; */
  bottom: 0;
}

.fullscreen .web-content-widget-container .web-content-widget {
  height: calc(100%);
}
</style>
