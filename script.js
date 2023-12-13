const APIURL = "https://api.github.com/users/";

getUsers("SGsubuuu-2322");

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
