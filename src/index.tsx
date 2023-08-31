// @ts-ignore
import { h } from "tsx-dom";

import "./index.css";
import App from "./App";

document.querySelector<HTMLDivElement>("#app")!.appendChild(<App />);
