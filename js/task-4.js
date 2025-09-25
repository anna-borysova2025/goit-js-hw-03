function getShippingCost(country) {
  const country1 = 'China';
  const country2 = 'Chile';
  const country3 = 'Australia';
  const country4 = 'Jamaica';

  switch (country) {
    case country1:
      return `Shipping to ${country} will cost 100 credits`;
    case country2:
      return `Shipping to ${country} will cost 250 credits`;
    case country3:
      return `Shipping to ${country} will cost 170 credits`;
    case country4:
      return `Shipping to ${country} will cost 120 credits`;
    default:
      return `"Sorry, there is no delivery to your country`;
  }
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
