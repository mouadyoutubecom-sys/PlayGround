const I18N = {
  ar: {
    title: "Office Shortcuts Pro", subtitle: "جميع اختصارات Word و Excel و PowerPoint في مكان واحد — ابحث، صفِّ، احفظ، واختبر نفسك.",
    search: "ابحث عن اختصار... (مثال: حفظ، Copy، Ctrl+S)",
    home: "الرئيسية", favorites: "المفضلة", quiz: "اختبر نفسك", stats: "إحصائيات",
    all: "الكل", word: "Word", excel: "Excel", powerpoint: "PowerPoint", common: "مشتركة",
    total: "إجمالي الاختصارات", favCount: "المفضلة", quizScore: "نتيجتك",
    copy: "نسخ", copied: "تم النسخ!", fav: "مفضلة", removeFav: "إزالة",
    noResult: "لا توجد نتائج مطابقة.", noFav: "لا توجد مفضلة بعد. اضغط على القلب لحفظ اختصاراتك.",
    category: "الفئة", app: "البرنامج",
    categories: { file:"أساسيات الملفات", navigation:"التنقل والتحديد", formatting:"التنسيق المشترك", text:"التنسيق النصي", paragraphs:"أنماط وفقرات", tables:"الجداول والإدراج", review:"المراجعة والتدقيق", cells:"أساسيات الخلايا", formulas:"الصيغ والدوال", numbers:"التنسيق والأرقام", tables_select:"الجداول والتحديد", macros:"الماكرو والقوائم", slides:"الشرائح", presentation:"العرض التقديمي", editing:"التحرير والكائنات" },
    apps: { word:"Word", excel:"Excel", powerpoint:"PowerPoint", common:"عام مشترك" },
    quizQ: "ماذا يفعل هذا الاختصار؟", next: "التالي", restart: "إعادة الاختبار", finish: "نتيجتك النهائية", start: "بدء الاختبار", quizHint: "10 أسئلة عشوائية مع 4 خيارات.",
    light: "فاتح", dark: "ليلي", shortcuts: "اختصار", perApp: "عدد الاختصارات لكل برنامج",
    heroCards: { common:"اختصارات تعمل في البرامج الثلاثة", word:"التنسيق والفقرات والجداول", excel:"الخلايا والصيغ والجداول", powerpoint:"الشرائح والعرض التقديمي" }
  },
  en: {
    title: "Office Shortcuts Pro", subtitle: "All Word, Excel & PowerPoint shortcuts in one place — search, filter, save and quiz yourself.",
    search: "Search shortcuts... (e.g. save, Copy, Ctrl+S)",
    home: "Home", favorites: "Favorites", quiz: "Quiz yourself", stats: "Statistics",
    all: "All", word: "Word", excel: "Excel", powerpoint: "PowerPoint", common: "Common",
    total: "Total shortcuts", favCount: "Favorites", quizScore: "Your score",
    copy: "Copy", copied: "Copied!", fav: "Favorite", removeFav: "Remove",
    noResult: "No matching results.", noFav: "No favorites yet. Tap the heart to save shortcuts.",
    category: "Category", app: "App",
    categories: { file:"File basics", navigation:"Navigation & selection", formatting:"Shared formatting", text:"Text formatting", paragraphs:"Styles & paragraphs", tables:"Tables & insert", review:"Review & proofing", cells:"Cell basics", formulas:"Formulas & functions", numbers:"Formatting & numbers", tables_select:"Tables & selection", macros:"Macros & menus", slides:"Slides", presentation:"Slideshow", editing:"Editing & objects" },
    apps: { word:"Word", excel:"Excel", powerpoint:"PowerPoint", common:"Shared common" },
    quizQ: "What does this shortcut do?", next: "Next", restart: "Restart quiz", finish: "Your final score", start: "Start quiz", quizHint: "10 random questions with 4 options.",
    light: "Light", dark: "Dark", shortcuts: "shortcuts", perApp: "Shortcuts per app",
    heroCards: { common:"Shortcuts that work in all three apps", word:"Formatting, paragraphs & tables", excel:"Cells, formulas & tables", powerpoint:"Slides & slideshow" }
  },
  fr: {
    title: "Office Shortcuts Pro", subtitle: "Tous les raccourcis Word, Excel et PowerPoint au même endroit — recherchez, filtrez, enregistrez et testez-vous.",
    search: "Rechercher... (ex : enregistrer, Copy, Ctrl+S)",
    home: "Accueil", favorites: "Favoris", quiz: "Testez-vous", stats: "Statistiques",
    all: "Tout", word: "Word", excel: "Excel", powerpoint: "PowerPoint", common: "Communs",
    total: "Total raccourcis", favCount: "Favoris", quizScore: "Votre score",
    copy: "Copier", copied: "Copié !", fav: "Favori", removeFav: "Retirer",
    noResult: "Aucun résultat.", noFav: "Aucun favori. Touchez le cœur pour enregistrer.",
    category: "Catégorie", app: "Application",
    categories: { file:"Bases des fichiers", navigation:"Navigation & sélection", formatting:"Mise en forme commune", text:"Mise en forme du texte", paragraphs:"Styles & paragraphes", tables:"Tableaux & insertion", review:"Révision", cells:"Bases des cellules", formulas:"Formules & fonctions", numbers:"Formats & nombres", tables_select:"Tableaux & sélection", macros:"Macros & menus", slides:"Diapositives", presentation:"Diaporama", editing:"Édition & objets" },
    apps: { word:"Word", excel:"Excel", powerpoint:"PowerPoint", common:"Commun partagé" },
    quizQ: "Que fait ce raccourci ?", next: "Suivant", restart: "Recommencer", finish: "Votre score final", start: "Commencer", quizHint: "10 questions aléatoires avec 4 options.",
    light: "Clair", dark: "Sombre", shortcuts: "raccourcis", perApp: "Raccourcis par application",
    heroCards: { common:"Raccourcis valables dans les trois applis", word:"Mise en forme, paragraphes et tableaux", excel:"Cellules, formules et tableaux", powerpoint:"Diapositives et diaporama" }
  }
};

