(() => {
  "use strict";
  const $ = (selector) => document.querySelector(selector);
  const state = { modules: [], active: 0, completed: new Set(), cache: new Map() };
  const progressKey = "learning-cpp.completed.v1";
  const sourceRoot = "https://github.com/Darrenvandervelde/Learning-Cpp/tree/curriculum/20-modular-lessons/modules/";

  function loadProgress() {
    try { state.completed = new Set(JSON.parse(localStorage.getItem(progressKey) || "[]")); }
    catch { state.completed = new Set(); }
  }
  function saveProgress() {
    try { localStorage.setItem(progressKey, JSON.stringify([...state.completed])); } catch {}
    renderProgress();
  }
  function renderProgress() {
    const count = state.completed.size;
    $("#progress-label").textContent = count + " / " + state.modules.length;
    $("#progress-bar").style.width = (state.modules.length ? count / state.modules.length * 100 : 0) + "%";
    document.querySelectorAll("[data-module-number]").forEach((node) => {
      const done = state.completed.has(node.dataset.moduleNumber);
      const check = node.querySelector(".module-check");
      if (check) check.textContent = done ? "✓" : "";
    });
    updateLessonProgress();
  }
  function moduleButton(module, card = false) {
    if (card) {
      const a = document.createElement("a");
      a.className = "module-card";
      a.href = "#module-" + module.number;
      a.innerHTML = '<span class="module-card-number">' + module.number + '</span><span class="module-card-copy"><strong></strong><small></small></span><span class="module-card-arrow">→</span>';
      a.querySelector("strong").textContent = module.title;
      a.querySelector("small").textContent = module.track + " · " + module.duration;
      a.addEventListener("click", (event) => { event.preventDefault(); openModule(module.number); });
      return a;
    }
    const button = document.createElement("button");
    button.className = "module-link";
    button.type = "button";
    button.dataset.moduleNumber = module.number;
    button.innerHTML = '<span class="module-number">' + module.number + '</span><span class="module-label"></span><span class="module-check"></span>';
    button.querySelector(".module-label").textContent = module.title;
    button.addEventListener("click", () => openModule(module.number));
    return button;
  }
  function renderCatalogue() {
    const nav = $("#module-nav"), cards = $("#module-cards");
    nav.replaceChildren(); cards.replaceChildren();
    state.modules.forEach((module) => {
      nav.append(moduleButton(module));
      cards.append(moduleButton(module, true));
    });
    renderProgress();
  }
  function setActiveNavigation(number) {
    document.querySelectorAll(".module-link").forEach((button) => {
      const active = button.dataset.moduleNumber === number;
      button.classList.toggle("active", active);
      if (active) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
  }
  function markdownRenderer() {
    if (!window.markdownit) return null;
    return window.markdownit({
      html: false, linkify: true, typographer: true, breaks: false,
      highlight(code, language) {
        if (window.hljs && language && hljs.getLanguage(language)) {
          try { return '<pre><code class="hljs language-' + language + '">' + hljs.highlight(code, { language }).value + '</code></pre>'; } catch {}
        }
        if (window.hljs) return '<pre><code class="hljs">' + hljs.highlightAuto(code).value + '</code></pre>';
        return '<pre><code>' + markdownit().utils.escapeHtml(code) + '</code></pre>';
      }
    });
  }
  async function getModuleMarkdown(module) {
    if (state.cache.has(module.number)) return state.cache.get(module.number);
    const path = "content/modules/" + module.slug + "/README.md";
    let response = await fetch(path);
    // Local preview fallback: when serving the repository root, read the original module folder.
    if (!response.ok) response = await fetch("../modules/" + module.slug + "/README.md");
    if (!response.ok) throw new Error("Could not load " + path + " (HTTP " + response.status + ").");
    const markdown = await response.text();
    state.cache.set(module.number, markdown);
    return markdown;
  }
  function makeTableOfContents() {
    const toc = $("#lesson-toc");
    toc.replaceChildren();
    const headings = $("#lesson-content").querySelectorAll("h2, h3");
    headings.forEach((heading, index) => {
      if (!heading.id) heading.id = "lesson-section-" + index;
      const link = document.createElement("a");
      link.href = "#" + heading.id;
      link.textContent = heading.textContent;
      if (heading.tagName === "H3") link.style.paddingLeft = "10px";
      toc.append(link);
    });
    if (!headings.length) toc.textContent = "Section links will appear here.";
  }
  function addCopyButtons() {
    $("#lesson-content").querySelectorAll("pre").forEach((pre) => {
      if (pre.querySelector(".code-copy")) return;
      const button = document.createElement("button");
      button.className = "code-copy";
      button.type = "button";
      button.textContent = "Copy code";
      button.addEventListener("click", async () => {
        const code = pre.querySelector("code")?.innerText || "";
        try {
          await navigator.clipboard.writeText(code);
          button.textContent = "Copied!";
          setTimeout(() => { button.textContent = "Copy code"; }, 1300);
        } catch { button.textContent = "Select code to copy"; }
      });
      pre.append(button);
    });
  }
  function renderResourceLinks(module) {
    let card = $("#module-resources");
    if (!card) {
      card = document.createElement("div");
      card.id = "module-resources";
      card.className = "aside-card resources-card";
      $(".lesson-aside").append(card);
    }
    card.replaceChildren();
    const heading = document.createElement("div");
    heading.className = "aside-kicker";
    heading.textContent = "MODULE WORKSPACE";
    card.append(heading);
    [["theory","Theory and explanations"],["examples","Code examples"],["exercises","Practice exercises"],["assessment","Assessment"],["projects","Mini project"]].forEach(([folder,label]) => {
      const link = document.createElement("a");
      link.href = sourceRoot + module.slug + "/" + folder + "/";
      link.target = "_blank"; link.rel = "noreferrer";
      link.textContent = label + " ↗";
      card.append(link);
    });
  }
  function updateLessonProgress() {
    const module = state.modules[state.active];
    if (!module || !$("#lesson-progress-state")) return;
    const done = state.completed.has(module.number);
    $("#lesson-progress-state").textContent = done ? "Completed ✓" : "Not completed";
    $("#complete-module").textContent = done ? "Mark as not completed" : "Mark module complete";
    $("#complete-module").classList.toggle("completed-button", done);
  }
  async function openModule(number) {
    const index = state.modules.findIndex((module) => module.number === number);
    if (index < 0) return;
    state.active = index;
    const module = state.modules[index];
    $("#home-view").hidden = true;
    $("#lesson-view").hidden = false;
    $("#lesson-breadcrumb").textContent = "Module " + module.number;
    $("#lesson-kicker").textContent = "MODULE " + module.number + " · " + module.track.toUpperCase();
    $("#lesson-title").textContent = module.title;
    $("#lesson-description").textContent = module.description;
    $("#lesson-duration").textContent = "Suggested study time: " + module.duration;
    $("#lesson-content").innerHTML = '<div class="loading-state">Loading the module documentation…</div>';
    $("#source-link").href = sourceRoot + module.slug + "/README.md";
    $("#previous-module").disabled = index === 0;
    $("#next-module").disabled = index === state.modules.length - 1;
    $("#previous-module").style.opacity = index === 0 ? ".45" : "1";
    $("#next-module").style.opacity = index === state.modules.length - 1 ? ".45" : "1";
    setActiveNavigation(number);
    updateLessonProgress();
    renderResourceLinks(module);
    $("#sidebar").classList.remove("open");
    $("#mobile-menu").setAttribute("aria-expanded", "false");
    history.replaceState(null, "", "#module-" + number);
    window.scrollTo({ top: 0, behavior: "smooth" });
    try {
      const markdown = await getModuleMarkdown(module);
      const renderer = markdownRenderer();
      if (!renderer) throw new Error("The lesson renderer could not load. Check your internet connection and refresh the page.");
      $("#lesson-content").innerHTML = renderer.render(markdown);
      $("#lesson-content").querySelectorAll("a[href]").forEach((link) => {
        if (link.hostname && link.hostname !== location.hostname) { link.target = "_blank"; link.rel = "noreferrer"; }
      });
      addCopyButtons();
      makeTableOfContents();
    } catch (error) {
      $("#lesson-content").innerHTML = '<div class="empty-state"><strong>Lesson content unavailable.</strong><p></p><p>Use the source link to read this module directly on GitHub.</p></div>';
      $("#lesson-content").querySelector(".empty-state p").textContent = error.message;
    }
  }
  function showHome() {
    $("#home-view").hidden = false;
    $("#lesson-view").hidden = true;
    setActiveNavigation("");
    $("#sidebar").classList.remove("open");
    $("#mobile-menu").setAttribute("aria-expanded", "false");
    history.replaceState(null, "", "#home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function filterModules(query) {
    const term = query.trim().toLowerCase();
    document.querySelectorAll(".module-link").forEach((button) => {
      const module = state.modules.find((item) => item.number === button.dataset.moduleNumber);
      const match = !term || (module.title + " " + module.description + " " + module.track + " " + module.tags.join(" ")).toLowerCase().includes(term);
      button.hidden = !match;
    });
    document.querySelectorAll(".module-card").forEach((card, index) => {
      const module = state.modules[index];
      const match = !term || (module.title + " " + module.description + " " + module.track + " " + module.tags.join(" ")).toLowerCase().includes(term);
      card.hidden = !match;
    });
  }
  async function init() {
    loadProgress();
    try {
      const response = await fetch("content/course.json");
      if (!response.ok) throw new Error("Course catalogue could not be loaded.");
      const data = await response.json();
      state.modules = data.modules;
      renderCatalogue();
      const search = $("#module-search");
      search.addEventListener("input", () => filterModules(search.value));
      $("#start-learning").addEventListener("click", () => openModule("01"));
      $("#complete-module").addEventListener("click", () => {
        const number = state.modules[state.active].number;
        if (state.completed.has(number)) state.completed.delete(number);
        else state.completed.add(number);
        saveProgress();
      });
      $("#previous-module").addEventListener("click", () => { if (state.active > 0) openModule(state.modules[state.active - 1].number); });
      $("#next-module").addEventListener("click", () => { if (state.active < state.modules.length - 1) openModule(state.modules[state.active + 1].number); });
      $("#mobile-menu").addEventListener("click", () => {
        const open = $("#sidebar").classList.toggle("open");
        $("#mobile-menu").setAttribute("aria-expanded", String(open));
      });
      document.querySelector(".side-home").addEventListener("click", (event) => { event.preventDefault(); showHome(); });
      const hash = location.hash.match(/^#module-(\d{2})$/);
      if (hash) await openModule(hash[1]);
      else showHome();
    } catch (error) {
      $("#module-nav").textContent = error.message;
      $("#module-cards").textContent = "The course catalogue could not be loaded. Please refresh the page.";
    }
  }
  document.addEventListener("DOMContentLoaded", init);
})();