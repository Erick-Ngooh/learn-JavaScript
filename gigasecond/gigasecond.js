//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => { 
  const timestampAndOneGigaSeconde = date.getTime() + 1e+12;
  const dateAtOndeGigaSeconde = new Date();
  dateAtOndeGigaSeconde.setTime(timestampAndOneGigaSeconde);
  return dateAtOndeGigaSeconde;
};
