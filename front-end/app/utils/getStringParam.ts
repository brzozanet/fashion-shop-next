export const getStringParam = (stringParam: string | string[] | undefined) => {
  if (typeof stringParam === "string") {
    return stringParam;
  }
  if (Array.isArray(stringParam)) {
    return stringParam[0];
  }
  if (stringParam === undefined) {
    return "";
  }
  return "";
};