const state = {
  lang: localStorage.getItem("osp_lang") || "ar",
  theme: localStorage.getItem("osp_theme") || "light",
  view: "home", app: "all", category: "all", query: "",
  data: [], favs: new Set(JSON.parse(localStorage.getItem("osp_favs") || "[]")),
  quiz: { list: [], idx: 0, score: 0, answered: false }
};

const $ = (s) => document.querySelector(s);
const t = () => I18N[state.lang];
const descOf = (s) => state.lang === "ar" ? s.desc_ar : state.lang === "fr" ? s.desc_fr : s.desc_en;

function saveFavs(){ localStorage.setItem("osp_favs", JSON.stringify([...state.favs])); }
function applyMeta(){
  const L = state.lang;
  document.documentElement.lang = L;
  document.documentElement.dir = L === "ar" ? "rtl" : "ltr";
  document.documentElement.dataset.theme = state.theme;
  localStorage.setItem("osp_lang", L); localStorage.setItem("osp_theme", state.theme);
}

function keyHTML(keys){
  return keys.map(k=>`<kbd class="key">${k}</kbd>`).join('<span class="plus">+</span>');
}
function appBadge(app){ return `<span class="badge ${app}">${t().apps[app]||app}</span>`; }

async function loadData(){
  const res = await fetch("data.json");
  state.data = await res.json();
  render();
}

function filtered(){
  const q = state.query.trim().toLowerCase();
  return state.data.filter(s=>{
    if(state.app!=="all" && s.app!==state.app) return false;
    if(state.category!=="all" && s.category!==state.category) return false;
    if(!q) return true;
    const hay = (s.keys.join("+")+" "+s.desc_ar+" "+s.desc_en+" "+s.desc_fr).toLowerCase();
    return hay.includes(q);
  });
}

function categoriesFor(app){
  const set = new Set();
  state.data.forEach(s=>{ if(app==="all"||s.app===app) set.add(s.category); });
  return [...set];
}

