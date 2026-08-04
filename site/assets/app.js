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
    footerCopy: "Useful at $0. Honest about the catch.", contribute: "Contribute", contributors: "Contributors", method: "Verification method", fullCatalog: "Full catalog", shareFilters: "Share filters", exportManifest: "Export stack",
    hardwareKicker: "Hardware", hardwareTitle: "What is your setup?", hardwareBasic: "8GB RAM, no GPU", hardwareMid: "16GB RAM, 4GB+ VRAM", hardwareHigh: "32GB+ RAM, 8GB+ VRAM", hardwarePro: "64GB+ RAM, 24GB+ VRAM", hardwareGuide: "Full hardware guide",
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
    footerCopy: "Utile à 0 $. Honnête sur les limites.", contribute: "Contribuer", contributors: "Contributeurs", method: "Méthode de vérification", fullCatalog: "Catalogue complet", shareFilters: "Partager les filtres", exportManifest: "Exporter la stack",
    hardwareKicker: "Matériel", hardwareTitle: "Quel est ton setup ?", hardwareBasic: "8 RAM, pas de GPU", hardwareMid: "16 RAM, 4+ VRAM", hardwareHigh: "32+ RAM, 8+ VRAM", hardwarePro: "64+ RAM, 24+ VRAM", hardwareGuide: "Guide matériel complet",
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

const state = {resources: [], language: localStorage.getItem("free-ai-atlas-language") || "en", preset: "", compare: new Set(), filters: {category: "", freeType: "", access: "", difficulty: "", platform: "", sort: "name", search: ""}};

function encodeFiltersToHash() {
  const params = new URLSearchParams();
  if (state.filters.category) params.set("category", state.filters.category);
  if (state.filters.freeType) params.set("freeType", state.filters.freeType);
  if (state.filters.access) params.set("access", state.filters.access);
  if (state.filters.difficulty) params.set("difficulty", state.filters.difficulty);
  if (state.filters.platform) params.set("platform", state.filters.platform);
  if (state.filters.sort && state.filters.sort !== "name") params.set("sort", state.filters.sort);
  if (state.filters.search) params.set("q", state.filters.search);
  if (state.preset) params.set("preset", state.preset);
  const hash = params.toString();
  if (hash) {
    history.replaceState(null, "", "#" + hash);
  } else {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }
}

function decodeFiltersFromHash() {
  const hash = window.location.hash.slice(1);
  if (!hash) return;
  const params = new URLSearchParams(hash);
  if (params.has("category")) state.filters.category = params.get("category");
  if (params.has("freeType")) state.filters.freeType = params.get("freeType");
  if (params.has("access")) state.filters.access = params.get("access");
  if (params.has("difficulty")) state.filters.difficulty = params.get("difficulty");
  if (params.has("platform")) state.filters.platform = params.get("platform");
  if (params.has("sort")) state.filters.sort = params.get("sort");
  if (params.has("q")) state.filters.search = params.get("q");
  if (params.has("preset")) state.preset = params.get("preset");
}

function syncFiltersToUI() {
  if (elements.category) elements.category.value = state.filters.category;
  if (elements.freeType) elements.freeType.value = state.filters.freeType;
  if (elements.access) elements.access.value = state.filters.access;
  if (elements.difficulty) elements.difficulty.value = state.filters.difficulty;
  if (elements.platform) elements.platform.value = state.filters.platform;
  if (elements.sort) elements.sort.value = state.filters.sort;
  if (elements.search) elements.search.value = state.filters.search;
  if (state.preset) {
    document.querySelectorAll("[data-preset]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.dataset.preset === state.preset));
    });
  }
}

function syncFiltersFromUI() {
  state.filters.category = elements.category ? elements.category.value : "";
  state.filters.freeType = elements.freeType ? elements.freeType.value : "";
  state.filters.access = elements.access ? elements.access.value : "";
  state.filters.difficulty = elements.difficulty ? elements.difficulty.value : "";
  state.filters.platform = elements.platform ? elements.platform.value : "";
  state.filters.sort = elements.sort ? elements.sort.value : "name";
  state.filters.search = elements.search ? elements.search.value.trim() : "";
  encodeFiltersToHash();
}

function copyShareableURL() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(function () {
    const t = translations[state.language];
    const button = document.querySelector("#share-filters");
    if (button) {
      const originalText = button.textContent;
      button.textContent = state.language === "fr" ? "Copié !" : "Copied!";
      setTimeout(function () { button.textContent = originalText; }, 2000);
    }
  }).catch(function () {
    prompt(state.language === "fr" ? "Copiez cette URL :" : "Copy this URL:", url);
  });
}

