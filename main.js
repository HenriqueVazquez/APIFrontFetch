const url = "http://localhost:5500/api"

function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => rederApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error));
}

function getUser(id) {
  fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name;
      userCity.textContent = data.city;
      userAvatar.src = data.avatar;
    })
    .catch(error => console.error(error));
}

function addUser(newUser) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(data => alertAPI.textContent = data)
    .catch(error => console.error(error));
}

function updateUser(id, updatedUser) {
  fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedUser),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(data => alertAPI.textContent = data)
    .catch(error => console.error(error));
}

const newUser = {
  name: "Karen Tatiane",
  avatar: "https://thumbs.gfycat.com/FickleWaryBrocketdeer-size_restricted.gif",
  city: "São Paulo"

}

const updatedUser = {
  name: "Sophia Vazquez",
  avatar: "https://i.pinimg.com/originals/5f/09/b3/5f09b35c6fc0ba3c97cd09538926c8b6.gif",
  city: "São Paulo"
}


//addUser(newUser);
updateUser(3, updatedUser);
getUser(3);
getUsers();