function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Busca si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1; // Incrementa la cantidad
    } else {
        // Agrega un nuevo producto
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    // Actualiza el almacenamiento local
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} ha sido añadido al carrito.`);
}
