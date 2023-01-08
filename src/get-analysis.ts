import Aksharas, { TokenType } from "@vipran/aksharas";

type AnalysisAkshara = {
  value: string;
  isInvalid: boolean;
};

export interface Analysis {
  word: string;
  aksharas: AnalysisAkshara[];
  aksharasCount: number;
  invalidCount: number;
  varnas: string[];
  varnasCount: number;
}

const wordBoundary = /[\s।॥,.]/;

export const getAnalysis = (input: string): Analysis[] =>
  input
    .split(wordBoundary)
    .filter((word) => !!word)
    .map((word) => {
      const results = Aksharas.analyse(word);

      const aksharas = results.all
        .filter((token) =>
          [TokenType.Akshara, TokenType.Invalid].includes(token.type)
        )
        .map(({ value, ...token }) => ({
          value,
          isInvalid: token.type === TokenType.Invalid,
        }));
      const varnas = results.varnas.map((varna) => varna.value);

      const analysis = {
        word,
        aksharas,
        aksharasCount: results.aksharas.length,
        invalidCount: results.invalid.length,
        varnas,
        varnasCount: results.varnas.length,
      };

      return analysis;
    });
