function addToCart() {
    cart_number = document.getElementById("cart").innerHTML.toString()
    increase_cart_number = parseInt(cart_number) + 1
    document.getElementById("cart").innerHTML = increase_cart_number
}
