// Each order that was placed should be an object.
// An order can contain a list of items, not just one.

// Try to give your order objects the same "shape",
// meaning that they all have the same property keys.
// For example, two different orders may have different property values,
// but their property keys should be the same.

// Create interfaces for your objects
// You can make properties optional in your interface

interface Item {
  title?: string;
  author?: string;
  price: number;
  name?: string;
}

interface Orders {
  orderDate: string;
  totalCost: number;
  receiver: string;
  orderNumber: number;
  items: Item[];
}

const orderHistory: Orders[] = [
  // first order
  {
    orderDate: 'August 8, 2020',
    totalCost: 34,
    receiver: 'JS Masher',
    orderNumber: 11439416898772232,
    items: [
      {
        title: 'Javascript for impatient programmers',
        author: 'Rauschmayer, Dr.Axel',
        price: 31.55,
      },
    ],
  },
  // second order
  {
    orderDate: 'July 19, 2020',
    totalCost: 44.53,
    receiver: 'JS Masher',
    orderNumber: 11439416898772232,
    items: [
      {
        title: 'The timeless way of building',
        author: 'Alexander, Christopher',
        price: 41.33,
      },
    ],
  },
  // third order
  {
    orderDate: 'July 4, 2020',
    totalCost: 17.22,
    receiver: 'JS Masher',
    orderNumber: 11439416898772232,
    items: [
      {
        name: 'Gamecube Controller Adapter',
        price: 15.98,
      },
    ],
  },
  // fourth order
  {
    orderDate: 'August 8, 2020',
    totalCost: 138.93,
    receiver: 'JS Masher',
    orderNumber: 11439416898772232,
    items: [
      {
        name: 'GameCube Controller',
        price: 94.95,
      },
      {
        title: 'The art of SQL',
        author: 'Faroult, Stephanie',
        price: 33.99,
      },
    ],
  },
];
console.log(orderHistory);
