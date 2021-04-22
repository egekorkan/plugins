<template>
  <div class="webcontent-widget-container">
    <iframe class="webcontent-widget" :src="widget.url" seamless />
  </div>
</template>

<script>
export default {
  name: 'WebcontentWidget'
}
</script>

<style scope>
.webcontent-widget-container {
  padding: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.webcontent-widget-container .webcontent-widget {
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

.fullscreen .webcontent-widget-container .webcontent-widget {
  height: calc(100%);
}
</style>
