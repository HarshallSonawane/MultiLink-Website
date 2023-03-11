const packageSelect = document.getElementById("package");
const planSelect = document.getElementById("plan");

packageSelect.addEventListener("change", () => {
  // Clear the plans select options
  planSelect.innerHTML = "<option value=''>--Select--</option>";

  // Get the selected package value
  const selectedPackage = packageSelect.value;

  // Add plan options based on the selected package
  if (selectedPackage === "Internet") {
    addOptions(["30 Mbps", "50 Mbps", "100 Mbps", "200 Mbps", "300 Mbps"]);
  } else if (selectedPackage === "T.V. Cable") {
    addOptions(["Silver", "Gold", "Platinum"]);
  } else if (selectedPackage === "Combo Plans") {
    addOptions(["Stay Tuned", "Stay Tuned", "Stay Tuned"]);
  }
});

function addOptions(options) {
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.text = option;
    planSelect.add(optionElement);
  });
}
