const translations = {
  en: {
    eyebrow: "Evidence before hype", title: "Build your AI stack for <em>$0</em>.", subtitle: "A human-reviewable map of free AI tools, models, APIs, compute, and courses — with limits, privacy, licenses, and official sources.",
    resources: "verified resources", categories: "useful categories", openSourceResources: "open-source resources", noAccountResources: "without an account", latest: "latest verification",
    pathsKicker: "Start with your goal", pathsTitle: "Find your path in one click.", showEverything: "Show everything",
    pathBeginnerTitle: "I am starting", pathBeginnerCopy: "Useful tools and guided learning with the lowest barrier.",
    pathPrivateTitle: "I need privacy", pathPrivateCopy: "Local tools that can keep inference on your hardware.",
    pathBuilderTitle: "I build AI apps", pathBuilderCopy: "APIs, coding agents, app builders, RAG, and orchestration.",
    pathAdvancedTitle: "I run AI systems", pathAdvancedCopy: "Serving, vector databases, evaluation, and ML frameworks.",
    trustKicker: "Trust model", trustTitle: "Free should mean something.",
    proofTitle: "Official proof", proofCopy: "Every claim links to provider documentation, pricing, or the official repository.",
    limitsTitle: "Real limits", limitsCopy: "Accounts, cards, quotas, hardware, privacy, and licenses are visible before you commit.",
    reviewTitle: "Reviewed change", reviewCopy: "Automation detects changes; material claims still require evidence review.",
    exploreKicker: "Explore", catalogTitle: "Find the right free resource", searchLabel: "Search resources", searchPlaceholder: "Search tools, use cases, or tags…",
    categoryLabel: "Category", freeLabel: "Free access", accessLabel: "Access", levelLabel: "Level", platformLabel: "Platform", sortLabel: "Sort",
    sortName: "Name", sortNewest: "Newest verification", sortBeginner: "Beginner first", reset: "Reset filters",
    emptyTitle: "No matching resources", emptyCopy: "Try fewer filters or a broader search.",
    footerCopy: "Useful at $0. Honest about the catch.", contribute: "Contribute", method: "Verification method", fullCatalog: "Full catalog",
    bestFor: "Best for", source: "Official source", verified: "Verified", details: "Details", compare: "Compare", close: "Close", clear: "Clear",
    compareTitle: "Compare resources", compareKicker: "Decision table", compareHeading: "Compare before you commit.",
    account: "Account required", card: "Payment card required", privacy: "Privacy", commercial: "Commercial use", license: "License", limitsField: "Limits", caveats: "Caveats",
    noAccount: "No account", noCard: "No card", allCategories: "All categories", allTypes: "All types", allAccess: "Local and cloud", allLevels: "Every level", allPlatforms: "Every platform",
    yes: "Yes", no: "No", maxCompare: "Choose up to three resources."
  },
  fr: {
    eyebrow: "Les preuves avant le battage", title: "Construis ta stack IA pour <em>0 $</em>.", subtitle: "Une carte vérifiable des outils, modèles, API, ressources de calcul et cours gratuits — avec limites, confidentialité, licences et sources officielles.",
    resources: "ressources vérifiées", categories: "catégories utiles", openSourceResources: "ressources open source", noAccountResources: "sans compte", latest: "dernière vérification",
    pathsKicker: "Pars de ton objectif", pathsTitle: "Trouve ton parcours en un clic.", showEverything: "Tout afficher",
    pathBeginnerTitle: "Je débute", pathBeginnerCopy: "Outils utiles et apprentissage guidé avec le moins de friction.",
    pathPrivateTitle: "Je veux rester privé", pathPrivateCopy: "Outils locaux pouvant garder l’inférence sur ton matériel.",
    pathBuilderTitle: "Je construis des apps", pathBuilderCopy: "API, agents de code, constructeurs, RAG et orchestration.",
    pathAdvancedTitle: "J’opère des systèmes IA", pathAdvancedCopy: "Service, bases vectorielles, évaluation et frameworks ML.",
    trustKicker: "Modèle de confiance", trustTitle: "Gratuit doit vouloir dire quelque chose.",
    proofTitle: "Preuve officielle", proofCopy: "Chaque affirmation mène à la documentation, à la tarification ou au dépôt officiel.",
    limitsTitle: "Limites réelles", limitsCopy: "Comptes, cartes, quotas, matériel, confidentialité et licences sont visibles avant de choisir.",
    reviewTitle: "Changements révisés", reviewCopy: "L’automatisation détecte les changements; les affirmations importantes restent vérifiées.",
    exploreKicker: "Explorer", catalogTitle: "Trouve la bonne ressource gratuite", searchLabel: "Rechercher des ressources", searchPlaceholder: "Chercher un outil, un usage ou une étiquette…",
    categoryLabel: "Catégorie", freeLabel: "Gratuité", accessLabel: "Accès", levelLabel: "Niveau", platformLabel: "Plateforme", sortLabel: "Trier",
    sortName: "Nom", sortNewest: "Vérification récente", sortBeginner: "Débutant d’abord", reset: "Réinitialiser",
    emptyTitle: "Aucune ressource correspondante", emptyCopy: "Essaie moins de filtres ou une recherche plus large.",
    footerCopy: "Utile à 0 $. Honnête sur les limites.", contribute: "Contribuer", method: "Méthode de vérification", fullCatalog: "Catalogue complet",
    bestFor: "Idéal pour", source: "Source officielle", verified: "Vérifié", details: "Détails", compare: "Comparer", close: "Fermer", clear: "Effacer",
    compareTitle: "Comparer les ressources", compareKicker: "Tableau de décision", compareHeading: "Compare avant de choisir.",
    account: "Compte requis", card: "Carte de paiement requise", privacy: "Confidentialité", commercial: "Usage commercial", license: "Licence", limitsField: "Limites", caveats: "À savoir",
    noAccount: "Sans compte", noCard: "Sans carte", allCategories: "Toutes les catégories", allTypes: "Tous les types", allAccess: "Local et cloud", allLevels: "Tous les niveaux", allPlatforms: "Toutes les plateformes",
    yes: "Oui", no: "Non", maxCompare: "Choisis jusqu’à trois ressources."
  }
};

