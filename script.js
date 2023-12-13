const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const main = document.getElementById("main");
const search = document.getElementById("search");

// function getUsers(username) {
//   axios(APIURL + username)
//     .then((res) => console.log(res.data))
//     .catch((error) => console.log(error));
// }

async function getUsers(username) {
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard("No profile with this user_name...");
    }
  }
}

function createUserCard(user) {
  const cardHTML = `
  <div class="card">
  <div>
    <img
      src="${user.avatar_url}"
      alt="${user.name}"
      class="avatar"
    />
  </div>
  <div class="user-info">
    <h2>${user.name}</h2>
    <p>${user.bio}</p>
    <ul>
      <li>${user.followers}<strong>Followers</strong></li>
      <li>${user.following}<strong>Following</strong></li>
      <li>${user.public_repos}<strong>Repos</strong></li>
    </ul>

    <div id="repos"></div>
  </div>
</div>
  `;

  main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  const errorCard = `
    <div class="card">
      <h1>${msg}</h1>    
    </div>  
  `;

  main.innerHTML = errorCard;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUsers(user);
    user = "";
  } else {
    console.log("Please enter something...");
  }
});
