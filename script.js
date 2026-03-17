let cart = [];

function addToCart(itemName, price, quantityId) {
  const quantity = parseInt(document.getElementById(quantityId).value);

  if (quantity <= 0 || isNaN(quantity)) {
    alert("Please enter a valid quantity.");
    return;
  }

  const existingItem = cart.find(item => item.name === itemName);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      name: itemName,
      price: price,
      quantity: quantity
    });
  }

  alert(itemName + " added to cart!");
}

function showCart() {
  const cartSection = document.getElementById("cartSection");
  const cartItemsDiv = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const deliveryFormSection = document.getElementById("deliveryFormSection");

  cartSection.style.display = "block";
  deliveryFormSection.style.display = "block";

  cartItemsDiv.innerHTML = "";

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.innerHTML = "<strong>Total: ₹0</strong>";
    return;
  }

  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    cartItemsDiv.innerHTML += `
      <p>${item.name} - ₹${item.price} x ${item.quantity} = <strong>₹${itemTotal}</strong></p>
    `;
  });

  cartTotal.innerHTML = `<strong>Total: ₹${total}</strong>`;
}

function placeOrder(event) {
  event.preventDefault();

  if (cart.length === 0) {
    alert("Your cart is empty. Please add items before placing an order.");
    return;
  }

  const confirmationSection = document.getElementById("confirmationSection");
  confirmationSection.style.display = "block";

  document.getElementById("deliveryForm").reset();
  cart = [];

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
}