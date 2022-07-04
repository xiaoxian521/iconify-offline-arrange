import { Icon as IconifyIcon, addAPIProvider, disableCache } from "@iconify-icon/react"

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

export default function Home() {
  return (
    <div className="content">
      <p>NextJs Version</p>
      <IconifyIcon className="icon" icon="openmoji:1st-place-medal" />
      <IconifyIcon className="icon" icon="vscode-icons:file-type-access2" />
      <IconifyIcon className="icon" icon="logos:bigpanda" />
      <IconifyIcon className="icon" icon="fxemoji:2hearts" />
      <IconifyIcon className="icon" icon="flat-color-icons:businessman" />
      <IconifyIcon className="icon" icon="cif:cn" />
    </div>
  )
}
