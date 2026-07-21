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

/* ===== VERSENY EREDMÉNY POPUP ===== */

const raceResultCards = document.querySelectorAll(".race-result-trigger");
const resultsModal = document.querySelector("#raceResultsModal");
const resultsModalWeek = document.querySelector("#resultsModalWeek");
const resultsModalType = document.querySelector("#resultsModalType");
const resultsModalTitle = document.querySelector("#resultsModalTitle");
const resultsModalContent = document.querySelector("#resultsModalContent");
const resultsModalCloseItems = document.querySelectorAll("[data-close-results]");

function openRaceResults(card) {
  if (!resultsModal || !resultsModalContent) return;

  const week = card.dataset.weekLabel || "Week";
  const raceType = card.dataset.raceType || "Verseny";
  const track = card.dataset.track || "Pálya neve";
  const template = card.querySelector(".race-results-template");

  resultsModalWeek.textContent = week;
  resultsModalType.textContent = raceType;
  resultsModalTitle.textContent = `${track} eredmények`;

  if (template) {
    resultsModalContent.innerHTML = template.innerHTML;
  } else {
    resultsModalContent.innerHTML = "";
  }

  resultsModal.classList.add("open");
  resultsModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeRaceResults() {
  if (!resultsModal) return;

  resultsModal.classList.remove("open");
  resultsModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

raceResultCards.forEach((card) => {
  card.addEventListener("click", () => {
    openRaceResults(card);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openRaceResults(card);
    }
  });
});

resultsModalCloseItems.forEach((item) => {
  item.addEventListener("click", closeRaceResults);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeRaceResults();
  }
});
