import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { addAPIProvider, disableCache } from "@iconify-icon/react";

/**
 * @description IconifyAPI相关配置
 * @see {@link https://docs.iconify.design/api/providers.html}
 */
addAPIProvider("", {
  resources: ["http://127.0.0.1:8084"],
});

/**
 * @description IconifyAPI相关函数
 * @see {@link https://docs.iconify.design/iconify-icon/}
 * @see {@link https://docs.iconify.design/iconify-icon/disable-cache.html}
 */
disableCache("all");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
