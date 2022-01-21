const ftoc = function(input) {
  celcius = (input - 32) * (5 / 9);
  if (celcius == 0) {
    return 0;
  } else {
    return Number(celcius.toFixed(1));
  }
};

const ctof = function(input) {
  fahreinheit = input * (9 / 5) + 32;
  if (fahreinheit == 0) {
    return 0;
  } else {
    return Number(fahreinheit.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
