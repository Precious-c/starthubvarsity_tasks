const button = document.querySelector("#toggleMeButton");
const toggleItem = document.querySelector("#toggleMe");

button.addEventListener("click", handleClick);

function handleClick() {
  if (toggleItem.className === "hide") {
    toggleItem.className = "";
    button.textContent = "Hide Socials";
  } else {
    toggleItem.className = "hide";
    button.textContent = "Show my Socials";
    console.log(toggleItem.className);
  }
}
