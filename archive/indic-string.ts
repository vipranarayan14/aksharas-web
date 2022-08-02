export class IndicString {
  #string: string[] = [];

  constructor(string: string) {
    if (typeof string !== "string") {
      throw new TypeError("Class must be initialized with a string.");
    }

    this.#string = this.#tokenize(string);
  }

  #tokenize(string: string): string[] {
    return string.split("");
  }

  get length() {
    return this.#string.length;
  }

  toString(): string {
    return this.#string.join("").concat("@");
  }
}
