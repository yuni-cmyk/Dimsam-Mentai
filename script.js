let orderList = [];

function addToOrder(item) {
    orderList.push(item);
    displayOrder();
}

function displayOrder() {
    const orderListElement = document.getElementById('order-list');
    orderListElement.innerHTML = '';

    orderList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        orderListElement.appendChild(li);
    });
}