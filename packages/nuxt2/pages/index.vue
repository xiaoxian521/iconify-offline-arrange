<template>
  <div class="content">
    <p>Nuxt2 Version</p>
    <IconifyIcon icon="openmoji:1st-place-medal" />
    <IconifyIcon icon="vscode-icons:file-type-access2" />
    <IconifyIcon icon="logos:bigpanda" />
    <IconifyIcon icon="fxemoji:2hearts" />
    <IconifyIcon icon="flat-color-icons:businessman" />
    <IconifyIcon icon="cif:cn" />
  </div>
</template>

<script lang="js">
import { Icon as IconifyIcon ,addAPIProvider, disableCache} from '@iconify/vue2';

/**
 * @description IconifyAPI相关配置
 * @see {@link https://docs.iconify.design/api/providers.html}
 */
addAPIProvider("", {
  resources: ["http://127.0.0.1:8084"],
})

/**
 * @description IconifyAPI相关函数
 * @see {@link https://docs.iconify.design/iconify-icon/}
 * @see {@link https://docs.iconify.design/iconify-icon/disable-cache.html}
 */
disableCache("all")

export default {
 components: {
  IconifyIcon,
 },
};
</script>

<style scoped>
.content {
  width: 240px;
  height: 300px;
  margin: 70px auto;
  text-align: center;
  font-size: 30px;
}
svg {
  margin: 20px;
}
</style>
