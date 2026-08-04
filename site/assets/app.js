const translations = {
  en: {
    eyebrow: "Evidence before hype", title: "Build your AI stack for <em>$0</em>.", subtitle: "A human-reviewable map of free AI tools, models, APIs, compute, and courses — with limits, privacy, licenses, and official sources.",
    resources: "verified resources", categories: "useful categories", latest: "latest verification", trustKicker: "Trust model", trustTitle: "Free should mean something.",
    proofTitle: "Official proof", proofCopy: "Every claim links to provider documentation, pricing, or the official repository.", limitsTitle: "Real limits", limitsCopy: "Accounts, cards, quotas, hardware, privacy, and licenses are visible before you commit.", reviewTitle: "Reviewed change", reviewCopy: "Automation detects changes; material claims still require evidence review.",
    exploreKicker: "Explore", catalogTitle: "Find the right free resource", searchLabel: "Search resources", searchPlaceholder: "Search tools, use cases, or tags…", categoryLabel: "Category", freeLabel: "Free access", accessLabel: "Access", levelLabel: "Level", platformLabel: "Platform", reset: "Reset filters", emptyTitle: "No matching resources", emptyCopy: "Try fewer filters or a broader search.",
    footerCopy: "Useful at $0. Honest about the catch.", contribute: "Contribute", method: "Verification method", fullCatalog: "Full catalog", bestFor: "Best for", source: "Official source", verified: "Verified", results: count => `${count} resource${count === 1 ? "" : "s"}`,
    allCategories: "All categories", allTypes: "All types", allAccess: "Local and cloud", allLevels: "Every level", allPlatforms: "Every platform"
  },
  fr: {
    eyebrow: "Les preuves avant le battage", title: "Construis ta stack IA pour <em>0 $</em>.", subtitle: "Une carte vérifiable des outils, modèles, API, ressources de calcul et cours gratuits — avec limites, confidentialité, licences et sources officielles.",
    resources: "ressources vérifiées", categories: "catégories utiles", latest: "dernière vérification", trustKicker: "Modèle de confiance", trustTitle: "Gratuit doit vouloir dire quelque chose.",
    proofTitle: "Preuve officielle", proofCopy: "Chaque affirmation mène à la documentation, à la tarification ou au dépôt officiel.", limitsTitle: "Limites réelles", limitsCopy: "Comptes, cartes, quotas, matériel, confidentialité et licences sont visibles avant de choisir.", reviewTitle: "Changements révisés", reviewCopy: "L’automatisation détecte les changements; les affirmations importantes restent vérifiées.",
    exploreKicker: "Explorer", catalogTitle: "Trouve la bonne ressource gratuite", searchLabel: "Rechercher des ressources", searchPlaceholder: "Chercher un outil, un usage ou une étiquette…", categoryLabel: "Catégorie", freeLabel: "Gratuité", accessLabel: "Accès", levelLabel: "Niveau", platformLabel: "Plateforme", reset: "Réinitialiser", emptyTitle: "Aucune ressource correspondante", emptyCopy: "Essaie moins de filtres ou une recherche plus large.",
    footerCopy: "Utile à 0 $. Honnête sur les limites.", contribute: "Contribuer", method: "Méthode de vérification", fullCatalog: "Catalogue complet", bestFor: "Idéal pour", source: "Source officielle", verified: "Vérifié", results: count => `${count} ressource${count === 1 ? "" : "s"}`,
    allCategories: "Toutes les catégories", allTypes: "Tous les types", allAccess: "Local et cloud", allLevels: "Tous les niveaux", allPlatforms: "Toutes les plateformes"
  }
};

