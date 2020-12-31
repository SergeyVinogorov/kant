export const notEmpty = (value) =>
  value !== '' && value !== null && value !== undefined;

export const notFalse = (value) => Boolean(value) !== false;

export const notTrue = (value) => Boolean(value) !== true;

export const tel = (value) => {
  const reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10}(\s*)?$/;
  return reg.test(value);
};

/* eslint-disable no-useless-escape */
export const email = (value) => {
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return re.test(String(value).toLowerCase());
};