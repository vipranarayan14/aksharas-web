import "./style.css";

import { getStats } from "./get-stats";

const inputEle = document.querySelector<HTMLTextAreaElement>("#app textarea")!;

const statEles = [
  "counter-total",
  "counter-total-aksharas",
  "counter-total-symbols",
  "counter-total-others",
  "counter-total-varnas",
  "counter-total-svaras",
  "counter-total-vyanjanas",
  "counter-total-spaces",
  "counter-total-chars",
  "counter-total-invalids",
].map((className) =>
  document.querySelector<HTMLSpanElement>(
    `#app .stats .${className} .counter-content`
  )
);

const updateStats = () => {
  const stats = getStats(inputEle.value);

  const $stats = [
    stats.total,
    stats.totalAksharas,
    stats.totalSymbols,
    stats.totalOtherChars,
    stats.totalVarnas,
    stats.totalSvaras,
    stats.totalVyanjanas,
    stats.totalSpaces,
    stats.totalChars,
    stats.totalInvalidChars,
  ];

  statEles.forEach(
    (statEle, i) => statEle && (statEle.innerHTML = $stats[i].toString())
  );
};

inputEle.addEventListener("input", updateStats);

window.addEventListener("load", updateStats);
