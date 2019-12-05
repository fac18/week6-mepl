const newUser = document.getElementById("new-username");
const nameBtn = document.getElementById("nameBtn");
const nameField = document.getElementsByClassName("nameField")[0];
console.log(nameField);
const displayUsername = document.getElementsByClassName("displayUsername")[0];
// const weatherSection = document.querySelector(".weather-container");

nameBtn.addEventListener("click", event => {
  event.preventDefault();
  if (newUser.value) {
    let yourName = newUser.value;
    // let xhr = new XMLHttpRequest();
    // let url = `http://localhost:5500/index.html?`;
    nameField.style.display = "none";
    var para = document.createElement("p");
    para.classList.add("NWrapper");
    var displayUser = document.createTextNode(
      `Hi ${yourName}, get started on your 5 a day!`
    ); // Create a text node
    para.appendChild(displayUser);
    displayUsername.appendChild(para);

    // xhr.onreadystatechange = () => {
    //   if (xhr.readyState == 4 && xhr.status == 200) {
    //     let originLocation = JSON.parse(xhr.responseText);

    //   }
    // };
    // xhr.open("GET", url, true);
    // xhr.send();
  }
});

const getStock = () => {
  const xhr = new XMLHttpRequest();
  const url = "/getstock";
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const stockArray = JSON.parse(xhr.responseText);
      populateStockTable(stockArray);
    }
  };
  xhr.open("GET", url);
  xhr.send();
};

window.addEventListener("load", getStock);

// add stock items to client side via DOM manipulation
const populateStockTable = arr => {
  const stockTable = document.querySelector(".stock_table tbody");

  while (stockTable.children.length > 1) {
    stockTable.removeChild(stockTable.lastChild);
  }

  arr.forEach((item, index) => {
    let newItem = document.createElement("tr");
    // Item details filled in
    let newItemName = document.createElement("td");
    newItemName.innerText = item.item_name;
    newItem.appendChild(newItemName);
    let newItemQuantity = document.createElement("td");
    newItemQuantity.innerText = item.item_quantity;
    newItem.appendChild(newItemQuantity);
    let newItemPrice = document.createElement("td");
    newItemPrice.innerText = item.item_price;
    newItem.appendChild(newItemPrice);
    let newItemButton = document.createElement("button");
    newItemButton.innerText = "Add to basket";
    newItemButton.classList.add("add-to-basket");
    newItemButton.setAttribute("onclick", `addToBasket('${item.item_name}')`);
    newItem.appendChild(newItemButton);
    // Full new row added
    stockTable.appendChild(newItem);
  });
};

const addToBasket = itemName => {
  const xhr = new XMLHttpRequest();
  const url = `/addItemName=${itemName}`;
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const updatedBasket = JSON.parse(xhr.responseText);
      //update inventory
      getStockData();
      // getUserData();
      getBasket(updatedBasket);
    }
  };
  xhr.open("GET", url);
  xhr.send();
};
