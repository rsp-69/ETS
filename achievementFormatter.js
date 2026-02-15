function formatAchievement(rawText) {
  const verbMatch = rawText.match(/^[A-Za-z-]+/);
  const verb = verbMatch ? verbMatch[0] : "Delivered";
  const remainder = rawText.replace(verb, "").trim();
  return `${verb} ${remainder}`;
}

function generateResumeBullets(ids, masterList) {
  return ids.map(id => {
    const key = String(id);
    const raw = masterList[id] || masterList[key];

    if (!raw) {
      console.warn(`Missing achievement for ID ${id}`);
      return `[Missing achievement for ID ${id}]`;
    }

    return formatAchievement(raw);
  });
}