function notNullUndefined(value) {
  return value !== null && value !== undefined;
}

function notEmptyString(str) {
  return typeof str === "string" && str !== "";
}

export { notNullUndefined, notEmptyString };
