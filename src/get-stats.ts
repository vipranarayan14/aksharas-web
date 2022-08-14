import Aksharas from "@vipran/aksharas";

export interface Stats {
  total: number;
  totalChars: number;
  totalVarnas: number;
  totalAksharas: number;
  totalSymbols: number;
  totalOtherChars: number;
  totalInvalidChars: number;
}

export const getStats = (str: string): Stats => {
  const results = Aksharas.analyse(str);

  const validTokens = results.all.filter(
    (token) => token.type !== Aksharas.TokenType.Invalid
  );

  return {
    total: validTokens.length,
    totalChars: results.chars.length,
    totalVarnas: results.varnasLength,
    totalAksharas: results.aksharas.length,
    totalSymbols: results.symbols.length,
    totalOtherChars: results.whitespaces.length + results.unrecognised.length,
    totalInvalidChars: results.invalid.length,
  };
};
