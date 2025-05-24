document.addEventListener("DOMContentLoaded", () => {
  const deliveryDateElement = document.getElementById("delivery-date");

  // Retrieve the chosen date from localStorage
  const chosenDate = localStorage.getItem("pickupDate") || "Brak daty";

  // Display the chosen date
  deliveryDateElement.textContent = chosenDate;

  // Retrieve and display other summary details if needed
  const summaryElement = document.getElementById("summary");
  const carName = localStorage.getItem("carName") || "Brak nazwy";
  const carPrice = localStorage.getItem("totalPrice");
  const carPriceText = carPrice
    ? parseInt(carPrice).toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      })
    : "Brak ceny";

  summaryElement.innerHTML = `
    <p><strong>Wybrane auto:</strong> ${carName}</p>
    <p><strong>Cena całkowita:</strong> ${carPriceText}</p>
  `;

  const imgElement = document.getElementById("car-image");
  imgElement.setAttribute("src", localStorage.getItem("carImgSrc") || "");
  imgElement.setAttribute("alt", "Zdjęcie kupionego auta");
});
