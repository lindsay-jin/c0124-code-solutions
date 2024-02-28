const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

// { price: original_number, salePrice: original_number / 2 }
const price = prices.map((price) => ({ price, salePrice: price / 2 }));

console.log('Price objects', price);

const formattedPrice = prices.map((price) => `$${price}`);
console.log('formattedPrice', formattedPrice);
