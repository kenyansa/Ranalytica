function rentData() {
  var addressValue = document.getElementById("address").value;
  var propertyTypeValue = document.getElementById("propertyType").value;
  var squareFootageValue = document.getElementById("squareFootage").value;
  var rentAmountValue = document.getElementById("rentAmount").value;
  var bedroomsValue = document.getElementById("bedrooms").value;
  var bathroomsValue = document.getElementById("bathrooms").value;
  var compCountValue = document.getElementById("compCount").value;
console.log(
  "--------------",
  addressValue,
  propertyTypeValue,
  squareFootageValue,
  rentAmountValue,
  bedroomsValue,
  bathroomsValue,
  compCountValue
);
  var myHeaders = new Headers();
  myHeaders.append(
    "X-RapidAPI-Host",
    " realtymole-rental-estimate-v1.p.rapidapi.com"
  );
  myHeaders.append(
    "X-RapidAPI-Key",
    " 34b4bff699mshb59a8acfe51d6dap1eac04jsn3074c3659394"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice?propertyType=Apartment&address=5500 Grand Lake Drive, San Antonio, TX&bathrooms= 2&compCount= 5&squareFootage= 1600&bedrooms= 4",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