function render(){
  applyMeta();
  const L = t();
  // header texts
  $("#uiTitle").textContent = L.title;
  $("#uiSubtitle").textContent = L.subtitle;
  $("#searchInput").placeholder = L.search;
  $("#navHome").textContent = L.home;
  $("#navFav").textContent = "♥ " + L.favorites;
  $("#navQuiz").textContent = "❓ " + L.quiz;
  $("#themeBtn").textContent = state.theme==="light" ? "🌙 "+L.dark : "☀️ "+L.light;
  document.querySelectorAll(".lang-btn").forEach(b=>b.classList.toggle("active", b.dataset.lang===state.lang));
  const setStat=(id,val)=>{const el=document.querySelector(id+" b");if(el)el.textContent=val;};
  const counts = {word:0,excel:0,powerpoint:0,common:0};
  state.data.forEach(s=>{counts[s.app]=(counts[s.app]||0)+1;});

  const main = $("#main");
  if(state.view==="home") main.innerHTML = homeHTML(L,counts);
  else if(state.view==="favorites") main.innerHTML = listHTML(L, state.data.filter(s=>state.favs.has(s.id)), true);
  else if(state.view==="quiz") main.innerHTML = quizHTML(L);
  else main.innerHTML = listHTML(L, filtered(), false);
  bindCards();
}

function homeHTML(L,counts){
  const card=(app,cls,icon)=>`
    <button class="app-card ${cls}" data-app="${app}">
      <h2>${icon} ${L.apps[app]||L[app]||app}</h2>
      <p>${L.heroCards[app]||""}</p>
      <p><b>${counts[app]||0}</b> ${L.shortcuts}</p>
    </button>`;
  return `
  <div class="hero"><h1>⌨️ ${L.title}</h1><p>${L.subtitle}</p></div>
  <div class="stats">
    <div class="stat" id="statTotal"><b>${state.data.length}</b><span>${L.total}</span></div>
    <div class="stat" id="statWord"><b>${counts.word||0}</b><span>Word</span></div>
    <div class="stat" id="statExcel"><b>${counts.excel||0}</b><span>Excel</span></div>
    <div class="stat" id="statPpt"><b>${counts.powerpoint||0}</b><span>PowerPoint</span></div>
    <div class="stat" id="statCommon"><b>${counts.common||0}</b><span>${L.common}</span></div>
    <div class="stat" id="statFav"><b>${state.favs.size}</b><span>${L.favCount}</span></div>
  </div>
  <h3 class="section-title">${L.app}</h3>
  <div class="app-cards">
    ${card("common","common","🧩")}
    ${card("word","word","📝")}
    ${card("excel","excel","📊")}
    ${card("powerpoint","powerpoint","📽️")}
  </div>
  ${listHTML(L, filtered().slice(0,12), false)}`;
}

function listHTML(L, items, isFavPage){
  const cats = ["all", ...categoriesFor(state.app)];
  const apps = ["all","common","word","excel","powerpoint"];
  return `
  <div class="filters">
    <div class="seg" id="appSeg">${apps.map(a=>`<button data-a="${a}" class="${state.app===a?"active":""}">${L[a]||a}</button>`).join("")}</div>
    <select id="catSel">${cats.map(c=>`<option value="${c}" ${state.category===c?"selected":""}>${c==="all"?L.all:(L.categories[c]||c)}</option>`).join("")}</select>
  </div>
  <div class="tabs" id="catTabs">${cats.map(c=>`<button class="tab ${state.category===c?"active":""}" data-c="${c}">${c==="all"?L.all:(L.categories[c]||c)}</button>`).join("")}</div>
  <p style="color:var(--muted)">${items.length} ${L.shortcuts} • ${L.perApp}</p>
  <div class="grid">
    ${items.length?items.map(cardHTML).join(""):`<div class="empty">${isFavPage?L.noFav:L.noResult}</div>`}
  </div>`;
}

function cardHTML(s){
  const L=t(); const fav = state.favs.has(s.id);
  return `<div class="card">
    <div class="card-top">${appBadge(s.app)}<span class="cat">${L.categories[s.category]||s.category}</span></div>
    <div class="keys">${keyHTML(s.keys)}</div>
    <div class="desc">${descOf(s)}</div>
    <div class="card-actions">
      <button class="icon-btn fav ${fav?"active":""}" data-fav="${s.id}">${fav?"♥":"♡"} ${L.fav}</button>
      <button class="icon-btn" data-copy="${s.id}">📋 ${L.copy}</button>
    </div>
  </div>`;
}

