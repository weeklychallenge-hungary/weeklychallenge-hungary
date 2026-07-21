const seasonTabs = document.querySelectorAll(".season-tab");
const seasonPanels = document.querySelectorAll(".season-panel");
const weekCards = document.querySelectorAll(".week-card");
const weekPanels = document.querySelectorAll(".week-panel");

seasonTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.season;

    seasonTabs.forEach((item) => item.classList.remove("active"));
    seasonPanels.forEach((item) => item.classList.remove("open"));
    weekCards.forEach((item) => item.classList.remove("active"));
    weekPanels.forEach((item) => item.classList.remove("open"));

    tab.classList.add("active");
    document.querySelector(`#${target}`).classList.add("open");
  });
});

weekCards.forEach((card) => {
  card.addEventListener("click", () => {
    const target = card.dataset.week;
    const panel = document.querySelector(`#${target}`);
    const isOpen = card.classList.contains("active");

    weekCards.forEach((item) => item.classList.remove("active"));
    weekPanels.forEach((item) => item.classList.remove("open"));

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
