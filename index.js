// Add your code here

const submitData = {
  userName: "Morgan",
  userEmail: "420morganjason@gmail.com",
};

const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(submitData),
};

fetch("http://localhost:3000/dogs", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  })
   .catch(function (error) {
    alert("Vitu Mbaya! Toka Hapo!");
    console.log(error.alert());
  });