const hardwareRecommendations = {
  en: {
    basic: "Basic setup: Try GPT4All or Ollama with small models (3B-7B). Good for simple chat and text generation.",
    mid: "Mid-range: Use Ollama or llama.cpp with medium models (7B-13B). Great for coding and analysis.",
    high: "High-end: Try llama.cpp or LocalAI with large models (13B-70B). Excellent for complex tasks.",
    pro: "Professional: Use vLLM or TGI with very large models (70B+). Production-ready performance."
  },
  fr: {
    basic: "Setup basique : Essaie GPT4All ou Ollama avec de petits modèles (3B-7B). Idéal pour le chat simple.",
    mid: "Milieu de gamme : Utilise Ollama ou llama.cpp avec des modèles moyens (7B-13B). Parfait pour la programmation.",
    high: "Haut de gamme : Essaie llama.cpp ou LocalAI avec de grands modèles (13B-70B). Excellent pour les tâches complexes.",
    pro: "Professionnel : Utilise vLLM ou TGI avec de très grands modèles (70B+). Performance production."
  }
};

function showHardwareRecommendation(tier) {
  const t = translations[state.language];
  const recommendation = hardwareRecommendations[state.language][tier];
  const element = document.querySelector("#hardware-recommendation");
  if (element && recommendation) {
    element.textContent = recommendation;
    element.hidden = false;
  }
  document.querySelectorAll("[data-hardware]").forEach(function (button) {
    button.setAttribute("aria-pressed", String(button.dataset.hardware === tier));
  });
}
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
  syncFiltersFromUI();
  const query = state.filters.search.toLocaleLowerCase(state.language);
  const difficultyOrder = {beginner: 0, intermediate: 1, advanced: 2};
  const filtered = state.resources.filter(function (item) {
    const text = [item.name, item.description, item.description_fr, item.best_for, item.best_for_fr].concat(item.tags).join(" ").toLocaleLowerCase(state.language);
    return matchesPreset(item) && (!query || text.includes(query)) &&
      (!state.filters.category || item.category === state.filters.category) &&
      (!state.filters.freeType || item.free_type === state.filters.freeType) &&
      (!state.filters.access || item.access === state.filters.access) &&
      (!state.filters.difficulty || item.difficulty === state.filters.difficulty) &&
      (!state.filters.platform || item.platforms.includes(state.filters.platform));
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
  state.filters = {category: "", freeType: "", access: "", difficulty: "", platform: "", sort: "name", search: ""};
  if (preset === "beginner") { elements.difficulty.value = "beginner"; state.filters.difficulty = "beginner"; }
  if (preset === "private") { elements.access.value = "local"; state.filters.access = "local"; }
  document.querySelectorAll("[data-preset]").forEach(function (button) { button.setAttribute("aria-pressed", String(button.dataset.preset === preset)); });
  encodeFiltersToHash();
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

function exportStackManifest() {
  const items = selectedResources();
  if (items.length === 0) return;
  const manifest = {
    name: "My AI Stack",
    description: "A collection of free AI tools and resources",
    created: new Date().toISOString().split("T")[0],
    source: "Free AI Atlas",
    url: "https://arthurecodage.github.io/free-ai-atlas/",
    resources: items.map(function (item) {
      return {
        id: item.id,
        name: item.name,
        category: item.category,
        free_type: item.free_type,
        access: item.access,
        difficulty: item.difficulty,
        homepage: item.homepage,
        license: item.license,
        privacy: item.privacy,
        commercial_use: item.commercial_use,
        source_url: item.source.url
      };
    })
  };
  const blob = new Blob([JSON.stringify(manifest, null, 2)], {type: "application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "ai-stack-manifest.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  const t = translations[state.language];
  const button = document.querySelector("#export-manifest");
  if (button) {
    const originalText = button.textContent;
    button.textContent = state.language === "fr" ? "Exporté !" : "Exported!";
    setTimeout(function () { button.textContent = originalText; }, 2000);
  }
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
      state.filters = {category: "", freeType: "", access: "", difficulty: "", platform: "", sort: "name", search: ""};
      document.querySelectorAll("[data-preset]").forEach(function (button) { button.setAttribute("aria-pressed", "false"); });
      history.replaceState(null, "", window.location.pathname + window.location.search);
      setTimeout(render);
    });
    decodeFiltersFromHash();
    syncFiltersToUI();
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
    document.querySelector("#share-filters").addEventListener("click", copyShareableURL);
    document.querySelector("#export-manifest").addEventListener("click", exportStackManifest);
    document.querySelectorAll("[data-hardware]").forEach(function (button) {
      button.addEventListener("click", function () { showHardwareRecommendation(button.dataset.hardware); });
    });
    translatePage();
  } catch (error) {
    elements.empty.hidden = false;
    elements.empty.querySelector("h3").textContent = "Catalog failed to load";
    elements.empty.querySelector("p").textContent = "Serve the site over HTTP or check the generated data file.";
    console.error(error);
  }
}

init();
