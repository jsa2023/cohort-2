/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {

  const totals = {};

  for (const transaction of transactions) {
    const category = transaction['category'];
    const price = transaction['price'];

    if (!totals[category]) {
      totals[category] = price;
    }
    else {
      totals[category] += price;
    }

  }

  const totalsArr = Object.keys(totals).map(category => (
    {
      category: category,
      totalSpent: totals[category]
    }
    ));

  return totalsArr;
}

module.exports = calculateTotalSpentByCategory;
