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


getUser(1);
getUsers();