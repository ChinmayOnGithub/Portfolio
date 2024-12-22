document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: "Product 1", price: 49.9454 },
        { id: 2, name: "Product 2", price: 19.99 },
        { id: 3, name: "Product 3", price: 69.99 },
    ];
    const cart = JSON.parse(localStorage.getItem('cart-items')) || [];

    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart');
    const totalCartDisplay = document.getElementById('cart-total');
    const cartTotalPriceMessage = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');

    // render the cartItems in the localStorage.
    renderCart();


    // display products in div
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add('product');
        productDiv.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id="${product.id}">Add to cart</button>
        `;

        productList.appendChild(productDiv);
    });

    // add product to cart button (event)
    productList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const product = products.find((p) => p.id === productId);
            addToCart(product);
        }
    });

    // add product to cart function
    function addToCart(product) {
        cart.push(product);
        renderCart();
    }

    function renderCart() {
        cartItems.innerText = "";
        console.log(cart.length);
        let totalPrice = 0;


        if (cart.length > 0) {
            cart.forEach((item, index) => {
                emptyCartMessage.classList.add('hidden');
                totalCartDisplay.classList.remove('hidden');

                totalPrice += item.price;

                const cartItem = document.createElement('div');
                cartItem.innerHTML = `
                ${item.name} - $${item.price.toFixed(2)}
                <button index=${index}>delete</button>
                `;

                cartItems.appendChild(cartItem);
                cartTotalPriceMessage.textContent = `$${totalPrice.toFixed(2)}`
            })
        } else {
            totalCartDisplay.classList.add('hidden');
            cartItems.textContent = `Your cart is empty.`
            cartTotalPriceMessage.textContent = `$0.00`
        }
        saveData();
    }

    // delete the  cartItem when button is clicked
    cartItems.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const indexCartItem = e.target.getAttribute('index');
            deleteFromCart(indexCartItem);
            renderCart();
        }
    })
    // delete function to delete the cartItems
    function deleteFromCart(index) {
        cart = 
    }

    // checkout button
    checkoutBtn.addEventListener('click', () => {
        cart.length = 0;
        alert("Checkout successfully!");
        // emptyCartMessage.classLisft.remove('hidden');
        renderCart();
    });



    //localStorage implementation
    function saveData() {
        localStorage.setItem('cart-items', JSON.stringify(cart));
    }

});
