document.addEventListener("DOMContentLoaded", () => {
  renderAllAchievements();
  setupResumeButton();
});

/* ==========================================================
   RENDER ALL ACHIEVEMENTS
========================================================== */

function renderAllAchievements() {
  const container = document.getElementById("achievementsContainer");
  const master = achievementsData.MASTER_LIST;

  Object.keys(master).forEach(id => {
    const card = document.createElement("div");
    card.className = "achievement-card";

    card.innerHTML = `
      <div class="ach-number">Achievement #${id}</div>
      <div class="ach-text">${master[id]}</div>
    `;

    container.appendChild(card);
  });
}

/* ==========================================================
   RESUME BUTTON LOGIC
========================================================== */

function setupResumeButton() {
  const btn = document.getElementById("generateResumeBtn");
  const input = document.getElementById("achievementInput");

  btn.addEventListener("click", () => {
    const raw = input.value.trim();

    if (!raw) {
      alert("Please enter achievement numbers.");
      return;
    }

    const numbers = raw
      .split(",")
      .map(n => parseInt(n.trim(), 10))
      .filter(n => !isNaN(n) && achievementsData.MASTER_LIST[n]);

    if (numbers.length === 0) {
      alert("No valid achievement numbers found.");
      return;
    }

    localStorage.setItem("ETS_SELECTED_ACHIEVEMENTS", JSON.stringify(numbers));

    window.location.href = "resume.html";
  });
}
