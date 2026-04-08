const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");
const panelTitle = document.querySelector("#panel-title");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;
    const targetPanel = document.getElementById(targetId);

    tabButtons.forEach((item) => item.classList.remove("active"));
    tabPanels.forEach((panel) => panel.classList.remove("active"));

    button.classList.add("active");
    targetPanel.classList.add("active");
    panelTitle.textContent = button.textContent === "About" ? "About Me" : button.textContent;
  });
});
