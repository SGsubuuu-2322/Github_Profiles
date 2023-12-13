const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");

// function getUsers(username) {
//   axios(APIURL + username)
//     .then((res) => console.log(res.data))
//     .catch((error) => console.log(error));
// }

async function getUsers(username) {
  try {
    const { data } = await axios(APIURL + username);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
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