const freeLabels = {
  en: {"free-tier": "Free tier", freemium: "Freemium", "open-source": "Open source", "free-compute": "Free compute"},
  fr: {"free-tier": "Offre gratuite", freemium: "Freemium", "open-source": "Open source", "free-compute": "Calcul gratuit"}
};
const categoryLabels = {
  en: {agents: "Agents", api: "API", "app-builder": "App builder", assistant: "Assistant", coding: "AI coding", compute: "Compute", dataset: "Datasets", evaluation: "Evaluation", "image-generation": "Image generation", "inference-server": "Inference server", interface: "Interface", learning: "Learning", "local-runtime": "Local runtime", "ml-framework": "ML framework", "model-hub": "Model hub", rag: "RAG & documents", speech: "Speech", "vector-database": "Vector database"},
  fr: {agents: "Agents", api: "API", "app-builder": "Constructeur d’apps", assistant: "Assistant", coding: "Programmation IA", compute: "Calcul", dataset: "Jeux de données", evaluation: "Évaluation", "image-generation": "Génération d’images", "inference-server": "Serveur d’inférence", interface: "Interface", learning: "Apprentissage", "local-runtime": "Moteur local", "ml-framework": "Framework ML", "model-hub": "Catalogue de modèles", rag: "RAG et documents", speech: "Audio et parole", "vector-database": "Base vectorielle"}
};
const valueLabels = {
  en: {cloud: "Cloud", hybrid: "Hybrid", local: "Local", beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced", configurable: "Configurable", "provider-processed": "Provider processed", yes: "Yes", no: "No", depends: "Depends", "check-license": "Check license"},
  fr: {cloud: "Cloud", hybrid: "Hybride", local: "Local", beginner: "Débutant", intermediate: "Intermédiaire", advanced: "Avancé", configurable: "Configurable", "provider-processed": "Traité par le fournisseur", yes: "Oui", no: "Non", depends: "Ça dépend", "check-license": "Vérifier la licence"}
};

const state = {resources: [], language: localStorage.getItem("free-ai-atlas-language") || "en", preset: "", compare: new Set()};
const elements = {};
const presetCategories = {
  builder: new Set(["api", "coding", "agents", "app-builder", "rag"]),
  advanced: new Set(["inference-server", "vector-database", "evaluation", "ml-framework", "dataset"])
};

function configureRepositoryLinks() {
  if (!location.hostname.endsWith(".github.io")) return;
  const owner = location.hostname.split(".")[0];
  const repository = location.pathname.split("/").filter(Boolean)[0];
  if (!owner || !repository) return;
  const repositoryUrl = "https://github.com/" + owner + "/" + repository;
  document.querySelectorAll("[data-github-path]").forEach(function (link) {
    const path = link.dataset.githubPath;
    link.href = path ? repositoryUrl + "/blob/main/" + path : repositoryUrl;
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, function (character) {
    return {"&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"}[character];
  });
}

function setSelectOptions(element, values, labelMap, allLabel) {
  const selected = element.value;
  element.innerHTML = '<option value="">' + escapeHtml(allLabel) + "</option>" + values.map(function (value) {
    return '<option value="' + escapeHtml(value) + '">' + escapeHtml(labelMap[value] || value) + "</option>";
  }).join("");
  element.value = selected;
}

function yesNo(value) {
  return value ? translations[state.language].yes : translations[state.language].no;
}

function resultLabel(count) {
  if (state.language === "fr") return count + " ressource" + (count === 1 ? "" : "s");
  return count + " resource" + (count === 1 ? "" : "s");
}

function translatePage() {
  const t = translations[state.language];
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-i18n]").forEach(function (node) {
    const value = t[node.dataset.i18n];
    if (typeof value === "string") node.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (node) { node.placeholder = t[node.dataset.i18nPlaceholder]; });
  elements.languageToggle.textContent = state.language === "en" ? "FR" : "EN";
  elements.languageToggle.setAttribute("aria-label", state.language === "en" ? "Passer au français" : "Switch to English");
  setSelectOptions(elements.category, [...new Set(state.resources.map(function (item) { return item.category; }))].sort(), categoryLabels[state.language], t.allCategories);
  setSelectOptions(elements.freeType, [...new Set(state.resources.map(function (item) { return item.free_type; }))].sort(), freeLabels[state.language], t.allTypes);
  setSelectOptions(elements.access, [...new Set(state.resources.map(function (item) { return item.access; }))].sort(), valueLabels[state.language], t.allAccess);
  setSelectOptions(elements.difficulty, ["beginner", "intermediate", "advanced"], valueLabels[state.language], t.allLevels);
  setSelectOptions(elements.platform, [...new Set(state.resources.flatMap(function (item) { return item.platforms; }))].sort(), {}, t.allPlatforms);
  render();
  updateCompareTray();
}

