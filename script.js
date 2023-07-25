function calculateTip(event) {
  event.preventDefault();

  const bill = document.getElementById("bill").value;
  const serviceQuality = document.getElementById("serviceQuality").value;
  const amountOfPeople = document.getElementById("amountOfPeople").value;

  // If the value of bill or serviceQuality is empty or equal to 0, the code returns and does not execute the rest of the function.
  if ((bill == "") | (serviceQuality == 0)) {
    return;
  }

  // If the value of amountOfPeople is empty or less than or equal to 1, the code sets amountOfPeople to 1 and hides the element with id "each" using.

  // Otherwise, if amountOfPeople is greater than 1, the code displays the "each" element.

  if ((amountOfPeople == "") | (amountOfPeople <= 1)) {
    amountOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  // Calculates the tip, storing the result in the "total" variable.
  const total = (bill * serviceQuality) / amountOfPeople;
  total.toFixed(2);

  // Updates the content of the element with id "tip" to display the ongoing tip amount.
  document.getElementById("tip").innerHTML = total;

  // Makes element with id "tipTotal" visible by setting display property to "block"
  document.getElementById("tipTotal").style.display = "block";
}

// Setting the display style of elements to "none" initially so that they are not displayed on the page when it loads.
document.getElementById("tipTotal").style.display = "none";
document.getElementById("each").style.display = "none";

//Adding an event listener to the form that calls the calculateTip function when the form is submitted.
document.getElementById("tipForm").addEventListener("submit", calculateTip);
