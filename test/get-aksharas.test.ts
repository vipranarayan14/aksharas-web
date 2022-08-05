import { expect, test } from "vitest";

import { getAksharas } from "../src/get-aksharas";
import { testData } from "./test-data";

testData.forEach((data) => {
  const chars = getAksharas(data.testStr);

  test("getChars", () => {
    expect(chars).toEqual(data.expectedAksharas);
  });
});