function quizHTML(L){
  const q = state.quiz;
  if(!q.list.length) return `<div class="quiz-box"><h2>❓ ${L.quiz}</h2><p>${L.quizHint}</p>
    <button class="btn primary" id="quizStart">${L.start}</button></div>`;
  if(q.idx>=q.list.length) return `<div class="quiz-box"><h2>🏁 ${L.finish}: ${q.score} / ${q.list.length}</h2>
    <button class="btn primary" id="quizStart">${L.restart}</button></div>`;
  const item = q.list[q.idx];
  return `<div class="quiz-box"><p>${L.quizQ} (${q.idx+1}/${q.list.length}) — ⭐ ${q.score}</p>
    <div class="keys" style="font-size:1.2rem">${keyHTML(item.q.keys)}</div>
    <div class="quiz-opts">${item.opts.map((o,i)=>`<button class="quiz-opt" data-opt="${o.id}">${descOf(o)}</button>`).join("")}</div>
    <div style="margin-top:12px"><button class="btn" id="quizNext">${L.next}</button></div></div>`;
}

function startQuiz(){
  const pool=[...state.data]; const list=[];
  for(let i=0;i<10 && pool.length;i++){
    const qi=Math.floor(Math.random()*pool.length);
    const q=pool.splice(qi,1)[0];
    const wrongs=state.data.filter(s=>s.id!==q.id).sort(()=>Math.random()-.5).slice(0,3);
    list.push({q, opts:[q,...wrongs].sort(()=>Math.random()-.5)});
  }
  state.quiz={list,idx:0,score:0,answered:false};
  render();
}

function bindCards(){
  document.querySelectorAll("[data-app]").forEach(b=>b.onclick=()=>{state.view="browse";state.app=b.dataset.app;state.category="all";render();window.scrollTo({top:0});});
  document.querySelectorAll("#appSeg button").forEach(b=>b.onclick=()=>{state.app=b.dataset.a;state.category="all";if(state.view==="home")state.view="browse";render();});
  const cs=$("#catSel"); if(cs) cs.onchange=(e)=>{state.category=e.target.value;render();};
  document.querySelectorAll("#catTabs .tab").forEach(b=>b.onclick=()=>{state.category=b.dataset.c;render();});
  document.querySelectorAll("[data-fav]").forEach(b=>b.onclick=()=>{
    const id=+b.dataset.fav;
    state.favs.has(id)?state.favs.delete(id):state.favs.add(id);
    saveFavs(); render();
  });
  document.querySelectorAll("[data-copy]").forEach(b=>b.onclick=async()=>{
    const s=state.data.find(x=>x.id===+b.dataset.copy);
    const txt=s.keys.join("+")+" — "+descOf(s);
    try{await navigator.clipboard.writeText(txt);}catch(e){
      const ta=document.createElement("textarea");ta.value=txt;document.body.appendChild(ta);ta.select();document.execCommand("copy");ta.remove();
    }
    const old=b.textContent; b.textContent="✅ "+t().copied; setTimeout(()=>render(),900);
  });
  const qs=$("#quizStart"); if(qs) qs.onclick=startQuiz;
  const qn=$("#quizNext"); if(qn) qn.onclick=()=>{state.quiz.idx++;state.quiz.answered=false;render();};
  document.querySelectorAll("[data-opt]").forEach(b=>b.onclick=()=>{
    if(state.quiz.answered) return; state.quiz.answered=true;
    const cur=state.quiz.list[state.quiz.idx];
    const ok=+b.dataset.opt===cur.q.id;
    if(ok){state.quiz.score++;b.classList.add("correct");} else {b.classList.add("wrong");
      document.querySelectorAll("[data-opt]").forEach(x=>{if(+x.dataset.opt===cur.q.id)x.classList.add("correct");});}
    setTimeout(()=>{state.quiz.idx++;state.quiz.answered=false;render();},900);
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  applyMeta();
  $("#searchInput").addEventListener("input",(e)=>{state.query=e.target.value;if(state.view==="home")state.view="browse";render();$("#searchInput").focus();const v=state.query;$("#searchInput").value=v;$("#searchInput").setSelectionRange(v.length,v.length);});
  document.querySelectorAll(".lang-btn").forEach(b=>b.onclick=()=>{state.lang=b.dataset.lang;render();});
  $("#themeBtn").onclick=()=>{state.theme=state.theme==="light"?"dark":"light";render();};
  $("#navHome").onclick=()=>{state.view="home";render();};
  $("#navFav").onclick=()=>{state.view="favorites";render();};
  $("#navQuiz").onclick=()=>{state.view="quiz";render();};
  if(state.lang) document.querySelector(`.lang-btn[data-lang="${state.lang}"]`)?.classList.add("active");
  loadData();
});
