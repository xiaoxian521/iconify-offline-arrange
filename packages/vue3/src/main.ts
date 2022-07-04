import { createApp } from "vue";
import App from "./App.vue";

import { addAPIProvider, disableCache } from "@iconify/vue";

// https://docs.iconify.design/iconify-icon/add-api-provider.html
addAPIProvider("", {
  resources: ["http://127.0.0.1:8084"],
});
// https://docs.iconify.design/iconify-icon/disable-cache.html
disableCache("all");

import "./style.css";

createApp(App).mount("#app");
