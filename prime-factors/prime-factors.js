//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (nbr) => {
  let FactorsPrimes = [];
  let factors = 2;

  while (factors <= nbr && nbr > 0) {
    if (!(nbr % factors)) {
      nbr /= factors;
      FactorsPrimes.push(factors);
      factors = 2;
    }
    else
      factors++;
  }

  return FactorsPrimes;
};
