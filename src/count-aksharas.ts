import { AksharaType, getAksharas } from "./get-aksharas";

export interface Stats {
  total: number;
  totalChars: number;
  totalVarnas: number;
  totalAksharas: number;
  totalSymbols: number;
  totalOtherChars: number;
  totalInvalidChars: number;
  totalWordCount: number;
  wordFrequency: string[];
  charFrequency: string[];
}

export const countAksharas = (str: string): Stats => {
  const aksharas = getAksharas(str);

  const valid = aksharas.filter(({ type }) => type !== AksharaType.IN);

  const total = valid.length;
  const totalChars = str.length;
  const totalVarnas = valid.reduce((total, { varnas }) => total + varnas, 0);

  const totalAksharas = aksharas.filter(
    ({ type }) => type === AksharaType.AK
  ).length;
  const totalSymbols = aksharas.filter(
    ({ type }) => type === AksharaType.SY
  ).length;
  const totalOtherChars = aksharas.filter(
    ({ type }) => type === AksharaType.OT
  ).length;
  const totalInvalidChars = aksharas.filter(
    ({ type }) => type === AksharaType.IN
  ).length;
  const totalWordCount = aksharas.filter(
    ({ type }) => type === AksharaType.WD
  ).length;
  const wordFrequency = aksharas.filter(
    wordFreqObj => wordFreqObj.type === AksharaType.WF).map(
    wordFreqObj => wordFreqObj.value);
    const charFrequency = aksharas.filter(
    charFreqObj => charFreqObj.type === AksharaType.CF).map(
    charFreqObj => charFreqObj.value);

  return {
    total,
    totalChars,
    totalVarnas,
    totalAksharas,
    totalSymbols,
    totalOtherChars,
    totalInvalidChars,
    totalWordCount,
    wordFrequency,
    charFrequency
  };
};
