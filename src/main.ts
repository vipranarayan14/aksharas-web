import "./style.css";

import Aksharas from "@vipran/aksharas";

import { getStats, Stats } from "./get-stats";
import { Analysis, getAnalysis } from "./get-analysis";
import { debounce, sanitize } from "./utils";

const inputEle = document.querySelector<HTMLTextAreaElement>("#app textarea")!;
const analysisEle = document.querySelector<HTMLElement>(
  "#app .analysis-content"
);
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

const renderStats = (stats: Stats) => {
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

const createItem = (analysis: Analysis) => {
  const { aksharasCount, invalidCount, varnasCount } = analysis;

  const header = sanitize(analysis.word);

  const aksharasCounter = `<span>${aksharasCount}</span>`.concat(
    invalidCount ? `<span class="invalid">${invalidCount}</span>` : ""
  );

  const aksharasDetailsContent = analysis.aksharas
    .map((akshara) =>
      !akshara.isInvalid
        ? `<span>${akshara.value}</span>`
        : `<span class="invalid">&nbsp;${akshara.value}&nbsp;</span>`
    )
    .join("&nbsp;· ");

  const varnasCounter = `<span>${varnasCount}</span>`;

  const varnasDetailsContent = analysis.varnas.join("&nbsp;· ");

  return `
    <div class="analysis-item">
      <div class="header">${header}</div>
      <div class="details">
        <div class="title">Aksharas</div>
        <div class="counters">${aksharasCounter}</div>
        <div class="content">${aksharasDetailsContent || "N/A"}</div>
      </div>
      <div class="details">
        <div class="title">Varnas</div>
        <div class="counters">${varnasCounter}</div>
        <div class="content">${varnasDetailsContent || "N/A"}</div>
      </div>
    </div>`;
};

const analysisPlaceholder = `
<div class="placeholder">
  Enter your text in the editor to see the analysis of the aksharas and varnas in it.
</div>`;

const renderAnalysis = (analyses: Analysis[]) => {
  if (!analysisEle) return;

  let content = analysisPlaceholder;

  if (analyses.length > 0) {
    content = analyses.map(createItem).join("");
  }

  analysisEle.innerHTML = content;
};

const showAnalysis = debounce((input: string) => {
  const analysis = getAnalysis(input);

  renderAnalysis(analysis);
});

const renderResults = () => {
  const input = inputEle.value;

  const results = Aksharas.analyse(input);

  const stats = getStats(results);

  renderStats(stats);

  showAnalysis(input);
};

inputEle.addEventListener("input", renderResults);

window.addEventListener("load", renderResults);
