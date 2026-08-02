document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".schedule[data-start-date]").forEach((schedule) => {
    const [year, month, day] = schedule.dataset.startDate.split("-").map(Number);
    const startDate = new Date(year, month - 1, day, 12);

    schedule.querySelectorAll("tbody tr").forEach((row, index) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + index * 7);
      row.querySelector("[data-schedule-date]").textContent = date
        .toLocaleDateString("pt-BR");
    });
  });

  const buttons = document.querySelectorAll(".tab-button");
  const panels = document.querySelectorAll(".tab-panel");

  const setActive = (targetId) => {
    buttons.forEach((btn) => {
      const isActive = btn.dataset.target === targetId;
      btn.classList.toggle("active", isActive);
    });

    panels.forEach((panel) => {
      const isActive = panel.id === targetId;
      panel.classList.toggle("active", isActive);
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      if (targetId) setActive(targetId);
    });
  });
});
