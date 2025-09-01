/* ======= PERSONALIZE HERE ======= */
const SETTINGS = {
  HIS_NAME: "Justyy",            // shown around the site
  FROM_NAME: "Your Girl 💖",
  SECRET_WORD: "bub",    // required on entry screen
  SURPRISE_KEY: "2725",     // required at Surprise section
  START_DATE: "2025-02-07",    // when you met/started dating (YYYY-MM-DD)
  DATE_INVITE_LINK: "https://calendar.google.com/", // replace with your custom link
  SONG_COUNT: "Manyyy",              // for the "songs we’ve shared" stat
 GALLERY: [
  { src: "assets/1.jpeg", caption: "💖" },
  { src: "assets/2.jpeg", caption: "I" },
  { src: "assets/3.jpeg", caption: "❤️" },
  { src: "assets/4.jpeg", caption: "LOVE" },
  { src: "assets/5.jpeg", caption: "💖" },
  { src: "assets/6.jpeg", caption: "❤️" },
  { src: "assets/7.jpeg", caption: "YOU" },
  { src: "assets/8.jpeg", caption: "💖" },
  { src: "assets/9.jpeg", caption: "JUSSS" },
  { src: "assets/10.jpeg", caption: "I" },
  { src: "assets/11.jpeg", caption: "💖" },
  { src: "assets/12.jpeg", caption: "HOPE" },
  { src: "assets/13.jpeg", caption: "❤️" },
  { src: "assets/14.jpeg", caption: "THIS" },
  { src: "assets/15.jpeg", caption: "❤️" },
  { src: "assets/16.jpeg", caption: "MADE" },
  { src: "assets/17.jpeg", caption: "YOUR DAYY!!" },
  { src: "assets/18.jpeg", caption: "❤️" }
],

  LETTERS: [
  { front: "Reason I like you #1", full: "You make ordinary moments feel magical." },
  { front: "A soft promise", full: "I’ll be on your side when life is loud and when it’s quiet." },
  { front: "A tiny truth", full: "Your smile is my favorite place." },
  { front: "Our future", full: "More dates, more laughter, more us — always." },
  { front: "Reason I like you #2", full: "You never fail to make me laugh, even on the toughest days." },
  { front: "When I think of you", full: "I catch myself smiling without even realizing it." },
  { front: "A little confession", full: "You make my heart race in the best way possible." },
  { front: "Reason I like you #3", full: "You listen to me, even when I ramble endlessly." },
  { front: "A warm thought", full: "Holding your hand feels like home." },
  { front: "Dreaming ahead", full: "I imagine us traveling, laughing, and making a lifetime of memories." },
  { front: "Reason I like you #4", full: "You believe in me more than I sometimes believe in myself." },
  { front: "A sweet truth", full: "You are my favorite hello and my hardest goodbye." },
  { front: "Promise #2", full: "I’ll cheer you on in every little victory and every big dream." },
  { front: "Reason I like you #5", full: "You make even silence between us feel comfortable and full." },
  { front: "A forever thought", full: "No matter where life takes us, you’ll always be my person." }
],
  QUIZ: [
  {
    q: "My favorite comfort food is…",
    a: ["Ramen", "Fried chicken", "Carbonara", "Tapsilog"],
    correct: 1
  },
  {
    q: "Which song reminds me of you?",
    a: ["Yellow", "BMF", "Until I Found You", "Perfect"],
    correct: 1
  },
  {
    q: "My dream trip for us:",
    a: ["Hong Kong", "Paris", "Japan", "Seoul"],
    correct: 0
  },
  {
    q: "What flower do I love the most?",
    a: ["Roses", "Tulips", "Sunflowers", "Lilies"],
    correct: 1
  },
  {
    q: "When is my birthday?",
    a: ["September 29, 2005", "September 30, 2005", "October 1, 2005", "August 30, 2005"],
    correct: 1
  },
  {
    q: "How tall am I?",
    a: ["158 cm", "160 cm", "162 cm", "165 cm"],
    correct: 1
  },
  {
    q: "Which fruit do I love?",
    a: ["Mango", "Strawberry", "Banana", "Grapes"],
    correct: 1
  },
  {
    q: "What do I always say I love? 💖",
    a: ["Pizza", "My dog", "TikTok", "You"],
    correct: 3
  },
  {
    q: "Which ice cream flavor makes me happiest?",
    a: ["Vanilla", "Coffee Crumble", "Cookies & Cream", "Chocolate"],
    correct: 1
  },
  {
    q: "What’s my favorite song?",
    a: ["Perfect", "Yellow", "Gameboy", "ILYSB"],
    correct: 2
  },
  {
    q: "Which color do I love the most?",
    a: ["Blue", "Pink", "Black", "White"],
    correct: 1
  },
  {
    q: "What kind of rides do I love?",
    a: ["Ferris wheel", "Vikings", "Bumper cars", "Carousel"],
    correct: 1
  },
  {
    q: "What do I love in general? 😋",
    a: ["Food", "Studying", "Cleaning", "Sleeping"],
    correct: 0
  }
]
};
/* ================================= */

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

