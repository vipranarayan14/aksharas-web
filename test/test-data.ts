import { Char, AksharaType } from "../src/get-aksharas";
import { Stats } from "../src/count-aksharas";

interface TestDatum {
  testStr: string;
  expectedChars: Char[];
  expectedStats: Stats;
}

export const testData: TestDatum[] = [
  {
    testStr: "्त",
    expectedChars: [
      { char: "्", varnas: 0, type: AksharaType.IN },
      { char: "त", varnas: 2, type: AksharaType.AK },
    ],
    expectedStats: {
      total: 1,
      totalChars: 2,
      totalVarnas: 2,
      totalAksharas: 1,
      totalSymbols: 0,
      totalOtherChars: 0,
      totalInvalidChars: 1,
    },
  },
  {
    testStr: "रामः",
    expectedChars: [
      { char: "रा", varnas: 2, type: AksharaType.AK },
      { char: "मः", varnas: 2, type: AksharaType.AK },
    ],
    expectedStats: {
      total: 2,
      totalChars: 4,
      totalVarnas: 4,
      totalAksharas: 2,
      totalSymbols: 0,
      totalOtherChars: 0,
      totalInvalidChars: 0,
    },
  },
  {
    testStr: "गुरुः",
    expectedChars: [
      { char: "गु", varnas: 2, type: AksharaType.AK },
      { char: "रुः", varnas: 2, type: AksharaType.AK },
    ],
    expectedStats: {
      total: 2,
      totalChars: 5,
      totalVarnas: 4,
      totalAksharas: 2,
      totalSymbols: 0,
      totalOtherChars: 0,
      totalInvalidChars: 0,
    },
  },
  {
    testStr: "सीता",
    expectedChars: [
      { char: "सी", varnas: 2, type: AksharaType.AK },
      { char: "ता", varnas: 2, type: AksharaType.AK },
    ],
    expectedStats: {
      total: 2,
      totalChars: 4,
      totalVarnas: 4,
      totalAksharas: 2,
      totalSymbols: 0,
      totalOtherChars: 0,
      totalInvalidChars: 0,
    },
  },
  {
    testStr: "वर्णः",
    expectedChars: [
      { char: "व", varnas: 2, type: AksharaType.AK },
      { char: "र्णः", varnas: 3, type: AksharaType.AK },
    ],
    expectedStats: {
      total: 2,
      totalChars: 5,
      totalVarnas: 5,
      totalAksharas: 2,
      totalSymbols: 0,
      totalOtherChars: 0,
      totalInvalidChars: 0,
    },
  },
  {
    testStr: "ग्रामम्",
    expectedChars: [
      { char: "ग्रा", varnas: 3, type: AksharaType.AK },
      { char: "म", varnas: 2, type: AksharaType.AK },
      { char: "म्", varnas: 1, type: AksharaType.AK },
    ],
    expectedStats: {
      total: 3,
      totalChars: 7,
      totalVarnas: 6,
      totalAksharas: 3,
      totalSymbols: 0,
      totalOtherChars: 0,
      totalInvalidChars: 0,
    },
  },
  {
    testStr: "रामान्",
    expectedChars: [
      { char: "रा", varnas: 2, type: AksharaType.AK },
      { char: "मा", varnas: 2, type: AksharaType.AK },
      { char: "न्", varnas: 1, type: AksharaType.AK },
    ],
    expectedStats: {
      total: 3,
      totalChars: 6,
      totalVarnas: 5,
      totalAksharas: 3,
      totalSymbols: 0,
      totalOtherChars: 0,
      totalInvalidChars: 0,
    },
  },
  {
    testStr: "तत्त्वम्",
    expectedChars: [
      { char: "त", varnas: 2, type: AksharaType.AK },
      { char: "त्त्व", varnas: 4, type: AksharaType.AK },
      { char: "म्", varnas: 1, type: AksharaType.AK },
    ],
    expectedStats: {
      total: 3,
      totalChars: 8,
      totalVarnas: 7,
      totalAksharas: 3,
      totalSymbols: 0,
      totalOtherChars: 0,
      totalInvalidChars: 0,
    },
  },
  {
    testStr: "मालान् आनयतु",
    expectedChars: [
      { char: "मा", varnas: 2, type: AksharaType.AK },
      { char: "ला", varnas: 2, type: AksharaType.AK },
      { char: "न्", varnas: 1, type: AksharaType.AK },
      { char: " ", varnas: 0, type: AksharaType.OT },
      { char: "आ", varnas: 1, type: AksharaType.AK },
      { char: "न", varnas: 2, type: AksharaType.AK },
      { char: "य", varnas: 2, type: AksharaType.AK },
      { char: "तु", varnas: 2, type: AksharaType.AK },
    ],
    expectedStats: {
      total: 8,
      totalChars: 12,
      totalVarnas: 12,
      totalAksharas: 7,
      totalSymbols: 0,
      totalOtherChars: 1,
      totalInvalidChars: 0,
    },
  },
  {
    testStr: "ग्रामादागतः",
    expectedChars: [
      { char: "ग्रा", varnas: 3, type: AksharaType.AK },
      { char: "मा", varnas: 2, type: AksharaType.AK },
      { char: "दा", varnas: 2, type: AksharaType.AK },
      { char: "ग", varnas: 2, type: AksharaType.AK },
      { char: "तः", varnas: 2, type: AksharaType.AK },
    ],
    expectedStats: {
      total: 5,
      totalChars: 11,
      totalVarnas: 11,
      totalAksharas: 5,
      totalSymbols: 0,
      totalOtherChars: 0,
      totalInvalidChars: 0,
    },
  },
  {
    testStr: "चिन्तितवान् सः",
    expectedChars: [
      { char: "चि", varnas: 2, type: AksharaType.AK },
      { char: "न्ति", varnas: 3, type: AksharaType.AK },
      { char: "त", varnas: 2, type: AksharaType.AK },
      { char: "वा", varnas: 2, type: AksharaType.AK },
      { char: "न्", varnas: 1, type: AksharaType.AK },
      { char: " ", varnas: 0, type: AksharaType.OT },
      { char: "सः", varnas: 2, type: AksharaType.AK },
    ],
    expectedStats: {
      total: 7,
      totalChars: 14,
      totalVarnas: 12,
      totalAksharas: 6,
      totalSymbols: 0,
      totalOtherChars: 1,
      totalInvalidChars: 0,
    },
  },
];
