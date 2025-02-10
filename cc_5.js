// Task 1 - Customer Profile
let customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
};
console.log(`Customer Name: ${customer.name}`);
console.log(`Customer Age: ${customer.age}`);
console.log(`Customer Email: ${customer.email}`);


// Task 2 - Order Details
let order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder: function() {
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Total Amount: ${this.totalAmount}`);
        console.log(`Status: ${this.status}`);
    }
};

order.displayOrder();


// Task 3 - Shopping Cart
let cartItems = ["Apple", "Grape", "Orange"];

cartItems.push("Grapes");  // Add to the end
cartItems.pop();  // Remove from the end
cartItems.unshift("Banana");  // Add to the beginning
cartItems.shift();  // Remove from the beginning

console.log(cartItems);  // Log final cart items


// Task 4 - Price Adjustments
let prices = [100, 200, 300];

let discountedPrices = prices.map(price => price * 0.9);  // Apply 10% discount
console.log(discountedPrices);


// Task 5 - Product Availability
let inventory = [5, 0, 12, 8, 0];

let availableProducts = inventory.filter(quantity => quantity > 0);
console.log(availableProducts);