document.addEventListener("DOMContentLoaded", () => {
  // Personalize text
  $("#hisName").textContent = SETTINGS.HIS_NAME;
  $("#fromName").textContent = SETTINGS.FROM_NAME;
  $("#entryName").textContent = SETTINGS.HIS_NAME;

  // Tabs
  $$(".tab, .cta-row .btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;
      if(!target) return;
      showPanel(target);
      $$(".tab").forEach(t => t.classList.toggle("active", t.dataset.target === target));
    });
  });

  // Theme toggle
  $("#toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("light");
  });

  // Music controls
  const bgm = $("#bgm");
  let musicOn = false;
  $("#musicBtn").addEventListener("click", () => {
    musicOn ? bgm.pause() : bgm.play().catch(()=>{});
    musicOn = !musicOn;
    $("#musicBtn").textContent = musicOn ? "🔈" : "🔊";
  });

  // Entry gating (autoplay needs user interaction)
  $("#enterBtn").addEventListener("click", () => {
    const pin = $("#secretPin").value.trim().toLowerCase();
    if(pin !== SETTINGS.SECRET_WORD.toLowerCase()){
      shake($("#secretPin"));
      return;
    }
    $("#entry").classList.remove("show");
    // try start music softly
    bgm.volume = 0.6;
    bgm.play().then(()=>{ musicOn = true; $("#musicBtn").textContent = "🔈"; }).catch(()=>{});
    confettiBurst();
  });

  // Stats
  $("#daysTogether").textContent = diffDays(SETTINGS.START_DATE);
  $("#sharedSongs").textContent = SETTINGS.SONG_COUNT;

  // Gallery
  buildGallery();

  // Letters
  buildLetters();

  // Quiz
  buildQuiz();

  // Surprise
  $("#revealBtn").addEventListener("click", () => {
    const key = $("#surpriseKey").value.trim().toLowerCase();
    if(key !== SETTINGS.SURPRISE_KEY.toLowerCase()){
      shake($("#surpriseKey"));
      return;
    }
    $("#surpriseContent").classList.remove("hidden");
    $("#dateInvite").href = SETTINGS.DATE_INVITE_LINK;
    confettiBurst(150);
    const v = $("#surpriseVideo");
    if (v) v.play().catch(()=>{});
  });
});

