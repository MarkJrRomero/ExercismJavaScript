//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (c) => {
  let resultado = 0;
  COLORS.filter((color, i) => {
    if (color === c) {
      resultado = i;
    }
  });
  return resultado;
};

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
