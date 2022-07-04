import { render } from "preact";
import { App } from "./app";
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

render(<App />, document.getElementById("app") as HTMLElement);
