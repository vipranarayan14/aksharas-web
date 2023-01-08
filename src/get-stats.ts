import { VarnaType, TokenType } from "@vipran/aksharas";

export interface Stats {
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

const filterVarnas = (varnas: any[], varnaType: VarnaType) =>
  varnas.filter((varna) => varna.type === varnaType);

const filterSpaces = (tokens: any[]) =>
  tokens.filter((token) => token.value === " ");

export const getStats = (results: any): Stats => {
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
