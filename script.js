const quantityElements = document.getElementsByClassName("quantity")

function inc(event){
    const quantityContainer = event.target.parentElement.querySelector(".quantity");
    let quantity = parseInt(quantityContainer.innerText);
    quantityContainer.innerText = ++quantity;
}

function dec(event){
    const quantityContainer = event.target.parentElement.querySelector(".quantity");
    let quantity = parseInt(quantityContainer.innerText);
    if (quantity > 1) {
        quantityContainer.innerText = --quantity;
    }
}