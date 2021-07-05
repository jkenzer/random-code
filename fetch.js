const fetch = require("node-fetch");
const { getHeapCodeStatistics } = require("node:v8");

async function getData() {
  return await fetch("https://data-faker.herokuapp.com/collection", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      amountOfRecords: 10,
      recordMetadata: {
        name: "name",
        email: "email",
        website: "url",
        amount: "currency",
        phone: "phoneNumber",
        closeAt: "dateInFuture",
      },
    }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
}

data = getData();
console.log(data);
