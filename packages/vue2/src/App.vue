<template>
  <div class="content">
    <p>Vue2 Version</p>
    <IconifyIcon icon="openmoji:1st-place-medal" />
    <IconifyIcon icon="vscode-icons:file-type-access2" />
    <IconifyIcon icon="logos:bigpanda" />
    <IconifyIcon icon="fxemoji:2hearts" />
    <IconifyIcon icon="flat-color-icons:businessman" />
    <IconifyIcon icon="cif:cn" />
  </div>
</template>

<script>
import { Icon as IconifyIcon } from "@iconify/vue2";

export default {
  components: {
    IconifyIcon,
  },
};
</script>

<style scoped>
.content {
  width: 220px;
  height: 300px;
  margin: 70px auto;
  text-align: center;
  font-size: 30px;
}
svg {
  margin: 20px;
}
</style>
