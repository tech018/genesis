export const formatHelpers = {
  toCommaDelimitedCurrency: (
    value,
    withDecimal = false,
    isToFixed = false,
    decimalPlaces = 2
  ) => {
    if (value === 0) {
      return value;
    }

    const pattern = /(\d)(?=(\d{3})+(?!\d))/g;

    let converted = "";
    if (withDecimal) {
      const splitAmount = value.toFixed(2).split(".");
      converted = `${splitAmount[0].toString().replace(pattern, "$1,")}.${
        splitAmount[1]
      }`;
    } else if (isToFixed) {
      const multiplier = 10 ** decimalPlaces;
      const truncated = Math.floor(value * multiplier) / multiplier;
      converted = truncated.toLocaleString("en");
    } else {
      converted = Math.ceil(value).toString().replace(pattern, "$1,");
    }
    return converted;
  },
  toSpacedMobileNumber: (value) => {
    const zeroFormat = value.replace(/^(\+63|63)/, "0");
    const pattern = /(\d{4})(\d{3})(\d{4})/g;
    const converted = zeroFormat.toString().replace(pattern, "$1 $2 $3");
    return converted;
  },
  toCapitalizedWords: (str) => {
    const splitStr = str.toLowerCase().split(" ");

    for (let i = 0; i < splitStr.length; i += 1) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    return splitStr.join(" ");
  },
};