const freeLabels = {
  en: {"free-tier": "Free tier", freemium: "Freemium", "open-source": "Open source", "free-compute": "Free compute"},
  fr: {"free-tier": "Offre gratuite", freemium: "Freemium", "open-source": "Open source", "free-compute": "Calcul gratuit"}
};
const categoryLabels = {
  en: {assistant: "Assistant", api: "API", compute: "Compute", "image-generation": "Image generation", "inference-server": "Inference server", interface: "Interface", learning: "Learning", "local-runtime": "Local runtime", "model-hub": "Model hub", rag: "RAG & documents", speech: "Speech"},
  fr: {assistant: "Assistant", api: "API", compute: "Calcul", "image-generation": "Génération d’images", "inference-server": "Serveur d’inférence", interface: "Interface", learning: "Apprentissage", "local-runtime": "Moteur local", "model-hub": "Catalogue de modèles", rag: "RAG et documents", speech: "Audio et parole"}
};
const valueLabels = {
  en: {cloud: "Cloud", hybrid: "Hybrid", local: "Local", beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced"},
  fr: {cloud: "Cloud", hybrid: "Hybride", local: "Local", beginner: "Débutant", intermediate: "Intermédiaire", advanced: "Avancé"}
};

const state = {resources: [], language: localStorage.getItem("free-ai-atlas-language") || "en"};
const elements = {};

function configureRepositoryLinks() {
  if (!location.hostname.endsWith(".github.io")) return;
  const owner = location.hostname.split(".")[0];
  const repository = location.pathname.split("/").filter(Boolean)[0];
  if (!owner || !repository) return;
  const repositoryUrl = `https://github.com/${owner}/${repository}`;
  document.querySelectorAll("[data-github-path]").forEach(link => {
    const path = link.dataset.githubPath;
    link.href = path ? `${repositoryUrl}/blob/main/${path}` : repositoryUrl;
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"})[character]);
}

function setSelectOptions(element, values, labelMap, allLabel) {
  const selected = element.value;
  element.innerHTML = `<option value="">${escapeHtml(allLabel)}</option>` + values.map(value => `<option value="${escapeHtml(value)}">${escapeHtml(labelMap[value] || value)}</option>`).join("");
  element.value = selected;
}

function translatePage() {
  const t = translations[state.language];
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-i18n]").forEach(node => { node.innerHTML = t[node.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(node => { node.placeholder = t[node.dataset.i18nPlaceholder]; });
  elements.languageToggle.textContent = state.language === "en" ? "FR" : "EN";
  elements.languageToggle.setAttribute("aria-label", state.language === "en" ? "Passer au français" : "Switch to English");
  setSelectOptions(elements.category, [...new Set(state.resources.map(item => item.category))].sort(), categoryLabels[state.language], t.allCategories);
  setSelectOptions(elements.freeType, [...new Set(state.resources.map(item => item.free_type))].sort(), freeLabels[state.language], t.allTypes);
  setSelectOptions(elements.access, [...new Set(state.resources.map(item => item.access))].sort(), valueLabels[state.language], t.allAccess);
  setSelectOptions(elements.difficulty, [...new Set(state.resources.map(item => item.difficulty))], valueLabels[state.language], t.allLevels);
  setSelectOptions(elements.platform, [...new Set(state.resources.flatMap(item => item.platforms))].sort(), {}, t.allPlatforms);
  render();
}

function cardTemplate(item) {
  const language = state.language;
  const description = language === "fr" ? item.description_fr : item.description;
  const bestFor = language === "fr" ? item.best_for_fr : item.best_for;
  const t = translations[language];
  return `
    <article class="card">
      <div class="card-top">
        <div><span class="category">${escapeHtml(categoryLabels[language][item.category] || item.category)}</span><h3><a href="${escapeHtml(item.homepage)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.name)}</a></h3></div>
        <span class="status ${item.status === "watch" ? "watch" : ""}">${escapeHtml(item.status)}</span>
      </div>
      <p class="description">${escapeHtml(description)}</p>
      <p class="best-for"><span>${escapeHtml(t.bestFor)}:</span> ${escapeHtml(bestFor)}</p>
      <div class="badges">
        <span class="badge">${escapeHtml(freeLabels[language][item.free_type])}</span>
        <span class="badge">${escapeHtml(valueLabels[language][item.access] || item.access)}</span>
        <span class="badge">${escapeHtml(valueLabels[language][item.difficulty] || item.difficulty)}</span>
        ${item.platforms.slice(0, 2).map(platform => `<span class="badge">${escapeHtml(platform)}</span>`).join("")}
      </div>
      <div class="card-footer"><span>${escapeHtml(t.verified)} ${escapeHtml(item.last_verified)}</span><a class="source-link" href="${escapeHtml(item.source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t.source)} ↗</a></div>
    </article>`;
}

function render() {
  const query = elements.search.value.trim().toLocaleLowerCase(state.language);
  const filtered = state.resources.filter(item => {
    const text = [item.name, item.description, item.description_fr, item.best_for, item.best_for_fr, ...item.tags].join(" ").toLocaleLowerCase(state.language);
    return (!query || text.includes(query)) &&
      (!elements.category.value || item.category === elements.category.value) &&
      (!elements.freeType.value || item.free_type === elements.freeType.value) &&
      (!elements.access.value || item.access === elements.access.value) &&
      (!elements.difficulty.value || item.difficulty === elements.difficulty.value) &&
      (!elements.platform.value || item.platforms.includes(elements.platform.value));
  });
  elements.cards.innerHTML = filtered.map(cardTemplate).join("");
  elements.resultCount.textContent = translations[state.language].results(filtered.length);
  elements.empty.hidden = filtered.length !== 0;
}

async function init() {
  configureRepositoryLinks();
  Object.assign(elements, {
    languageToggle: document.querySelector("#language-toggle"), search: document.querySelector("#search"), category: document.querySelector("#category"), freeType: document.querySelector("#free-type"), access: document.querySelector("#access"), difficulty: document.querySelector("#difficulty"), platform: document.querySelector("#platform"), reset: document.querySelector("#reset"), cards: document.querySelector("#cards"), empty: document.querySelector("#empty-state"), resultCount: document.querySelector("#result-count")
  });
  try {
    const response = await fetch("data/resources.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    state.resources = payload.resources;
    document.querySelector("#resource-count").textContent = payload.meta.resource_count;
    document.querySelector("#category-count").textContent = payload.meta.category_count;
    document.querySelector("#latest-verification").textContent = payload.meta.latest_verification;
    elements.languageToggle.addEventListener("click", () => { state.language = state.language === "en" ? "fr" : "en"; localStorage.setItem("free-ai-atlas-language", state.language); translatePage(); });
    document.querySelector("#filters").addEventListener("input", render);
    document.querySelector("#filters").addEventListener("change", render);
    document.querySelector("#filters").addEventListener("reset", () => setTimeout(render));
    translatePage();
  } catch (error) {
    elements.empty.hidden = false;
    elements.empty.querySelector("h3").textContent = "Catalog failed to load";
    elements.empty.querySelector("p").textContent = "Serve the site over HTTP or check the generated data file.";
    console.error(error);
  }
}

init();
