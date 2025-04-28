const carOptions = [
  {
    name: "Audi A4",
    imgSrc: "images/Audi.jpg",
    year: "2020",
    fuel: "Benzyna",
    power: "150",
    usage: "50 000",
    price: 150_000,
  },
  {
    name: "Lamborghini",
    imgSrc: "images/Lamborghini.jpg",
    year: "2021",
    fuel: "Benzyna",
    power: "600",
    usage: "10 000",
    price: 1_200_000,
  },
  {
    name: "Mercedes AMG C-63",
    imgSrc: "images/Mercedes.jpg",
    year: "2022",
    fuel: "Benzyna",
    power: "200",
    usage: "20 000",
    price: 250_000,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const carSelection = document.querySelector(".car-selection");

  carOptions.forEach((option) => {
    const optionDiv = document.createElement("div");
    optionDiv.classList.add("car-option");
    const text = `${option.name}, ${option.year}, \
      ${option.fuel}, ${option.power} KM, ${option.usage} km, \
      ${option.price.toLocaleString()} PLN`;
    optionDiv.innerHTML = `
      <img src="${option.imgSrc}" alt="${option.name}" class="car-image" />
      <p>${text}</p>
    `;
    carSelection.appendChild(optionDiv);

    optionDiv.addEventListener("click", () => {
      localStorage.setItem("carName", option.name);
      localStorage.setItem("carPrice", option.price);
      localStorage.setItem("carImgSrc", option.imgSrc);

      window.location.href = "secondScreen.html";
    });
  });
});
