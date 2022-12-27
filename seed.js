require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Shirts', sortOrder: 10},
    {name: 'Jeans', sortOrder: 20},
    {name: 'Coats', sortOrder: 30},
    {name: 'Dresses', sortOrder: 40},
    {name: 'Swimwear', sortOrder: 50},
    {name: 'Cultural Garb', sortOrder: 60},
    {name: 'Misc.', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Pink Blouse', emoji: '👚', category: categories[0], price: 20},
    {name: 'Straight Leg Jeans', emoji: '👖', category: categories[1], price: 25},
    {name: 'Yellow Leather Coat', emoji: '🧥', category: categories[2], price: 45},
    {name: 'Blue A-Line Dress', emoji: '👗', category: categories[3], price: 50},
    {name: 'Two Piece Red Bikini', emoji: '👙', category: categories[4], price: 35},
    {name: 'One Piece Blue Swimsuit', emoji: '🩱', category: categories[4], price: 25},
    {name: 'Red and Yellow Sari', emoji: '🥻', category: categories[5], price: 60},
    {name: 'Yellow Kimono', emoji: '👘', category: categories[5], price: 60},
    {name: 'Tube Socks', emoji: '🧦', category: categories[6], price: 8},
    {name: 'Red Winter Scarf', emoji: '🧣', category: categories[6], price: 14},

]);

  console.log(items)

  process.exit();

})();