function cardTemplate(item) {
  const language = state.language;
  const t = translations[language];
  const description = language === "fr" ? item.description_fr : item.description;
  const bestFor = language === "fr" ? item.best_for_fr : item.best_for;
  const selected = state.compare.has(item.id);
  const compareDisabled = state.compare.size >= 3 && !selected;
  const badges = [
    freeLabels[language][item.free_type],
    valueLabels[language][item.access] || item.access,
    valueLabels[language][item.difficulty] || item.difficulty
  ].map(function (value) { return '<span class="badge">' + escapeHtml(value) + "</span>"; }).join("");
  const positive = (!item.account_required ? '<span class="badge badge-good">' + escapeHtml(t.noAccount) + "</span>" : "") +
    (!item.card_required ? '<span class="badge badge-good">' + escapeHtml(t.noCard) + "</span>" : "");
  return '<article class="card">' +
    '<div class="card-top"><div><span class="category">' + escapeHtml(categoryLabels[language][item.category] || item.category) + '</span><h3><a href="' + escapeHtml(item.homepage) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(item.name) + '</a></h3></div><span class="status ' + (item.status === "watch" ? "watch" : "") + '">' + escapeHtml(item.status) + "</span></div>" +
    '<p class="description">' + escapeHtml(description) + '</p><p class="best-for"><span>' + escapeHtml(t.bestFor) + ":</span> " + escapeHtml(bestFor) + "</p>" +
    '<div class="badges">' + badges + positive + '</div><div class="card-facts"><span>' + escapeHtml(valueLabels[language][item.privacy] || item.privacy) + "</span><span>" + escapeHtml(item.license || valueLabels[language][item.commercial_use] || item.commercial_use) + "</span></div>" +
    '<div class="card-actions"><button class="button button-quiet button-small" type="button" data-details="' + escapeHtml(item.id) + '">' + escapeHtml(t.details) + '</button><button class="button button-compare button-small" type="button" data-compare="' + escapeHtml(item.id) + '" aria-pressed="' + selected + '" ' + (compareDisabled ? "disabled" : "") + ">" + escapeHtml(t.compare) + "</button></div>" +
    '<div class="card-footer"><span>' + escapeHtml(t.verified) + " " + escapeHtml(item.last_verified) + '</span><a class="source-link" href="' + escapeHtml(item.source.url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(t.source) + " ↗</a></div></article>";
}

function matchesPreset(item) {
  if (state.preset === "builder" || state.preset === "advanced") return presetCategories[state.preset].has(item.category);
  return true;
}

function render() {
  const query = elements.search.value.trim().toLocaleLowerCase(state.language);
  const difficultyOrder = {beginner: 0, intermediate: 1, advanced: 2};
  const filtered = state.resources.filter(function (item) {
    const text = [item.name, item.description, item.description_fr, item.best_for, item.best_for_fr].concat(item.tags).join(" ").toLocaleLowerCase(state.language);
    return matchesPreset(item) && (!query || text.includes(query)) &&
      (!elements.category.value || item.category === elements.category.value) &&
      (!elements.freeType.value || item.free_type === elements.freeType.value) &&
      (!elements.access.value || item.access === elements.access.value) &&
      (!elements.difficulty.value || item.difficulty === elements.difficulty.value) &&
      (!elements.platform.value || item.platforms.includes(elements.platform.value));
  });
  filtered.sort(function (a, b) {
    if (elements.sort.value === "newest") return b.last_verified.localeCompare(a.last_verified) || a.name.localeCompare(b.name);
    if (elements.sort.value === "beginner") return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty] || a.name.localeCompare(b.name);
    return a.name.localeCompare(b.name);
  });
  elements.cards.innerHTML = filtered.map(cardTemplate).join("");
  elements.resultCount.textContent = resultLabel(filtered.length);
  elements.empty.hidden = filtered.length !== 0;
}

