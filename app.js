let cart = [];

const addProduct = () => {
    const productName = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    if (productName && !isNaN(price) && !isNaN(quantity)) {
        const product = { productName, price, quantity };
        cart.push(product);
        updateCart();
    } else {
        alert("Please enter valid product details.");
    }
};

const calculateTotal = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
};

const removeProduct = (name) => {
    cart = cart.filter(product => product.productName !== name);
    updateCart();
};

const updateCart = () => {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(({ productName, price, quantity }) => {
        const li = document.createElement('li');
        li.textContent = `Product: ${productName}, Price: $${price.toFixed(2)}, Quantity: ${quantity}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeProduct(productName));
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });
    document.getElementById('totalCost').textContent = `Total Cost: $${calculateTotal().toFixed(2)}`;
};

document.getElementById('addProduct').addEventListener('click', addProduct);