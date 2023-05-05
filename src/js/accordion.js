const panels = document.querySelectorAll(".faq__item");

for (let panel of panels) {
  panel.addEventListener("click", (evt) => {
    let panelTarget = evt.currentTarget;
    if (panelTarget.classList.contains("active")) {
      panelTarget.classList.remove("active");
    } else {
      for (let panel of panels) {
        panel.classList.remove("active");
      }
      panelTarget.classList.add("active");
    }
  })
}