function setPreset(preset) {
  elements.search.value = "";
  [elements.category, elements.freeType, elements.access, elements.difficulty, elements.platform].forEach(function (element) { element.value = ""; });
  elements.sort.value = "name";
  state.preset = preset;
  if (preset === "beginner") elements.difficulty.value = "beginner";
  if (preset === "private") elements.access.value = "local";
  document.querySelectorAll("[data-preset]").forEach(function (button) { button.setAttribute("aria-pressed", String(button.dataset.preset === preset)); });
  render();
  elements.cards.scrollIntoView({behavior: "smooth", block: "start"});
}

function findResource(id) {
  return state.resources.find(function (item) { return item.id === id; });
}

function showDetails(id) {
  const item = findResource(id);
  if (!item) return;
  const t = translations[state.language];
  const description = state.language === "fr" ? item.description_fr : item.description;
  const bestFor = state.language === "fr" ? item.best_for_fr : item.best_for;
  const limits = state.language === "fr" ? item.limits_fr : item.limits;
  const caveats = state.language === "fr" ? item.caveats_fr : item.caveats;
  elements.resourceDialogContent.innerHTML =
    '<p class="kicker">' + escapeHtml(categoryLabels[state.language][item.category] || item.category) + '</p><h2>' + escapeHtml(item.name) + '</h2><p class="dialog-description">' + escapeHtml(description) + "</p>" +
    "<p><strong>" + escapeHtml(t.bestFor) + ":</strong> " + escapeHtml(bestFor) + '</p><dl class="detail-grid">' +
    "<div><dt>" + escapeHtml(t.account) + "</dt><dd>" + escapeHtml(yesNo(item.account_required)) + "</dd></div>" +
    "<div><dt>" + escapeHtml(t.card) + "</dt><dd>" + escapeHtml(yesNo(item.card_required)) + "</dd></div>" +
    "<div><dt>" + escapeHtml(t.privacy) + "</dt><dd>" + escapeHtml(valueLabels[state.language][item.privacy] || item.privacy) + "</dd></div>" +
    "<div><dt>" + escapeHtml(t.commercial) + "</dt><dd>" + escapeHtml(valueLabels[state.language][item.commercial_use] || item.commercial_use) + "</dd></div>" +
    "<div><dt>" + escapeHtml(t.license) + "</dt><dd>" + escapeHtml(item.license || "—") + "</dd></div>" +
    "<div><dt>" + escapeHtml(t.verified) + "</dt><dd>" + escapeHtml(item.last_verified) + "</dd></div></dl>" +
    "<h3>" + escapeHtml(t.limitsField) + "</h3><p>" + escapeHtml(limits) + "</p><h3>" + escapeHtml(t.caveats) + "</h3><ul>" +
    caveats.map(function (value) { return "<li>" + escapeHtml(value) + "</li>"; }).join("") +
    '</ul><p><a class="button button-quiet" href="' + escapeHtml(item.source.url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(t.source) + " ↗</a></p>";
  elements.resourceDialog.showModal();
}

function toggleCompare(id) {
  if (state.compare.has(id)) state.compare.delete(id);
  else if (state.compare.size < 3) state.compare.add(id);
  render();
  updateCompareTray();
}

function selectedResources() {
  return [...state.compare].map(findResource).filter(Boolean);
}

function updateCompareTray() {
  const items = selectedResources();
  const t = translations[state.language];
  elements.compareTray.hidden = items.length === 0;
  elements.compareSelection.textContent = items.length ? items.map(function (item) { return item.name; }).join(" · ") + " — " + t.maxCompare : "";
  elements.openCompare.textContent = (state.language === "fr" ? "Comparer" : "Compare") + " (" + items.length + "/3)";
  elements.openCompare.disabled = items.length < 2;
}

function comparisonRow(label, items, value) {
  return '<tr><th scope="row">' + escapeHtml(label) + "</th>" + items.map(function (item) { return "<td>" + escapeHtml(value(item)) + "</td>"; }).join("") + "</tr>";
}

function showComparison() {
  const items = selectedResources();
  if (items.length < 2) return;
  const t = translations[state.language];
  elements.compareDialogContent.innerHTML = '<table class="compare-table"><thead><tr><th></th>' +
    items.map(function (item) { return '<th scope="col"><a href="' + escapeHtml(item.homepage) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(item.name) + "</a></th>"; }).join("") +
    "</tr></thead><tbody>" +
    comparisonRow(t.bestFor, items, function (item) { return state.language === "fr" ? item.best_for_fr : item.best_for; }) +
    comparisonRow(t.freeLabel, items, function (item) { return freeLabels[state.language][item.free_type]; }) +
    comparisonRow(t.accessLabel, items, function (item) { return valueLabels[state.language][item.access] || item.access; }) +
    comparisonRow(t.levelLabel, items, function (item) { return valueLabels[state.language][item.difficulty] || item.difficulty; }) +
    comparisonRow(t.account, items, function (item) { return yesNo(item.account_required); }) +
    comparisonRow(t.card, items, function (item) { return yesNo(item.card_required); }) +
    comparisonRow(t.privacy, items, function (item) { return valueLabels[state.language][item.privacy] || item.privacy; }) +
    comparisonRow(t.commercial, items, function (item) { return valueLabels[state.language][item.commercial_use] || item.commercial_use; }) +
    comparisonRow(t.license, items, function (item) { return item.license || "—"; }) +
    comparisonRow(t.limitsField, items, function (item) { return state.language === "fr" ? item.limits_fr : item.limits; }) +
    "</tbody></table>";
  elements.compareDialog.showModal();
}

async function init() {
  configureRepositoryLinks();
  Object.assign(elements, {
    languageToggle: document.querySelector("#language-toggle"), search: document.querySelector("#search"), category: document.querySelector("#category"),
    freeType: document.querySelector("#free-type"), access: document.querySelector("#access"), difficulty: document.querySelector("#difficulty"),
    platform: document.querySelector("#platform"), sort: document.querySelector("#sort"), filters: document.querySelector("#filters"),
    cards: document.querySelector("#cards"), empty: document.querySelector("#empty-state"), resultCount: document.querySelector("#result-count"),
    compareTray: document.querySelector("#compare-tray"), compareSelection: document.querySelector("#compare-selection"), openCompare: document.querySelector("#open-compare"),
    clearCompare: document.querySelector("#clear-compare"), resourceDialog: document.querySelector("#resource-dialog"),
    resourceDialogContent: document.querySelector("#resource-dialog-content"), compareDialog: document.querySelector("#compare-dialog"),
    compareDialogContent: document.querySelector("#compare-dialog-content")
  });
  try {
    const response = await fetch("data/resources.json");
    if (!response.ok) throw new Error("HTTP " + response.status);
    const payload = await response.json();
    state.resources = payload.resources;
    document.querySelector("#resource-count").textContent = payload.meta.resource_count;
    document.querySelector("#category-count").textContent = payload.meta.category_count;
    document.querySelector("#open-source-count").textContent = payload.meta.open_source_count;
    document.querySelector("#no-account-count").textContent = payload.meta.no_account_count;
    document.querySelector("#latest-verification").textContent = payload.meta.latest_verification;
    elements.languageToggle.addEventListener("click", function () {
      state.language = state.language === "en" ? "fr" : "en";
      localStorage.setItem("free-ai-atlas-language", state.language);
      translatePage();
    });
    elements.filters.addEventListener("input", render);
    elements.filters.addEventListener("change", render);
    elements.filters.addEventListener("reset", function () {
      state.preset = "";
      document.querySelectorAll("[data-preset]").forEach(function (button) { button.setAttribute("aria-pressed", "false"); });
      setTimeout(render);
    });
    document.querySelectorAll("[data-preset]").forEach(function (button) { button.addEventListener("click", function () { setPreset(button.dataset.preset); }); });
    elements.cards.addEventListener("click", function (event) {
      const detailButton = event.target.closest("[data-details]");
      const compareButton = event.target.closest("[data-compare]");
      if (detailButton) showDetails(detailButton.dataset.details);
      if (compareButton) toggleCompare(compareButton.dataset.compare);
    });
    elements.clearCompare.addEventListener("click", function () {
      state.compare.clear();
      render();
      updateCompareTray();
    });
    elements.openCompare.addEventListener("click", showComparison);
    translatePage();
  } catch (error) {
    elements.empty.hidden = false;
    elements.empty.querySelector("h3").textContent = "Catalog failed to load";
    elements.empty.querySelector("p").textContent = "Serve the site over HTTP or check the generated data file.";
    console.error(error);
  }
}

init();
