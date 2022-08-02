import { DEVA_CHAR_TYPES } from "./deva-char-types";

export enum AksharaType {
  AK = "akshara",
  SY = "symbol",
  OT = "other",
  IN = "invalid",
}

export interface Char {
  char: string;
  varnas: number;
  type: AksharaType;
}

const CharType = {
  VO: ["vowels"],
  SY: ["symbols"],
  MA: ["vowel_marks", "yogavaahas", "accents"],
  VI: ["virama"],
  NP: ["zwnj", "zwj"],
  CO: ["consonants", "extra_consonants"],
  ND: ["non_deva_chars"],
  ES: ["end_of_string"],
};

const getCharType = (char: string): string => {
  if (char === undefined) return CharType.ES[0];

  return DEVA_CHAR_TYPES[char] ?? CharType.ND[0];
};

export const getAksharas = (str: string): Char[] => {
  const chars: Char[] = [];

  if (str.length === 0) return chars;

  const firstChar = str[0];
  const firstCharType = getCharType(str[0]);

  let acc: string = "";
  let varnas: number = 0;
  let isCollectingConjunct: boolean = false;
  let type: AksharaType = AksharaType.OT;

  if ([...CharType.VO].includes(firstCharType)) {
    chars.push({ char: firstChar, varnas: 1, type: AksharaType.AK });
  }

  if ([...CharType.SY].includes(firstCharType)) {
    chars.push({ char: firstChar, varnas, type: AksharaType.SY });
  }

  if ([...CharType.ND].includes(firstCharType)) {
    chars.push({ char: firstChar, varnas, type: AksharaType.OT });
  }

  if (
    [...CharType.MA, ...CharType.VI, ...CharType.NP].includes(firstCharType)
  ) {
    chars.push({ char: firstChar, varnas, type: AksharaType.IN });
  }

  if ([...CharType.CO].includes(firstCharType)) {
    acc += firstChar;
    varnas += 2;
    type = AksharaType.AK;
  }

  for (let i = 0, l = str.length - 1; i <= l; i += 1) {
    const nextChar = str[i + 1];
    const nextCharType = getCharType(nextChar);

    // console.log(i + 1, nextChar, nextCharType, acc);

    if ([...CharType.ES].includes(nextCharType)) {
      isCollectingConjunct = false;
      if (acc) chars.push({ char: acc, varnas, type });
      acc = "";
      varnas = 0;
      continue;
    }

    if ([...CharType.VO].includes(nextCharType)) {
      isCollectingConjunct = false;
      if (acc) chars.push({ char: acc, varnas, type });
      acc = nextChar;
      varnas = 1;
      type = AksharaType.AK;
      continue;
    }

    if ([...CharType.SY].includes(nextCharType)) {
      isCollectingConjunct = false;
      if (acc) chars.push({ char: acc, varnas, type });
      acc = nextChar;
      varnas = 0;
      type = AksharaType.SY;
      continue;
    }

    if ([...CharType.ND].includes(nextCharType)) {
      isCollectingConjunct = false;
      if (acc) chars.push({ char: acc, varnas, type });
      acc = nextChar;
      varnas = 0;
      type = AksharaType.OT;
      continue;
    }

    if ([...CharType.MA].includes(nextCharType)) {
      isCollectingConjunct = false;
      acc += nextChar;
      continue;
    }

    if ([...CharType.NP].includes(nextCharType)) {
      acc += nextChar;
      continue;
    }

    if ([...CharType.VI].includes(nextCharType)) {
      isCollectingConjunct = true;
      acc += nextChar;
      varnas -= 1;
      continue;
    }

    if ([...CharType.CO].includes(nextCharType)) {
      if (!isCollectingConjunct) {
        if (acc) chars.push({ char: acc, varnas, type });
        acc = nextChar;
        varnas = 0;
      } else {
        isCollectingConjunct = false;
        acc += nextChar;
      }

      varnas += 2;

      type = AksharaType.AK;

      continue;
    }
  }

  return chars;
};
