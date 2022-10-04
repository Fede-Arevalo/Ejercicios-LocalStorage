const firstName = document.getElementById("firstName");
const email = document.getElementById("email");
const message = document.getElementById("message");
const btnReset = document.getElementById("btnReset");

const arrUsers = [];

function save(e) {
  e.preventDefault();

  const person = {
    name: firstName.value,
    email: email.value,
    message: message.value,
  };

  arrUsers.push(person);

  localStorage.setItem("user", JSON.stringify(arrUsers));

  const users = JSON.parse(localStorage.getItem("user"));
  console.log(users);

  const user = users[users.length - 1];

  let divUser = document.createElement("div");
  document.body.appendChild(divUser);
  divUser.innerHTML = `<p><b>Name: </b>${user.name}</p> 
  <p><b>Email: </b>${user.email}</p> 
  <p><b>Mesaage: </b>${user.message}</p>`;
}

boton.addEventListener("click", save);

//////////

function reset() {
  localStorage.clear();
}

btnReset.addEventListener("click", reset);



