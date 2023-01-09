import Aksharas, { VarnaType, TokenType } from "@vipran/aksharas";

interface Stats {
  total: number;
  totalAksharas: number;
  totalChars: number;
  totalInvalidChars: number;
  totalOtherChars: number;
  totalSpaces: number;
  totalSvaras: number;
  totalSymbols: number;
  totalVarnas: number;
  totalVyanjanas: number;
}

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
  document.querySelector<HTMLElement>(
    `#app .stats .${className} .counter-content`
  )
);

const filterVarnas = (varnas: any[], varnaType: VarnaType) =>
  varnas.filter((varna) => varna.type === varnaType);

const filterSpaces = (tokens: any[]) =>
  tokens.filter((token) => token.value === " ");

const getStats = (results: any): Stats => {
  const validTokens = results.all.filter(
    (token: any) => token.type !== TokenType.Invalid
  );

  return {
    total: validTokens.length,
    totalAksharas: results.aksharas.length,
    totalChars: results.chars.length,
    totalInvalidChars: results.invalid.length,
    totalOtherChars: results.whitespaces.length + results.unrecognised.length,
    totalSpaces: filterSpaces(results.whitespaces).length,
    totalSvaras: filterVarnas(results.varnas, VarnaType.Svara).length,
    totalSymbols: results.symbols.length,
    totalVarnas: results.varnas.length,
    totalVyanjanas: filterVarnas(results.varnas, VarnaType.Vyanjana).length,
  };
};

const $renderStats = (stats: Stats) => {
  const invalidsCounter = statEles.at(-1);

  invalidsCounter?.parentElement?.classList.remove("error");

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

  if (stats.totalInvalidChars > 0) {
    invalidsCounter?.parentElement?.classList.add("error");
  }
};

export const renderStats = (input: string) => {
  const results = Aksharas.analyse(input);

  const stats = getStats(results);

  $renderStats(stats);
};
