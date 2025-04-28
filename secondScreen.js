document.addEventListener("DOMContentLoaded", () => {
  const selectedCarElement = document.getElementById("selected-car");
  selectedCarElement.textContent =
    localStorage.getItem("carName") || "Brak nazwy";

  const totalPriceElement = document.getElementById("total-price");
  var totalPrice = parseInt(localStorage.getItem("carPrice") || "0");

  function updateTotalPriceText() {
    totalPriceElement.textContent = totalPrice.toLocaleString("pl-PL", {
      style: "currency",
      currency: "PLN",
    });
  }
  updateTotalPriceText();

  const backButton = document.getElementById("back-button");
  backButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });

  const form = document.getElementById("purchase-form");

  // Ensure only one payment method can be selected
  const paymentInputs = form.querySelectorAll('input[name="payment"]');
  paymentInputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) {
        paymentInputs.forEach((otherInput) => {
          if (otherInput !== input) {
            otherInput.disabled = true;
          }
        });
      } else {
        paymentInputs.forEach((otherInput) => {
          otherInput.disabled = false;
        });
      }
    });
  });

  const serviceInputs = form.querySelectorAll('input[name="service"]');
  serviceInputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) {
        totalPrice += parseInt(input.getAttribute("value"));
      } else {
        totalPrice -= parseInt(input.getAttribute("value"));
      }
      updateTotalPriceText();
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Collect other form data
    const pickupLocation = form.querySelector("#pickup-location").value;
    const pickupDate = form.querySelector("#pickup-date").value;

    // Store the chosen date in localStorage
    localStorage.setItem("pickupDate", pickupDate);
    localStorage.setItem("pickupLocation", pickupLocation);
    localStorage.setItem("totalPrice", totalPrice);

    // Redirect to the third screen
    window.location.href = "thirdScreen.html";
  });
});
