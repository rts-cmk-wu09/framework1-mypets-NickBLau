import axios from "axios";
axios
  .post(
    "https://api.petfinder.com/v2/oauth2/token",
    JSON.stringify({
      grant_type: "client_credentials",
      client_id: "s8uTJwA9vncqWUcyqzK0ONPWjgIFSTaBtDRUnrdWxNn1ratXFK",
    }),
    { headers: { "content-type": "application/json" } }
  )
  .then((res) => console.log(res.data));
