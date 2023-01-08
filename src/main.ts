import "./style.css";

import { renderStats } from "./stats";
import { renderAnalysis } from "./analysis";

const inputEle = document.querySelector<HTMLTextAreaElement>("#app textarea")!;

const renderResults = () => {
  const input = inputEle.value;

  renderStats(input);
  renderAnalysis(input);
};

inputEle.addEventListener("input", renderResults);

window.addEventListener("load", renderResults);
