export const isEmailValid = (email: string): boolean => {
  console.log("validating email:", email);

  // 2. Use a Regex Literal (no quotes, no new RegExp)
  const regex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

  return regex.test(email);
};
