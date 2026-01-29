document.addEventListener("DOMContentLoaded", () => {
  renderAllAchievements();
  setupResumeButton();
  glowCrossfade();
  setupGlowHover();
});

/* ==========================================================
   CONTROLLED RANDOM CROSSFADE GLOW SYSTEM (4s total)
========================================================== */

let glowActive = true;

// Recent history buffer
let recent = [];
const RECENT_LIMIT = 5;

// Controlled random selection
function pickCard(cards) {
  let index;

  do {
    index = Math.floor(Math.random() * cards.length);
  } while (recent.includes(index));

  // Add to history
  recent.push(index);

  // Trim history
  if (recent.length > RECENT_LIMIT) {
    recent.shift();
  }

  return cards[index];
}

async function glowCrossfade() {
  const cards = document.querySelectorAll(".achievement-card");

  while (glowActive) {
    // Pick card with cooldown logic
    const card = pickCard(cards);

    // Fade in (0 → 0.45) over 800ms
    card.style.setProperty("--glow-strength", "0.45");
    await wait(800);

    // Start fading out (0.45 → 0) over 3200ms
    card.style.setProperty("--glow-strength", "0.15");

    // After 1066ms, start next card (crossfade trigger)
    await wait(1066);

    // Pick next card with cooldown logic
    const nextCard = pickCard(cards);
    nextCard.style.setProperty("--glow-strength", "0.45");

    // Finish fading out old card (remaining 2134ms)
    await wait(2134);
    card.style.setProperty("--glow-strength", "0");

    // Begin fading out the new card
    nextCard.style.setProperty("--glow-strength", "0.15");
  }
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* ==========================================================
   HOVER OVERRIDE
========================================================== */

function setupGlowHover() {
  const cards = document.querySelectorAll(".achievement-card");

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      glowActive = false;

      cards.forEach(c => {
        c.style.setProperty("--glow-strength", "0");
      });

      card.style.setProperty("--glow-strength", "0.65");
    });

    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--glow-strength", "0");
      glowActive = true;
      glowCrossfade();
    });
  });
}

/* 
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
