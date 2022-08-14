import "./style.css";

import { getStats } from "./get-stats";

const inputEle = document.querySelector<HTMLTextAreaElement>("#app textarea")!;

const statEles = [
  "stats-total",
  "stats-total-aksharas",
  "stats-total-symbols",
  "stats-total-others",
  "stats-total-varnas",
  "stats-total-chars",
  "stats-total-invalids",
].map((className) =>
  document.querySelector<HTMLSpanElement>(
    `#app .stats .${className} .stats-content`
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
    stats.totalChars,
    stats.totalInvalidChars,
  ];

  statEles.forEach(
    (statEle, i) => statEle && (statEle.innerHTML = $stats[i].toString())
  );
};

inputEle.addEventListener("input", updateStats);

window.addEventListener("load", updateStats);
