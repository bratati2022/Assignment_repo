import axios from "axios";

export async function POST(URL, body) {
  var res;
  await axios({
    method: "POST",
    url: `${"https://car-auction-assignment.herokuapp.com/" + URL}`,
    data: body,
  })
    .then((responseJSON) => {
      res = responseJSON;
    })
    .catch((error) => {
      res = error;
    });
  return res;
}

// export async function GET(URL, token) {
//   var res;
//   await axios({
//     method: "GET",
//     url: `${"http://111.93.169.90:4011/" + URL}`,
//     headers: {
//       Authorization: `Token ${token}`,
//       "Content-Type": "application/json",
//     },
//   })
//     .then((responseJSON) => {
//       res = responseJSON;
//     })
//     .catch((error) => {
//       res = error;
//     });
//   return res;
// }
