//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (nbr) => {
  let result = "";
  if (!(nbr % 3)) {
    result = 'Pling';
  } if (!(nbr % 5)) {
    result += 'Plang';
  } if (!(nbr % 7)) {
    result += 'Plong';
  }
  if (result)
    return result
  return `${nbr}`;
};