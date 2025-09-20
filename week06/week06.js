// Lesson 1: Arrays, Objects, and Functions

// 1. Create an empty array to hold the quotes
const quotes = []

/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  // TODO: Add the quote object to the quotes array
  if(quote !== undefined || quote !== null){
    quotes.push(quote)
  }else{
    console.log(`Quote must have id , content , author `)
  }
}

/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
  // TODO: Remove the quote object from the array using the given id
  const index = quotes.findIndex(q => q.id === id)
  if (index !== -1){
    quotes.splice(index, 1)
  }
}

/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
  // TODO: Find the quote by id and update its properties
  const quote = quotes.find(q => q.id === id)
  if(quote){
    if(updatedQuote.content !== undefined){
      quote.content = updatedQuote.content
    }
    if(updatedQuote.author !== undefined){
      quote.author = updatedQuote.author
    }
  }
}

/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  // TODO: Return the quotes array
  return quotes
}

// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()
addQuote({ id: 1, content: 'Stay hungry, stay foolish.', author: 'Steve Jobs' })
addQuote({ id: 2, content: 'Do or do not. There is no try.', author: 'Yoda' })
addQuote({id: 3,content: 'Simplicity is the ultimate sophistication.',author: 'Leonardo da Vinci'})
// console.log(quotes)
// TODO: Delete 1 quote using deleteQuote()
deleteQuote(2)
// console.log(quotes)
// TODO: Update 1 quote using updateQuote()
updateQuote(1, { content: 'Stay hungry. Stay foolish.', author: 'Jobs' })
// console.log(quotes)

// TODO: Print all quotes using getAllQuotes()
// console.log(getAllQuotes())


//=============================================================================
// 7. เขียนฟังก์ชัน createFilter(minPrice) ที่ return function filter array ของสินค้า
function createFilter(minPrice) {
  return function(products) {
    return products.filter(p => p.price > minPrice);
  };
}

const products = [
  { id: 1, price: 5 },
  { id: 2, price: 50 },
  { id: 3, price: 100 }
];

const filter50 = createFilter(50);
console.log(filter50(products));

// 8. เขียน bankAccount(initialBalance) ที่ return object { deposit, withdraw, getBalance }
function bankAccount(initialBalance){
  return{
    deposit: function(deposit){
      if(deposit >= 0){
        initialBalance += deposit
      }
    },
    withdraw: function(withdraw){
      if(withdraw >= 0 && withdraw <= initialBalance){
        initialBalance -= withdraw
      }
    },
    getBalance: function(){
      return initialBalance
    }
  }
}

const acc = bankAccount(100)
acc.deposit(50)
acc.withdraw(30)
console.log(acc.getBalance())


// เขียนฟังก์ชันให้ return object ที่สรุปยอด
function getCartSummary(cart){
  return function(){
    return cart.reduce((acc,item) => {
      acc.totalItems += item.qty
      acc.totalPrice += item.qty * item.price
      return acc;
    },{ totalItems: 0, totalPrice: 0 })
  }
}
const cart = [
  { name: "Book", price: 120, qty: 2 },
  { name: "Pen", price: 10, qty: 5 },
  { name: "Notebook", price: 50, qty: 3 }
]
const summaryFn = getCartSummary(cart)
console.log(summaryFn()) 
