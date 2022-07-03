import { useState } from "preact/hooks";
import { Icon as IconifyIcon } from "@iconify-icon/react";
import "./app.css";

export function App() {
  return (
    <div class="content">
      <p>Preact Version</p>
      <IconifyIcon class="icon" icon="openmoji:1st-place-medal" />
      <IconifyIcon class="icon" icon="vscode-icons:file-type-access2" />
      <IconifyIcon class="icon" icon="logos:bigpanda" />
      <IconifyIcon class="icon" icon="fxemoji:2hearts" />
      <IconifyIcon class="icon" icon="flat-color-icons:businessman" />
      <IconifyIcon class="icon" icon="cif:cn" />
    </div>
  );
}
