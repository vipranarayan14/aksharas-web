// ref: https://stackoverflow.com/a/54804465/8648326
export const sanitize = (str: string) =>
  str
    .split("")
    .map((char) => "&#x" + char.charCodeAt(0).toString(16) + ";")
    .join("");

export const debounce = (func: Function, timeout = 300) => {
  let timer: number;

  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(null, args);
    }, timeout);
  };
};
