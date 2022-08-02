import { expect, test } from "vitest";

import { testData } from "./test-data";
import { countAksharas } from "../src/count-aksharas";

testData.forEach((data) => {
  const stats = countAksharas(data.testStr);

  test("countChars", () => {
    expect(stats).toEqual(data.expectedStats);
  });
});
