function formatAchievement(rawText) {
  const verbMatch = rawText.match(/^[A-Za-z-]+/);
  const verb = verbMatch ? verbMatch[0] : "Delivered";
  const remainder = rawText.replace(verb, "").trim();
  return `${verb} ${remainder}`;
}

function generateResumeBullets(ids, masterList) {
  return ids.map(id => {
    const raw = masterList[id];
    if (!raw) return `[Missing achievement for ID ${id}]`;
    return formatAchievement(raw);
  });
}