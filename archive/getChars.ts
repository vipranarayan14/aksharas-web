import devaScheme from "./devanagari.json";

export const devaChars = Object.fromEntries(
  Object.entries(devaScheme).flatMap(([type, chars]) =>
    Object.values(chars).map((char) => [char, type])
  )
);
