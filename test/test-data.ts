import { Akshara, AksharaType } from "../src/get-aksharas";
import { Stats } from "../src/count-aksharas";

interface TestDatum {
  testStr: string;
  expectedAksharas: Akshara[];
  expectedStats: Stats;
}

export const testData: TestDatum[] = [
  {
    testStr: "्त",
    expectedAksharas: [
      { value: "्", type: AksharaType.IN, varnas: 0 },
      { value: "त", type: AksharaType.AK, varnas: 2 },
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
    expectedAksharas: [
      { value: "रा", type: AksharaType.AK, varnas: 2 },
      { value: "मः", type: AksharaType.AK, varnas: 2 },
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
    expectedAksharas: [
      { value: "गु", type: AksharaType.AK, varnas: 2 },
      { value: "रुः", type: AksharaType.AK, varnas: 2 },
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
    expectedAksharas: [
      { value: "सी", type: AksharaType.AK, varnas: 2 },
      { value: "ता", type: AksharaType.AK, varnas: 2 },
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
    expectedAksharas: [
      { value: "व", type: AksharaType.AK, varnas: 2 },
      { value: "र्णः", type: AksharaType.AK, varnas: 3 },
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
    expectedAksharas: [
      { value: "ग्रा", type: AksharaType.AK, varnas: 3 },
      { value: "म", type: AksharaType.AK, varnas: 2 },
      { value: "म्", type: AksharaType.AK, varnas: 1 },
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
    expectedAksharas: [
      { value: "रा", type: AksharaType.AK, varnas: 2 },
      { value: "मा", type: AksharaType.AK, varnas: 2 },
      { value: "न्", type: AksharaType.AK, varnas: 1 },
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
    expectedAksharas: [
      { value: "त", type: AksharaType.AK, varnas: 2 },
      { value: "त्त्व", type: AksharaType.AK, varnas: 4 },
      { value: "म्", type: AksharaType.AK, varnas: 1 },
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
    expectedAksharas: [
      { value: "मा", type: AksharaType.AK, varnas: 2 },
      { value: "ला", type: AksharaType.AK, varnas: 2 },
      { value: "न्", type: AksharaType.AK, varnas: 1 },
      { value: " ", type: AksharaType.OT, varnas: 0 },
      { value: "आ", type: AksharaType.AK, varnas: 1 },
      { value: "न", type: AksharaType.AK, varnas: 2 },
      { value: "य", type: AksharaType.AK, varnas: 2 },
      { value: "तु", type: AksharaType.AK, varnas: 2 },
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
    expectedAksharas: [
      { value: "ग्रा", type: AksharaType.AK, varnas: 3 },
      { value: "मा", type: AksharaType.AK, varnas: 2 },
      { value: "दा", type: AksharaType.AK, varnas: 2 },
      { value: "ग", type: AksharaType.AK, varnas: 2 },
      { value: "तः", type: AksharaType.AK, varnas: 2 },
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
    expectedAksharas: [
      { value: "चि", type: AksharaType.AK, varnas: 2 },
      { value: "न्ति", type: AksharaType.AK, varnas: 3 },
      { value: "त", type: AksharaType.AK, varnas: 2 },
      { value: "वा", type: AksharaType.AK, varnas: 2 },
      { value: "न्", type: AksharaType.AK, varnas: 1 },
      { value: " ", type: AksharaType.OT, varnas: 0 },
      { value: "सः", type: AksharaType.AK, varnas: 2 },
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