function showPanel(id){
  $$(".panel").forEach(p => p.classList.remove("show"));
  $("#"+id).classList.add("show");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function diffDays(dateStr){
  const start = new Date(dateStr);
  const today = new Date();
  const ms = today.setHours(0,0,0,0) - start.setHours(0,0,0,0);
  return Math.max(0, Math.floor(ms / (1000*60*60*24)));
}

function buildGallery(){
  const slides = $("#slides");
  const dots = $("#dots");
  slides.innerHTML = "";
  dots.innerHTML = "";
  SETTINGS.GALLERY.forEach((g, i) => {
    const fig = document.createElement("figure");
    fig.className = "slide";
    fig.innerHTML = `<img src="${g.src}" alt="Memory ${i+1}">
                     <figcaption class="caption">${g.caption ?? ""}</figcaption>`;
    slides.appendChild(fig);

    const dot = document.createElement("button");
    dot.className = "dot" + (i===0 ? " active" : "");
    dot.addEventListener("click", () => goTo(i));
    dots.appendChild(dot);
  });

  const prev = $(".prev");
  const next = $(".next");
  let index = 0;

  function goTo(i){
    index = (i + SETTINGS.GALLERY.length) % SETTINGS.GALLERY.length;
    slides.scrollTo({ left: index * slides.clientWidth, behavior: "smooth" });
    $$(".dot").forEach((d,di)=>d.classList.toggle("active", di===index));
  }

  prev.addEventListener("click", () => goTo(index - 1));
  next.addEventListener("click", () => goTo(index + 1));
  window.addEventListener("resize", () => goTo(index));
  goTo(0);
}

function buildLetters(){
  const grid = $("#lettersGrid");
  grid.innerHTML = "";
  SETTINGS.LETTERS.forEach((n, i) => {
    const card = document.createElement("div");
    card.className = "note";
    card.innerHTML = `
      <div class="front">${n.front}</div>
      <div class="full">${n.full}</div>
    `;
    card.addEventListener("click", () => {
      card.classList.toggle("revealed");
    });
    grid.appendChild(card);
  });
}

function buildQuiz(){
  const form = $("#quizForm");
  form.innerHTML = "";
  SETTINGS.QUIZ.forEach((item, idx) => {
    const field = document.createElement("fieldset");
    field.className = "q";
    const legend = document.createElement("legend");
    legend.textContent = `${idx+1}. ${item.q}`;
    field.appendChild(legend);
    item.a.forEach((ans, ai) => {
      const id = `q${idx}_${ai}`;
      const label = document.createElement("label");
      label.setAttribute("for", id);
      label.innerHTML = `
        <input type="radio" name="q${idx}" id="${id}" value="${ai}"> ${ans}
      `;
      field.appendChild(label);
    });
    form.appendChild(field);
  });

  const submit = document.createElement("button");
  submit.type = "button";
  submit.className = "btn primary";
  submit.textContent = "Check my answers";
  submit.addEventListener("click", () => {
    let score = 0;
    SETTINGS.QUIZ.forEach((q, qi) => {
      const selected = form.querySelector(`input[name="q${qi}"]:checked`);
      if(selected && Number(selected.value) === q.correct) score++;
    });
    const res = $("#quizResult");
    const percent = Math.round((score / SETTINGS.QUIZ.length) * 100);
    const msg = percent === 100
      ? "Perfect! You know me by heart. 🥰"
      : percent >= 60
      ? "So good! We’re totally in sync. 💫"
      : "Cute try! More dates to learn each other. 💞";
    res.style.display = "block";
    res.innerHTML = `<strong>${score}/${SETTINGS.QUIZ.length}</strong> (${percent}%) — ${msg}`;
    confettiBurst(120);
  });
  form.appendChild(submit);
}

/* Cute micro-interactions */
function shake(el){
  el.animate(
    [{transform:"translateX(0)"},{transform:"translateX(-6px)"},{transform:"translateX(6px)"},{transform:"translateX(0)"}],
    {duration:300,iterations:1}
  );
  el.focus();
}

/* Minimal confetti without external libs */
function confettiBurst(n = 80){
  const a = document.createElement("div");
  a.style.position="fixed";
  a.style.inset="0";
  a.style.pointerEvents="none";
  a.style.overflow="hidden";
  a.style.zIndex="60";
  document.body.appendChild(a);

  const count = n;
  for(let i=0;i<count;i++){
    const p = document.createElement("div");
    p.style.position="absolute";
    p.style.left = Math.random()*100+"%";
    p.style.top = "-10px";
    p.style.width = "8px";
    p.style.height = "14px";
    p.style.borderRadius = "2px";
    p.style.background = i%2 ? "var(--accent)" : "var(--accent-2)";
    p.style.opacity = 0.9;
    p.style.transform = `rotate(${Math.random()*360}deg)`;
    a.appendChild(p);

    const fall = p.animate(
      [
        { transform: `translateY(0) rotate(${Math.random()*360}deg)` , opacity:1 },
        { transform: `translateY(${window.innerHeight+40}px) rotate(${Math.random()*360}deg)`, opacity: 0.9 }
      ],
      { duration: 1200 + Math.random()*1200, easing: "cubic-bezier(.2,.9,.2,1)" }
    );
    fall.onfinish = () => p.remove();
  }

  setTimeout(()=>a.remove(), 2200);
}

/* Deep-link tabs with data-target buttons */
document.addEventListener("click", e => {
  const t = e.target.closest("[data-target]");
  if(!t) return;
  const target = t.dataset.target;
  showPanel(target);
  $$(".tab").forEach(tb => tb.classList.toggle("active", tb.dataset.target === target));
});

/* OPTIONAL: read ?name= from URL to personalize without editing code */
(function readURLName(){
  const url = new URL(window.location.href);
  const n = url.searchParams.get("name");
  if(n){
    SETTINGS.HIS_NAME = n;
    $("#hisName").textContent = n;
    $("#entryName").textContent = n;
  }
})();
