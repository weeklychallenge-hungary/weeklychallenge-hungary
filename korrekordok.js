const cards = document.querySelectorAll(".record-card");
const panels = document.querySelectorAll(".record-panel");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const target = card.dataset.target;
    const panel = document.querySelector(`#panel-${target}`);
    const isOpen = card.classList.contains("active");

    cards.forEach((item) => item.classList.remove("active"));
    panels.forEach((item) => item.classList.remove("open"));

    if (!isOpen) {
      card.classList.add("active");
      panel.classList.add("open");
      panel.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
