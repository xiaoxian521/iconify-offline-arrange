import { Icon as IconifyIcon } from "@iconify-icon/react";
import "./App.css";

function App() {
  return (
    <div className="content">
      <p>React Version</p>
      <IconifyIcon className="icon" icon="openmoji:1st-place-medal" />
      <IconifyIcon className="icon" icon="vscode-icons:file-type-access2" />
      <IconifyIcon className="icon" icon="logos:bigpanda" />
      <IconifyIcon className="icon" icon="fxemoji:2hearts" />
      <IconifyIcon className="icon" icon="flat-color-icons:businessman" />
      <IconifyIcon className="icon" icon="cif:cn" />
    </div>
  );
}

export default App;
