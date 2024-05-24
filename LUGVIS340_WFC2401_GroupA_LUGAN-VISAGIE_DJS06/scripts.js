// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1. ForEach Basics
console.log('ForEach Basics:');
names.forEach(name => console.log(name));
provinces.forEach(province => console.log(province));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// 2. Uppercase Transformation
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log('Uppercase Provinces:', uppercaseProvinces);

// 3. Name Lengths
const nameLengths = names.map(name => name.length);
console.log('Name Lengths:', nameLengths);

// 4. Sorting
const sortedProvinces = [...provinces].sort();
console.log('Sorted Provinces:', sortedProvinces);

// 5. Filtering Cape
const nonCapesCount = provinces.filter(province => !province.includes('Cape')).length;
console.log('Non-Cape Provinces Count:', nonCapesCount);

// 6. Finding 'S'
const namesWithS = names.map(name => name.includes('S'));
console.log('Names with \'S\':', namesWithS);

// 7. Creating Object Mapping
const nameProvinceMap = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});
console.log('Name-Province Map:', nameProvinceMap);

// Advanced Exercises (Single console.log Execution)

// 1. Log Products
console.log('Product Names:', products.map(p => p.product));

// 2. Filter by Name Length
console.log('Short Products:', products.filter(p => p.product.length <= 5));

// 3. Price Manipulation
console.log('Total Price:', products
  .filter(p => p.price !== '')
  .map(p => Number(p.price))
  .reduce((total, price) => total + price, 0));

// 4. Concatenate Product Names
console.log('Product Names:', products.reduce((str, p) => str + p.product + ' ', ''));

// 5. Find Extremes in Prices
console.log('Price Extremes:', products
  .filter(p => !isNaN(Number(p.price)))
  .reduce((extremes, p) => {
    const price = Number(p.price);
    let highest = extremes.highest !== undefined ? extremes.highest : -Infinity;
    let lowest = extremes.lowest !== undefined ? extremes.lowest : Infinity;
    highest = Math.max(highest, price);
    lowest = Math.min(lowest, price);
    return { highest, lowest };
  }, {})
);

// 6. Object Transformation
console.log('Transformed Products:', products.reduce((obj, p) => {
  obj[p.product] = Number(p.price);
  return obj;
}, {}));