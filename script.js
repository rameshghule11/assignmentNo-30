const quantityElements = document.getElementsByClassName("quantity")

function inc(event){
    const quantityContainer = event.target.parentElement.querySelector(".quantity");
    let quantity = parseInt(quantityContainer.innerText);
    quantityContainer.innerText = ++quantity;
}