const users = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    age: 28,
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    age: 34,
  },
  {
    id: 3,
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    age: 22,
  },
];

const orders = [
  {
    orderId: 101,
    userId: 1,
    product: "Laptop",
    amount: 1200,
  },
  {
    orderId: 102,
    userId: 2,
    product: "Headphones",
    amount: 200,
  },
  {
    orderId: 103,
    userId: 1,
    product: "Mouse",
    amount: 50,
  },
];

const consolidatedResult = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    age: 28,
    orders: [
      {
        orderId: 101,
        product: "Laptop",
        amount: 1200,
      },
      {
        orderId: 103,
        product: "Mouse",
        amount: 50,
      },
    ],
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    age: 34,
    orders: [
      {
        orderId: 102,
        product: "Headphones",
        amount: 200,
      },
    ],
  },
  {
    id: 3,
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    age: 22,
    orders: [],
  },
];

const aggregateData = (allUsers, allOrders) => {
  // write logic here & return
};

const mergedDataset = aggregateData(users, orders);

console.log("MergedDataset: ", mergedDataset);
