const newUser = document.getElementById("new-username");
const nameBtn = document.getElementById("nameBtn");
const nameField = document.getElementsByClassName('nameField')[0];
console.log(nameField);
const displayUsername = document.getElementsByClassName('displayUsername')[0];
// const weatherSection = document.querySelector(".weather-container");

nameBtn.addEventListener("click", event => {
  event.preventDefault();
  if (newUser.value) {
    let yourName = newUser.value;
    // let xhr = new XMLHttpRequest();
    // let url = `http://localhost:5500/index.html?`;
    nameField.style.display = 'none';
    var para = document.createElement("p");
    para.classList.add('NWrapper')
    var displayUser = document.createTextNode(`Hi ${yourName}, get started on your 5 a day!`); // Create a text node
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

