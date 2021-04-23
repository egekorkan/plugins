<template>
  <div class="wc-webcontent-container">
    <iframe class="wc-webcontent" :src="widget.url" seamless />
  </div>
</template>

<script>
export default {
  name: 'WebcontentWidget'
}
</script>

<style scope>
.wc-webcontent-container {
  padding: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.wc-webcontent-container .wc-webcontent {
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

.fullscreen .wc-webcontent-container .wc-webcontent {
  height: calc(100%);
}
</style>
