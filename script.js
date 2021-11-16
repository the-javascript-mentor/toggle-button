document
  .getElementById("toggle-button-1")
  .addEventListener("click", (event) => {
    console.log("Toggle button 1 was toggled", event.target.checked);
  });

document
  .getElementById("toggle-button-2")
  .addEventListener("click", (event) => {
    console.log("Toggle button 2 was toggled", event.target.checked);
  });

document
  .getElementById("toggle-button-3")
  .addEventListener("click", (event) => {
    console.log("Toggle button 3 was toggled", event.target.checked);
  });
