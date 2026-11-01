/* ═══════════ URLs DAS IMAGENS (COLE SEUS LINKS AQUI) ═══════════ */
// Imagens das Coberturas (Grade e Pedido)
const IMG_COV_TRANSPARENTE = "img/Transparente.png";
const IMG_COV_CORACOES     = "img/Corações.png";
const IMG_COV_ESTRELAS     = "img/Estrelas.png";
const IMG_COV_ESTRELINHAS  = "img/Estrelinhas.png";
const IMG_COV_FLASH        = "img/Flash.png";
const IMG_COV_HOLOGRAFICO  = "img/Holográfico.png";
const IMG_COV_PONTINHOS    = "img/Pontinhos.png";

// Imagens dos Modelos (Pedido)
const IMG_MOD_32MM = "img/32mm.png";
const IMG_MOD_58MM = "img/58mm.png";

/* ═══════════ CONSTANTES NEGÓCIO ═══════════ */
const SHEETDB = 'https://sheetdb.io/api/v1/qum4z9swnsw6z';
const PHONE   = '5594991233752';
const COUPONS = {
  'EDYLLANA10': { type:'pct', value:10, label:'10% de desconto no pedido' },
  'BOASVINDAS5': { type:'reais', value:5, label:'R$ 5,00 de desconto no pedido' },
  'DEVJOSE': { type:'reais', value:2, label:'R$ 2,00 de desconto', min:30 }
};

const COVERS = [
  { id:'transparente', label:'Transparente', desc:'Cobertura limpa, fiel ao original',           img:IMG_COV_TRANSPARENTE, badge:'Padrão',      extra:0 },
  { id:'coracoes',     label:'Corações',     desc:'Corações holográficos no plástico', img:IMG_COV_CORACOES,     badge:'Romântico',  extra:0.5 },
  { id:'estrelas',     label:'Estrelas',     desc:'Contornos de estrelas holográficas',          img:IMG_COV_ESTRELAS,     badge:'Clássico',    extra:0.5 },
  { id:'estrelinhas',  label:'Estrelinhas',  desc:'Glitter fino cheio de estrelinhas',           img:IMG_COV_ESTRELINHAS,  badge:'Brilho',      extra:0.5 },
  { id:'flash',        label:'Flash',        desc:'Faíscas delicadas estilo flash',               img:IMG_COV_FLASH,        badge:'Novo',        extra:0.5 },
  { id:'holografico',  label:'Holográfico',  desc:'Acabamento holográfico arco-íris suave',      img:IMG_COV_HOLOGRAFICO,  badge:'Iridescente', extra:0.5 },
  { id:'pontinhos',    label:'Pontinhos',    desc:'Glitter de pontinhos holográficos',           img:IMG_COV_PONTINHOS,    badge:'Fofo',        extra:0.5 },
];

const MODELS = [
  { id:'32mm', label:'32mm', price:5, img:IMG_MOD_32MM },
  { id:'58mm', label:'58mm', price:6, img:IMG_MOD_58MM },
];
const DEFAULT_MODEL = '58mm';

const EXAMPLES = [
  { label:'K-pop',  desc:'Black Pink',       img:'img/bottons kpop.png' },
  { label:'Anime',  desc:'Kimetsu no Yaiba', img:'img/bottons anime.png' },
  { label:'Pet',    desc:'memes',            img:'img/bottons animais.png' },
  { label:'Casal',  desc:'metadinhas',       img:'img/bottons casal.png' },
];

/* PHOTOCARDS PRICING */
const PHOTOCARDS = [
  { id:'frente-laminado', name:'Frente laminado', desc:'Apenas frente com laminação suave', badge:'Laminado', img:'img/Frente laminado.png',
    tiers:[{qty:1,price:2.50},{qty:10,price:20.00},{qty:20,price:35.00},{qty:25,price:42.00}] },
  { id:'frente-plastificado', name:'Frente plastificado', desc:'Apenas frente com plastificação mais resistente', badge:'Plastificado', img:'img/Frente plastificado.png',
    tiers:[{qty:1,price:3.00},{qty:10,price:25.00},{qty:20,price:44.00},{qty:25,price:52.00}] },
  { id:'frente-verso-laminado', name:'Frente e verso laminado', desc:'Frente e verso com laminação', badge:'Laminado', img:'img/Frente e verso laminado.png',
    tiers:[{qty:1,price:3.50},{qty:10,price:30.00},{qty:20,price:52.00},{qty:25,price:62.00}] },
  { id:'frente-verso-plastificado', name:'Frente e verso plastificado', desc:'Frente e verso com plastificação', badge:'Plastificado', img:'img/Frente e verso plastificado.png',
    tiers:[{qty:1,price:4.00},{qty:10,price:35.00},{qty:20,price:60.00},{qty:25,price:72.00}] }
];

/* Fotocards do catálogo: 2 acabamentos grandes com gaveta de variantes */
const PHOTO_FINISHES = [
  { id:'laminado', name:'Laminado', desc:'Acabamento suave com brilho elegante', badge:'Suave',
    img:'img/Frente laminado.png', imgVerso:'img/Frente e verso laminado.png',
    variants:[ {id:'frente-verso-laminado', label:'Frente e Verso'}, {id:'frente-laminado', label:'Frente'} ] },
  { id:'plastificado', name:'Plastificado', desc:'Mais resistente e com proteção extra', badge:'Resistente',
    img:'img/Frente plastificado.png', imgVerso:'img/Frente e verso plastificado.png',
    variants:[ {id:'frente-verso-plastificado', label:'Frente e Verso'}, {id:'frente-plastificado', label:'Frente'} ] },
];

/* ═══════════ ÍCONES (SVG nativos, herdam a cor do texto) ═══════════ */
const ICON_PATHS = {
  'sun':         '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
  'moon':        '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  'star':        '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>',
  'cart':        '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 7H6"/>',
  'arrow-right': '<path d="M5 12h14M13 6l6 6-6 6"/>',
  'arrow-left':  '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  'arrow-down':  '<path d="M12 5v14M6 13l6 6 6-6"/>',
  'chevron':     '<path d="M6 9l6 6 6-6"/>',
  'check':       '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  'alert':       '<path d="M12 3.5L2.5 20h19L12 3.5z"/><path d="M12 10v4.5M12 17.5v.01"/>',
  'gift':        '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M5 12v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8M7.5 8a2.5 2.5 0 1 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 1 1 0 5"/>',
  'tag':         '<path d="M3 12.6V4a1 1 0 0 1 1-1h8.6a1 1 0 0 1 .7.3l7.4 7.4a1 1 0 0 1 0 1.4l-8.6 8.6a1 1 0 0 1-1.4 0L3.3 13.3a1 1 0 0 1-.3-.7z"/><circle cx="7.5" cy="7.5" r="1.2"/>',
  'card':        '<rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M9 7.5h6M9 11.5h6"/>',
  'pin':         '<path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  'cap':         '<path d="M2 9l10-5 10 5-10 5L2 9z"/><path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5M22 9v6"/>',
  'bolt':        '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>',
  'sparkle':     '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/><path d="M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z"/>',
  'minus':       '<path d="M5 12h14"/>',
  'plus':        '<path d="M12 5v14M5 12h14"/>'
};
function icon(name, extraClass){
  const fill = name === 'star' ? ' fill="currentColor"' : ' fill="none"';
  return `<svg class="ico${extraClass ? ' ' + extraClass : ''}" viewBox="0 0 24 24"${fill} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[name] || ''}</svg>`;
}
/* Troca <i data-ico="nome"></i> pelo SVG correspondente */
const ICON_SUN = icon('sun'), ICON_MOON = icon('moon');
function applyThemeIcon(dark){
  const el = document.getElementById('t-ico');
  if(el) el.innerHTML = dark ? ICON_SUN : ICON_MOON;
}
function hydrateIcons(root){
  (root || document).querySelectorAll('i[data-ico]').forEach(el => {
    el.outerHTML = icon(el.dataset.ico);
  });
}
hydrateIcons();

/* ═══════════ STATE ═══════════ */
let cfg = {
  preco_papel_fotografico: 0.50,
  promo_minimo: 2, desconto_valor: 1,
  desconto_tipo: 'reais', brindes_disponiveis: true,
  descricao_brinde: 'Brinde surpresa',
};
let qty=1, selPlast='transparente', selModelo=DEFAULT_MODEL, selPapel='fotografico',
    selPromo='brinde', promoVisible=false, cart=[], selectedPhotoQty=1,
    selectedPhotoModel = null, selectedProductType = 'botton',
    selectedProtetor = 'none', selectedSelectionMode='normal', appliedCoupon=null, couponSuspended=false,
    photoPreviewToken=0,
    favorites = loadStoredFavorites();

function loadStoredFavorites(){
  try {
    const stored = JSON.parse(localStorage.getItem('edyllana-favorites') || '[]');
    return Array.isArray(stored) ? stored.filter(id => typeof id === 'string') : [];
  } catch(e){
    localStorage.removeItem('edyllana-favorites');
    return [];
  }
}

/* ═══════════ PARTICLES CANVAS ═══════════ */
(function initParticles(){
  const canvas = document.getElementById('particles-canvas');
  if(!canvas) return;
  const ctx    = canvas.getContext('2d');
  let W, H, particles = [], mouse = { x: -1000, y: -1000 };
  const COUNT = 90;

  function resize(){
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

  class Particle {
    constructor(){
      this.reset(true);
    }
    reset(init){
      this.x  = Math.random() * W;
      this.y  = init ? Math.random() * H : H + 10;
      this.vy = -(Math.random() * .4 + .15);
      this.vx = (Math.random() - .5) * .15;
      this.r  = Math.random() * 1.5 + .5;
      this.alpha = Math.random() * .5 + .1;
      this.decay = Math.random() * .0008 + .0002;
    }
    update(){
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if(dist > 0 && dist < 120){
        const force = (120 - dist) / 120 * .4;
        this.vx += dx / dist * force;
        this.vy += dy / dist * force;
      }
      this.vx *= .98; this.vy *= .98;
      this.x += this.vx; this.y += this.vy;
      this.alpha -= this.decay;
      if(this.alpha <= 0 || this.y < -10) this.reset(false);
    }
    draw(){
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(192,132,252,${this.alpha})`;
      ctx.fill();
    }
  }

  for(let i=0; i<COUNT; i++) particles.push(new Particle());

  /* connection lines */
  function drawLines(){
    for(let i=0; i<particles.length; i++){
      for(let j=i+1; j<particles.length; j++){
        const p1=particles[i], p2=particles[j];
        const dx=p1.x-p2.x, dy=p1.y-p2.y;
        const d=Math.sqrt(dx*dx+dy*dy);
        if(d<110){
          ctx.beginPath();
          ctx.strokeStyle=`rgba(192,132,252,${(1-d/110)*.06})`;
          ctx.lineWidth=.5;
          ctx.moveTo(p1.x,p1.y); ctx.lineTo(p2.x,p2.y);
          ctx.stroke();
        }
      }
    }
  }

  function loop(){
    ctx.clearRect(0,0,W,H);
    drawLines();
    particles.forEach(p=>{ p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }
  loop();
})();

/* ═══════════ CUSTOM CURSOR ═══════════ */
(function initCursor(){
  /* Celulares/tablets não têm cursor: desativa completamente. */
  if (window.matchMedia('(pointer: coarse)').matches) {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if(dot) dot.remove();
    if(ring) ring.remove();
    document.body.style.cursor = 'auto';
    return;
  }

  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  let mouseX=window.innerWidth/2, mouseY=window.innerHeight/2;
  let ringX=mouseX, ringY=mouseY;

  document.addEventListener('mousemove', e=>{
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  function updateRing(){
    ringX += (mouseX - ringX) * .16;
    ringY += (mouseY - ringY) * .16;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(updateRing);
  }
  updateRing();

  /* Quando o mouse sai da janela/site, esconde o cursor custom e volta ao cursor nativo. */
  const hideCustomCursor = () => { dot.style.opacity = '0'; ring.style.opacity = '0'; document.body.style.cursor = 'auto'; };
  const showCustomCursor = () => { dot.style.opacity = '1'; ring.style.opacity = '1'; document.body.style.cursor = 'none'; };
  document.addEventListener('mouseleave', hideCustomCursor);
  document.addEventListener('mouseenter', showCustomCursor);
  document.addEventListener('visibilitychange', () => {
    if(document.hidden) hideCustomCursor(); else showCustomCursor();
  });

  const hoverEls = 'button, a, [data-magnetic], .pill, .car-card, .cover-card, .promo-opt, .upload-box, .car-arrow, .qty-btn';
  document.addEventListener('mouseover', e=>{
    if(e.target.closest(hoverEls)) ring.classList.add('hovering');
    else ring.classList.remove('hovering');
  });
})();

/* ═══════════ MAGNETIC ═══════════ */
(function initMagnetic(){
  document.querySelectorAll('[data-magnetic]').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width/2;
      const y = e.clientY - r.top  - r.height/2;
      el.style.transform = `translate(${x*.18}px,${y*.18}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
})();

/* ═══════════ SCROLL REVEAL ═══════════ */
(function initReveal(){
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
  },{ threshold:.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

/* ═══════════ MARQUEE ═══════════ */
(function buildMarquees(){
  const items = ['Brilhante','Fosco','Glitter','Transparente','Holográfico','K-pop','Anime','Pet','Casal','Artesanal','Personalizado','Sem frete','Entrega pessoal'];
  function fill(id, offset=0){
    const el = document.getElementById(id);
    if(!el) return;
    const arr = [...items.slice(offset), ...items.slice(0,offset)];
    const doubled = [...arr,...arr,...arr,...arr];
    el.innerHTML = doubled.map(t=>`<span class="marquee-item">${t}</span>`).join('');
  }
  fill('mq1',0); fill('mq2',7);
})();

/* ═══════════ FAVORITE ICONS (antes do buildHome: evita TDZ) ═══════════ */
var FAV_SVG_ON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>';
var FAV_SVG_OFF = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>';
function favButtonHTML(id){
  const on = isFavorite(id);
  return `<button class="fav-btn ${on ? 'is-on' : ''}" onclick="event.stopPropagation();toggleFavorite('${id}')" title="${on ? 'Remover dos favoritos' : 'Salvar nos favoritos'}" aria-pressed="${on}" aria-label="${on ? 'Remover dos favoritos' : 'Salvar nos favoritos'}">${on ? FAV_SVG_ON : FAV_SVG_OFF}</button>`;
}

/* ═══════════ BUILD HOME ═══════════ */
(function buildHome(){
  /* Carousel */
  const c = document.getElementById('carousel');
  if(c){
    EXAMPLES.forEach(e=>{
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
      <div class="car-ph">
        <img src="${e.img}" alt="${e.label}" loading="lazy" decoding="async">
        <span class="car-ph-lbl">${e.label}</span>
      </div>
      <div class="car-info">
        <strong>${e.label}</strong>
        ${e.desc ? `<p>${e.desc}</p>` : ''}
      </div>`;
    c.appendChild(card);
    });
  }

  /* Covers grid */
  const g = document.getElementById('covers-grid');
  if(g){
  COVERS.forEach(cv=>{
    const card = document.createElement('div');
    card.className = 'cover-card reveal';
    card.innerHTML = `
      <div class="cover-ph">
        <img src="${cv.img}" alt="${cv.label}" loading="lazy" decoding="async">
      </div>
      <div class="cover-body">
        <div class="cover-name">${cv.label}</div>
        <div class="cover-desc">${cv.desc}</div>
        <div class="cover-tags">
          ${cv.badge ? `<span class="cover-badge">${cv.badge}</span>` : ''}
          ${(cv.extra||0) > 0 ? `<span class="cover-extra">+R$ ${fmt(cv.extra)}</span>` : ''}
        </div>
      </div>`;
    g.appendChild(card);
    });
    const coverObs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); coverObs.unobserve(e.target); } });
    },{ threshold:.1 });
    g.querySelectorAll('.reveal').forEach(el => coverObs.observe(el));
  }
  initPhotocards();
  restoreCart();
  updateCartNavCount();
  updateFavNavCount();

  const savedTheme = localStorage.getItem('edyllana-theme');
  applyThemeIcon(savedTheme === 'light' ? false : true);
  if(savedTheme === 'light' || savedTheme === 'dark'){
    document.documentElement.setAttribute('data-theme', savedTheme);
    const dark = savedTheme === 'dark';
    const icon = document.getElementById('t-ico');
    const label = document.getElementById('t-lbl');
    if(icon) icon.innerHTML = dark ? ICON_SUN : ICON_MOON;
    if(label) label.textContent = dark ? 'Claro' : 'Escuro';
  }
})();

/* buildPhotocardCard/render/init ... */
function buildPhotocardCard(item){
  const card = document.createElement('article');
  card.className = 'photo-card reveal in';
  card.innerHTML = `
    <div class="photo-card-head">
      <div>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
      </div>
      <div style="display:flex;gap:.5rem;align-items:center">
        ${favButtonHTML(item.id)}
        <span class="photo-badge">${item.badge}</span>
      </div>
    </div>
    <div class="photo-tiers">
      ${item.tiers.map(t => `<div class="photo-tier"><span>${t.qty} un.</span><strong>R$ ${fmt(t.price)}</strong></div>`).join('')}
    </div>
    <div class="photo-actions">
      <a class="photo-order link-reset" href="pedido.html?tipo=photocard&modelo=${item.id}">Montar pedido</a>
    </div>`;
  return card;
}

/* ═══════════ CARDS DE PHOTOCARD (2 ACABAMENTOS + GAVETA) ═══════════ */
function buildFinishCard(fin){
  const card = document.createElement('article');
  card.className = 'finish-card';
  card.dataset.finish = fin.id;
  card.dataset.front = fin.img;
  card.innerHTML = `
    <div class="finish-media">
      <img class="finish-img" src="${fin.img}" alt="${fin.name}" loading="lazy" decoding="async">
      <span class="photo-badge finish-badge">${fin.badge}</span>
    </div>
    <div class="finish-head">
      <div class="finish-head-txt">
        <h3>${fin.name}</h3>
        <p>${fin.desc}</p>
      </div>
      <button class="finish-toggle" type="button" aria-expanded="false">
        Escolher <span class="finish-chevron">${icon('chevron')}</span>
      </button>
    </div>
    <div class="finish-drawer">
      <div class="finish-drawer-inner">
        <div class="finish-drawer-pad">
          ${fin.variants.map(v=>{
            const ph = PHOTOCARDS.find(p=>p.id===v.id);
            const img = v.label === 'Frente' ? fin.img : fin.imgVerso;
            return `
            <div class="finish-row">
              <a class="finish-opt" href="pedido.html?tipo=photocard&modelo=${v.id}" data-img="${img}">
                <span class="finish-opt-hd">${v.label}<span class="finish-opt-arrow">${icon('arrow-right')}</span></span>
                <span class="finish-opt-prices">${ph.tiers.map(t=>`<em>${t.qty} un. · R$ ${fmt(t.price)}</em>`).join('')}</span>
              </a>
              ${favButtonHTML(v.id)}
            </div>`;
          }).join('')}
        </div>
      </div>
    </div>`;
  return card;
}

function renderPhotocards(){
  const grid = document.getElementById('photo-grid');
  if(!grid) return;
  // Mantém abertas as gavetas que estavam fixadas (ex.: a pessoa salvou um favorito no celular)
  const pinned = new Set(
    [...grid.querySelectorAll('.finish-card[data-pinned="1"]')].map(c => c.dataset.finish)
  );
  grid.innerHTML = PHOTO_FINISHES.map(fin => buildFinishCard(fin).outerHTML).join('');
  grid.querySelectorAll('.finish-card').forEach(card=>{
    if(pinned.has(card.dataset.finish)){
      card.dataset.pinned = '1';
      card.classList.add('pinned', 'open');
      card.querySelector('.finish-toggle')?.setAttribute('aria-expanded','true');
    }
  });
  bindFinishCards();
}

function bindFinishCards(){
  const hoverable = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  document.querySelectorAll('.finish-card').forEach(card=>{
    const img = card.querySelector('.finish-img');
    const toggle = card.querySelector('.finish-toggle');
    const front = card.dataset.front;
    const isPinned = ()=> card.dataset.pinned === '1';
    const setImg = src => { if(img && src) img.src = src; };
    const open = ()=> card.classList.add('open');
    const close = ()=>{ card.classList.remove('open'); setImg(front); };

    // Desktop: abre no hover e fecha sozinha ao tirar o mouse (a não ser que tenha sido clicada)
    if(hoverable){
      card.addEventListener('mouseenter', ()=>{ if(!isPinned()) open(); });
      card.addEventListener('mouseleave', ()=>{ if(!isPinned()) close(); });
    }

    // Clique/toque fixa a gaveta aberta; clicar de novo fecha
    const togglePin = ()=>{
      if(isPinned()){
        card.dataset.pinned = '0';
        card.classList.remove('pinned');
        toggle?.setAttribute('aria-expanded','false');
        if(!hoverable || !card.matches(':hover')) close();
      } else {
        card.dataset.pinned = '1';
        card.classList.add('pinned', 'open');
        toggle?.setAttribute('aria-expanded','true');
      }
    };
    toggle?.addEventListener('click', e=>{ e.stopPropagation(); togglePin(); });
    [card.querySelector('.finish-media'), card.querySelector('.finish-head')].forEach(el=>{
      el?.addEventListener('click', e=>{
        if(e.target.closest('a,button')) return;
        togglePin();
      });
    });

    // Passar o mouse nas opções troca a imagem grande (frente ↔ frente e verso)
    card.querySelectorAll('.finish-opt').forEach(opt=>{
      opt.addEventListener('mouseenter', ()=> setImg(opt.dataset.img));
      opt.addEventListener('mouseleave', ()=> setImg(front));
    });
  });
}

function initPhotocards(){
  renderPhotocards();
  renderFavoritesHome();
}

function isFavorite(id){
  return favorites.includes(id);
}

function toggleFavorite(id){
  if(isFavorite(id)) favorites = favorites.filter(f => f !== id);
  else favorites.push(id);
  localStorage.setItem('edyllana-favorites', JSON.stringify(favorites));
  renderPhotocards();
  renderCatalog();
  renderFavoritesHome();
  updateFavNavCount();
}

function updateFavNavCount(){
  const badge = document.getElementById('nav-fav-count');
  if(badge) badge.textContent = favorites.length;
}

function renderFavoritesHome(){
  const section = document.getElementById('favorites-section');
  const grid = document.getElementById('favorites-grid');
  if(!section || !grid) return;
  const items = PHOTOCARDS.filter(p => isFavorite(p.id));
  section.style.display = 'block';
  if(!items.length){
    grid.innerHTML = '<div class="photo-empty">Você ainda não salvou favoritos. Toque na estrela de um photocard para guardar aqui.</div>';
    return;
  }
  grid.innerHTML = items.map(item => buildPhotocardCard(item).outerHTML).join('');
}

function scrollCar(dir){
  const car = document.getElementById('carousel');
  if(car) car.scrollBy({left:dir*260,behavior:'smooth'});
}

/* ═══════════ NAVIGATION ═══════════ */
function goOrder(){
  const home = document.getElementById('page-home');
  const order = document.getElementById('page-order');
  if(home && order){
    home.style.display  = 'none';
    order.style.display = 'block';
    window.scrollTo(0,0);
    loadConfig();
  } else {
    location.href = 'pedido.html';
  }
}
function goHome(){
  const home = document.getElementById('page-home');
  const order = document.getElementById('page-order');
  if(home && order){
    order.style.display = 'none';
    home.style.display  = 'block';
    window.scrollTo(0,0);
  } else {
    location.href = 'index.html';
  }
}

/* ═══════════ LOAD CONFIG ═══════════ */
async function loadConfig(){
  const loading = document.getElementById('cfg-loading');
  const body = document.getElementById('order-body');
  if(loading) loading.style.display = 'none';
  if(body) body.style.display  = 'block';
  cfg = Object.assign({
    preco_papel_fotografico: 0.50,
    promo_minimo: 2, desconto_valor: 1, desconto_tipo: 'reais',
    brindes_disponiveis: true, descricao_brinde: 'Brinde surpresa'
  }, cfg || {});

  buildOrderUI();
  buildPhotocardOrderUI();
  selectProductType('botton');
  const urlParams = new URLSearchParams(location.search);
  if(urlParams.get('tipo') === 'photocard'){
    const modelo = urlParams.get('modelo');
    if(modelo && PHOTOCARDS.some(p => p.id === modelo)){
      selectedPhotoModel = modelo;
      buildPhotocardOrderUI();
    }
    selectProductType('photocard');
  }
  appliedCoupon = localStorage.getItem('edyllana-coupon');
  if(appliedCoupon && !COUPONS[appliedCoupon]) appliedCoupon = null;
  restoreCart();
  restoreCartFromUrl();
  updateSummary();
}

/* ═══════════ BUILD ORDER UI ═══════════ */
function buildOrderUI(){
  const prevPlast = document.getElementById('preview-cobertura');
  const prevModel = document.getElementById('preview-modelo');
  if(!prevPlast || !prevModel) return;
  const showBg = (box, img) => { box.style.backgroundImage = `url('${img}')`; };

  // --- COBERTURA ---
  setupDrawer('plast-pills', {
    cols: 2,
    options: () => COVERS.map(c => ({ id:c.id, label:c.label, meta:(c.extra||0) > 0 ? `+R$ ${fmt(c.extra)}` : 'Padrão', img:c.img })),
    getSel: () => selPlast,
    onPick: id => { selPlast = id; showBg(prevPlast, COVERS.find(c => c.id === id).img); updateSummary(); },
    onPreview: img => showBg(prevPlast, img || COVERS.find(c => c.id === selPlast).img)
  });
  showBg(prevPlast, COVERS.find(c => c.id === selPlast).img);

  // --- MODELO ---
  setupDrawer('model-pills', {
    options: () => MODELS.map(m => ({ id:m.id, label:m.label, meta:`R$ ${fmt(m.price)}`, img:m.img })),
    getSel: () => selModelo,
    onPick: id => { selModelo = id; showBg(prevModel, MODELS.find(m => m.id === id).img); updateSummary(); },
    onPreview: img => {
      const active = MODELS.find(m => m.id === selModelo) || MODELS.find(m => m.id === DEFAULT_MODEL);
      showBg(prevModel, img || active.img);
    }
  });
  showBg(prevModel, (MODELS.find(m => m.id === selModelo) || MODELS.find(m => m.id === DEFAULT_MODEL)).img);

  // --- PAPEL ---
  setupDrawer('papel-pills', {
    options: () => [
      { id:'a4',          label:'A4',                meta:'Sem custo extra' },
      { id:'fotografico', label:'Papel fotográfico', meta:`+R$ ${fmt(cfg.preco_papel_fotografico)} · Recomendado` }
    ],
    getSel: () => selPapel,
    onPick: id => { selPapel = id; updatePaperWarning(); updateSummary(); }
  });
  updatePaperWarning();

  document.getElementById('desc-pct-label').textContent =
    cfg.desconto_tipo==='pct' ? `Desconto de ${cfg.desconto_valor}%` : `Desconto de R$ ${fmt(cfg.desconto_valor)}`;
}

/* ═══════════ GAVETA DE OPÇÕES (mesmo padrão do photocard) ═══════════
   Desktop: abre ao passar o mouse e a imagem de prévia acompanha a opção.
   Celular: abre/fecha no toque. Teclado: abre com foco, Esc fecha. */
function setupDrawer(hostId, cfg){
  const host = document.getElementById(hostId);
  if(!host) return;
  host.className = 'opt-drawer';
  const hoverable = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const box = () => host.querySelector('.po-finish');
  const setOpen = open => {
    box()?.classList.toggle('open', open);
    host.querySelector('.po-trigger')?.setAttribute('aria-expanded', String(open));
  };

  const render = open => {
    const opts = cfg.options();
    const sel = opts.find(o => o.id === cfg.getSel()) || opts[0];
    host.innerHTML = `
      <div class="po-finish${open ? ' open' : ''}">
        <button class="po-trigger" type="button" aria-expanded="${!!open}">
          <span class="po-trigger-name">${sel.label}${sel.meta ? `<small class="po-trigger-meta">${sel.meta}</small>` : ''}</span>
          <span class="po-trigger-side">Alterar <span class="po-chevron">${icon('chevron')}</span></span>
        </button>
        <div class="po-drawer"><div class="po-drawer-inner"><div class="po-drawer-pad${cfg.cols === 2 ? ' cols-2' : ''}">
          ${opts.map(o => `<button class="po-opt${o.id === sel.id ? ' on' : ''}" type="button" data-id="${o.id}"${o.img ? ` data-img="${o.img}"` : ''}>
            <span>${o.label}</span>${o.meta ? `<em>${o.meta}</em>` : ''}
          </button>`).join('')}
        </div></div></div>
      </div>`;
  };
  render(false);

  if(hoverable){
    host.addEventListener('mouseenter', () => setOpen(true));
    host.addEventListener('mouseleave', () => {
      if(!host.contains(document.activeElement)) setOpen(false);
      cfg.onPreview?.(null);
    });
    host.addEventListener('mouseover', e => {
      const opt = e.target.closest('.po-opt');
      if(opt && opt.dataset.img) cfg.onPreview?.(opt.dataset.img);
    });
  }
  host.addEventListener('focusin', () => setOpen(true));
  host.addEventListener('focusout', e => {
    if(!host.contains(e.relatedTarget)) setOpen(false);
  });
  host.addEventListener('keydown', e => {
    if(e.key === 'Escape'){ setOpen(false); host.querySelector('.po-trigger')?.blur(); }
  });
  host.addEventListener('click', e => {
    const opt = e.target.closest('.po-opt');
    if(opt){
      cfg.onPick(opt.dataset.id);
      render(hoverable);          // desktop continua aberta sob o mouse; celular fecha
      return;
    }
    if(e.target.closest('.po-trigger') && !hoverable){
      setOpen(!box().classList.contains('open'));
    }
  });
}

/* Mostra o aviso do papel A4 apenas quando ele está selecionado */
function updatePaperWarning(){
  const w = document.getElementById('paper-warning');
  if(!w) return;
  w.classList.toggle('show', selPapel === 'a4');
}

/* ═══════════ QTY ═══════════ */
function changeQty(d){
  qty = Math.max(1, qty+d);
  document.getElementById('qty-disp').textContent = qty;
}

function newCartId(prefix){
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function makeBottonItem(plast, modelo, papel, n){
  const info = getItemInfo({ plast, modelo, papel, qty:n });
  return {
    id: newCartId('cart'),
    type: 'botton',
    label: `Botton ${info.modelo} · ${info.cover} · ${info.papel}`,
    plast, modelo, papel,
    qty: n,
    unit: info.unit,
    subtotal: info.subtotal
  };
}

const PROTETORES = {
  none:       { label:'Sem protetor',          price:0,  cartLabel:'Sem protetor' },
  basico:     { label:'Protetor transparente', price:5,  cartLabel:'Protetor transparente (+ R$ 5,00)' },
  figurinhas: { label:'Protetor + figurinhas', price:10, cartLabel:'Protetor + figurinhas (+ R$ 10,00)' }
};

function makePhotoItem(photo, tier, protetor){
  const key = PROTETORES[protetor] ? protetor : 'none';
  const prot = PROTETORES[key];
  return {
    id: newCartId('photo'),
    type: 'photocard',
    photoId: photo.id,
    photoQty: tier.qty,
    label: `Photocard ${photo.name} · ${tier.qty} un.`,
    qty: tier.qty,
    unit: tier.price / tier.qty,
    photoSubtotal: tier.price,
    protetor: key,
    protetorLabel: prot.cartLabel,
    protetorPrice: prot.price,
    subtotal: tier.price + prot.price
  };
}

/* Reconstrói o carrinho só com dados válidos (localStorage ou link compartilhado podem vir adulterados) */
function sanitizeCart(list){
  if(!Array.isArray(list)) return [];
  const out = [];
  list.forEach(raw => {
    if(!raw || typeof raw !== 'object') return;
    if(raw.type === 'photocard'){
      const photo = PHOTOCARDS.find(p => p.id === raw.photoId);
      const tier = photo?.tiers.find(t => t.qty === Number(raw.photoQty));
      if(photo && tier) out.push(makePhotoItem(photo, tier, raw.protetor));
    } else if(raw.type === 'botton'){
      const n = Math.floor(Number(raw.qty));
      if(COVERS.some(c => c.id === raw.plast) && MODELS.some(m => m.id === raw.modelo)
         && (raw.papel === 'a4' || raw.papel === 'fotografico') && n >= 1 && n <= 999){
        out.push(makeBottonItem(raw.plast, raw.modelo, raw.papel, n));
      }
    }
  });
  return out;
}

function addToCart(){
  const item = makeBottonItem(selPlast, selModelo, selPapel, qty);
  const info = getItemInfo(item);
  cart.push(item);
  qty = 1;
  document.getElementById('qty-disp').textContent = qty;
  updatePromoBlock();
  persistCart();
  updateSummary();
  updateCartNavCount();
  toast(`${item.qty}x ${info.modelo} com ${info.cover} adicionado ao carrinho`);
}

function restoreCart(){
  try {
    const saved = localStorage.getItem('edyllana-cart');
    if(saved){
      cart = sanitizeCart(JSON.parse(saved));
    }
  } catch(e){
    cart = [];
    localStorage.removeItem('edyllana-cart');
  }
}

function persistCart(){
  localStorage.setItem('edyllana-cart', JSON.stringify(cart));
}

function updateCartNavCount(){
  const count = getTotalQty();
  const badge = document.getElementById('nav-cart-count');
  if(badge) badge.textContent = count;
}

function removeFromCart(id){
  cart = cart.filter(item => item.id !== id);
  persistCart();
  updatePromoBlock();
  updateSummary();
  updateCartNavCount();
}

function getTotalQty(){
  return cart.reduce((sum, item) => sum + (Number(item.qty) || 0), 0);
}
function getBottonQty(){
  return cart.reduce((sum, item) => sum + (item.type === 'botton' ? (Number(item.qty) || 0) : 0), 0);
}

function getItemInfo(item){
  const cover = COVERS.find(c=>c.id===item.plast)?.label || item.plast;
  const coverExtra = COVERS.find(c=>c.id===item.plast)?.extra || 0;
  const model = MODELS.find(m=>m.id===item.modelo) || MODELS.find(m=>m.id===DEFAULT_MODEL);
  const modelo = model.label;
  const papel = item.papel === 'fotografico' ? 'Papel Fotográfico' : 'A4';
  const unit = model.price + coverExtra + (item.papel==='fotografico'?cfg.preco_papel_fotografico:0);
  const subtotal = unit * item.qty;
  return { cover, modelo, papel, unit, subtotal };
}

function describeCartItem(item, index){
  if(item.type === 'photocard'){
    const protetor = item.protetorLabel ? ` | ${item.protetorLabel}` : '';
    return `${index + 1}. ${item.label}${protetor} — R$ ${fmt(item.subtotal)}`;
  }
  const info = getItemInfo({ plast: item.plast || selPlast, modelo: item.modelo || DEFAULT_MODEL, papel: item.papel || 'a4', qty: item.qty });
  return `${index + 1}. ${item.qty}x ${info.modelo} | ${info.cover} | ${info.papel} — R$ ${fmt(item.subtotal)}`;
}

function summarizeCart(field){
  return cart.map((item, index) => {
    const info = getItemInfo(item);
    if(field === 'modelo') return `${item.qty}x ${info.modelo}`;
    if(field === 'cobertura') return `${item.qty}x ${info.cover}`;
    if(field === 'papel') return `${item.qty}x ${info.papel}`;
    return describeCartItem(item, index);
  }).join(' | ');
}

/* ═══════════ PROMO ═══════════ */
function updatePromoBlock(){
  const block = document.getElementById('promo-block');
  const nomeStep = document.getElementById('step-nome-n');
  const promoStepN = document.getElementById('step-promo-n');
  if(!block) return;
  
  const totalQty = getBottonQty();
  promoVisible = cart.length > 0 && totalQty >= cfg.promo_minimo;

  if(promoVisible){
    block.style.display = 'block';
    if(promoStepN) promoStepN.textContent = '5';
    const desc = document.getElementById('promo-block-desc');
    if(desc) desc.textContent =
      `Seu carrinho tem ${totalQty} bottons. A partir de ${cfg.promo_minimo}, você escolhe um benefício para o pedido inteiro:`;
      
    const brindeBtn = document.getElementById('opt-brinde');
    const notice    = document.getElementById('promo-notice');
    if(!cfg.brindes_disponiveis){
      brindeBtn.classList.add('disabled'); notice.style.display='block';
      notice.textContent='Os brindes estão esgotados. Apenas desconto disponível.';
      if(selPromo==='brinde') selectPromo('desconto');
    } else {
      brindeBtn.classList.remove('disabled'); notice.style.display='none';
    }
  } else {
    block.style.display='none';
    selPromo='brinde';
    promoVisible=false;
  }
}

function selectPromo(opt){
  if(opt==='brinde' && !cfg.brindes_disponiveis) return;
  selPromo = opt;
  document.getElementById('opt-brinde').classList.toggle('on',   opt==='brinde');
  document.getElementById('opt-desconto').classList.toggle('on', opt==='desconto');
  updateSummary();
}

/* ═══════════ PRODUCT TYPE / PHOTOCARD ORDER ═══════════ */
function selectProductType(type){
  selectedProductType = type;
  if(selectedSelectionMode !== 'normal') return;
  const bottonPanel = document.getElementById('panel-botton');
  const photoPanel = document.getElementById('panel-photocard');
  const btnBotton = document.getElementById('type-botton');
  const btnPhoto = document.getElementById('type-photocard');
  if(type === 'photocard'){
    if(bottonPanel) bottonPanel.style.display = 'none';
    if(photoPanel) photoPanel.style.display = 'block';
    btnBotton?.classList.remove('on');
    btnPhoto?.classList.add('on');
    btnBotton?.setAttribute('aria-selected','false');
    btnPhoto?.setAttribute('aria-selected','true');
  } else {
    if(bottonPanel) bottonPanel.style.display = 'block';
    if(photoPanel) photoPanel.style.display = 'none';
    btnBotton?.classList.add('on');
    btnPhoto?.classList.remove('on');
    btnBotton?.setAttribute('aria-selected','true');
    btnPhoto?.setAttribute('aria-selected','false');
  }
}

function buildPhotocardOrderUI(){
  const wrap = document.getElementById('photo-order-models');
  if(!wrap) return;
  if(!selectedPhotoModel) selectedPhotoModel = PHOTOCARDS[0]?.id || null;
  selectedPhotoQty = selectedPhotoQty || PHOTOCARDS[0]?.tiers?.[0]?.qty || 1;

  // Mantém a gaveta aberta entre reconstruções (ex.: selecionou uma opção no celular)
  const openBefore = new Set([...wrap.querySelectorAll('.po-finish.open')].map(f => f.dataset.finish));

  wrap.innerHTML = PHOTO_FINISHES.map(fin=>{
    const isOpen = openBefore.has(fin.id);
    const isSelected = fin.variants.some(v => v.id === selectedPhotoModel);
    return `
    <div class="po-finish${isOpen ? ' open' : ''}" data-finish="${fin.id}">
      <button class="po-trigger${isSelected ? ' is-sel' : ''}" type="button" aria-expanded="${isOpen}">
        <span class="po-trigger-name">${fin.name}</span>
        <span class="po-trigger-side"><span class="po-check">${icon('check')}</span>Escolher <span class="po-chevron">${icon('chevron')}</span></span>
      </button>
      <div class="po-drawer"><div class="po-drawer-inner"><div class="po-drawer-pad">
        ${fin.variants.map(v=>{
          const ph = PHOTOCARDS.find(p => p.id === v.id);
          const on = v.id === selectedPhotoModel;
          return `<button class="po-opt${on ? ' on' : ''}" type="button" data-model="${v.id}" data-img="${ph.img}">
            <span>${v.label}</span><em>desde R$ ${fmt(ph.tiers[0].price)}</em>
          </button>`;
        }).join('')}
      </div></div></div>
    </div>`;
  }).join('');

  bindPhotoOrderDrawers();
  updatePhotocardOrderPreview();
}

function bindPhotoOrderDrawers(){
  const wrap = document.getElementById('photo-order-models');
  if(!wrap || wrap.dataset.bound === '1') return;
  wrap.dataset.bound = '1';
  const hoverable = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const openFin = fin=>{
    fin.classList.add('open');
    fin.querySelector('.po-trigger')?.setAttribute('aria-expanded','true');
  };
  const closeFin = fin=>{
    fin.classList.remove('open');
    fin.querySelector('.po-trigger')?.setAttribute('aria-expanded','false');
  };

  // Desktop: a gaveta abre e fecha só no hover — nenhuma "gruda" sem o mouse em cima.
  // Eventos delegados no contêiner: sobrevivem às reconstruções do innerHTML.
  if(hoverable){
    wrap.addEventListener('mouseover', e=>{
      const fin = e.target.closest('.po-finish');
      if(!fin || (e.relatedTarget && fin.contains(e.relatedTarget))) return;
      openFin(fin);
    });
    wrap.addEventListener('mouseout', e=>{
      const fin = e.target.closest('.po-finish');
      if(!fin) return;
      const to = e.relatedTarget;
      if(to && fin.contains(to)) return;
      closeFin(fin);
    });

    // Passar o mouse nas opções troca a foto; ao sair, volta para a selecionada
    wrap.addEventListener('mouseover', e=>{
      const opt = e.target.closest('.po-opt');
      if(!opt || (e.relatedTarget && opt.contains(e.relatedTarget))) return;
      setPhotoPreviewImg(opt.dataset.img);
    });
    wrap.addEventListener('mouseout', e=>{
      const opt = e.target.closest('.po-opt');
      if(!opt) return;
      const to = e.relatedTarget;
      if(to && opt.contains(to)) return;
      const sel = PHOTOCARDS.find(p => p.id === selectedPhotoModel);
      if(sel) setPhotoPreviewImg(sel.img);
    });
  }

  // Clique/toque: no celular abre uma gaveta por vez (acordeão);
  // no desktop o clique não fixa mais — abertura é só no hover
  wrap.addEventListener('click', e=>{
    const opt = e.target.closest('.po-opt');
    if(opt){ setPhotoModel(opt.dataset.model); return; }
    const trigger = e.target.closest('.po-trigger');
    if(!trigger) return;
    e.stopPropagation();
    if(hoverable) return;
    const fin = trigger.closest('.po-finish');
    if(!fin) return;
    if(fin.classList.contains('open')){
      closeFin(fin);
    } else {
      wrap.querySelectorAll('.po-finish.open').forEach(closeFin);
      openFin(fin);
    }
  });
}

function setPhotoModel(id){
  selectedPhotoModel = id;
  buildPhotocardOrderUI();
}

/* Troca a foto pequena com fade suave; o token evita que trocas rápidas "corram" */
function setPhotoPreviewImg(src){
  const img = document.getElementById('photo-order-preview-img');
  if(!img || !src) return;
  if(img.getAttribute('src') === src){
    photoPreviewToken++;
    img.style.opacity = '1';
    return;
  }
  const token = ++photoPreviewToken;
  img.style.opacity = '0';
  const pre = new Image();
  pre.onload = ()=>{
    if(token !== photoPreviewToken) return;
    img.src = src;
    img.style.opacity = '1';
  };
  pre.onerror = ()=>{
    if(token === photoPreviewToken) img.style.opacity = '1';
  };
  pre.src = src;
}

function updatePhotocardOrderPreview(){
  const item = PHOTOCARDS.find(p => p.id === selectedPhotoModel);
  if(!item) return;
  const qtyWrap = document.getElementById('photo-order-qty');
  setPhotoPreviewImg(item.img);
  if(qtyWrap){
    qtyWrap.innerHTML = item.tiers.map(t => `
      <button class="pill${t.qty === selectedPhotoQty ? ' on' : ''}" onclick="setPhotoQty(${t.qty})">
        ${t.qty} un. · R$ ${fmt(t.price)}
      </button>
    `).join('');
  }
  renderPhotoComparator(item);
  const unit = item.tiers.find(t => t.qty === selectedPhotoQty);
  const unitEl = document.getElementById('photo-order-unit');
  const totalEl = document.getElementById('photo-order-selected-total');
  const fullPriceEl = document.getElementById('photo-full-price');
  const savingsEl = document.getElementById('photo-savings');
  const savingsTextEl = document.getElementById('photo-savings-text');
  const fillEl = document.getElementById('photo-economy-fill');
  // Atualiza totais unitário e total do selecionado (sem protetor ainda)
  if(unit && unitEl) unitEl.textContent = `R$ ${fmt(unit.price / unit.qty)}`;
  if(unit && totalEl) totalEl.textContent = `R$ ${fmt(unit.price)}`;

  updateProtetorUI();

  if(unit && fullPriceEl && savingsEl){
    const singleTier = item.tiers.find(t => t.qty === 1) || unit;
    const singleUnitPrice = singleTier.price / singleTier.qty;
    const fullPrice = singleUnitPrice * unit.qty;
    const savings = Math.max(0, fullPrice - unit.price);
    const percent = fullPrice > 0 ? (savings / fullPrice * 100) : 0;
    fullPriceEl.textContent = `R$ ${fmt(fullPrice)}`;
    savingsEl.textContent = `R$ ${fmt(savings)} (${percent.toFixed(0)}%)`;
    if(savingsTextEl){
      if(unit.qty === 1){
        savingsTextEl.textContent = 'A economia começa com pacotes maiores que 1 unidade.';
      } else {
        savingsTextEl.textContent = `Levando ${unit.qty} unidades você deixa de pagar R$ ${fmt(savings)} em relação ao preço unitário.`;
      }
    }
    if(fillEl){
      fillEl.style.width = `${Math.min(100, percent)}%`;
    }
  }
}

function setPhotoQty(qty){
  selectedPhotoQty = qty;
  updatePhotocardOrderPreview();
}

function selectProtetor(tipo){
  const validas = ['none','basico','figurinhas'];
  if(!validas.includes(tipo)) return;
  selectedProtetor = tipo;
  updateProtetorUI();
}

function updateProtetorUI(){
  const options = PROTETORES;
  const selected = options[selectedProtetor] || options.none;
  const noneBtn = document.getElementById('protetor-none-btn');
  const basicoBtn = document.getElementById('protetor-basico-btn');
  const figurinhasBtn = document.getElementById('protetor-figurinhas-btn');
  const basicoCard = document.getElementById('protetor-card-basico');
  const figurinhasCard = document.getElementById('protetor-card-figurinhas');
  const totalEl = document.getElementById('photo-order-protetor-total');

  noneBtn?.classList.toggle('on', selectedProtetor === 'none');
  basicoBtn?.classList.toggle('on', selectedProtetor === 'basico');
  figurinhasBtn?.classList.toggle('on', selectedProtetor === 'figurinhas');
  basicoCard?.classList.toggle('is-selected', selectedProtetor === 'basico');
  figurinhasCard?.classList.toggle('is-selected', selectedProtetor === 'figurinhas');
  noneBtn?.setAttribute('aria-pressed', String(selectedProtetor === 'none'));
  basicoBtn?.setAttribute('aria-pressed', String(selectedProtetor === 'basico'));
  figurinhasBtn?.setAttribute('aria-pressed', String(selectedProtetor === 'figurinhas'));
  if(totalEl) totalEl.textContent = selected.price ? `${selected.label} · R$ ${fmt(selected.price)}` : selected.label;
}

function addPhotocardToCart(){
  const item = PHOTOCARDS.find(p => p.id === selectedPhotoModel);
  if(!item) return;
  const tier = item.tiers.find(t => t.qty === selectedPhotoQty);
  if(!tier) return;
  cart.push(makePhotoItem(item, tier, selectedProtetor));
  persistCart();
  updateSummary();
  updateCartNavCount();
  toast(`Photocard ${item.name} (${tier.qty} un.) adicionado ao carrinho`);
}

/* ═══════════ COUPON / SHARE / MODE ═══════════ */
function applyCoupon(){
  const input = document.getElementById('coupon-input');
  const code = (input?.value || '').trim().toUpperCase();
  if(!code){
    toast('Digite um cupom para aplicar');
    return;
  }
  if(!COUPONS[code]){
    // Não apaga um cupom já aplicado só porque outro código digitado é inválido
    toast('Cupom inválido');
    return;
  }
  const coupon = COUPONS[code];
  const baseTotal = cart.reduce((sum, item) => sum + (Number(item.subtotal) || 0), 0);
  if(coupon.min && baseTotal < coupon.min){
    toast(`Cupom ${code} só funciona acima de R$ ${fmt(coupon.min)} — seu carrinho está em R$ ${fmt(baseTotal)}`);
    return;
  }
  appliedCoupon = code;
  persistAppliedCoupon();
  updateSummary();
  updateCouponUI();
  toast(`Cupom ${code} aplicado`);
}

function removeCoupon(){
  appliedCoupon = null;
  couponSuspended = false;
  persistAppliedCoupon();
  const input = document.getElementById('coupon-input');
  if(input){ input.value=''; input.disabled=false; }
  updateSummary();
  updateCouponUI();
  toast('Cupom removido');
}

function handleCouponAction(){
  if(appliedCoupon) removeCoupon();
  else applyCoupon();
}

function updateCouponUI(){
  const input = document.getElementById('coupon-input');
  const btn = document.getElementById('coupon-action-btn');
  const info = document.getElementById('coupon-applied');
  if(appliedCoupon && COUPONS[appliedCoupon]){
    const coupon = COUPONS[appliedCoupon];
    if(input){ input.value = appliedCoupon; input.disabled = true; }
    if(btn) btn.textContent = 'Remover cupom';
    if(info){
      info.style.display = 'block';
      const { raw, couponDiscount } = calcTotal();
      if(coupon.min && raw < coupon.min){
        info.classList.add('is-warn');
        info.textContent = `Cupom ${appliedCoupon} só funciona acima de R$ ${fmt(coupon.min)} — falta R$ ${fmt(Math.max(0, coupon.min - raw))} para ativar.`;
      } else {
        info.classList.remove('is-warn');
        info.textContent = couponDiscount > 0
          ? `Cupom ${appliedCoupon} aplicado: ${coupon.label} (−R$ ${fmt(couponDiscount)})`
          : `Cupom ${appliedCoupon} aplicado: ${coupon.label}`;
      }
    }
  } else {
    if(input){ input.disabled = false; }
    if(btn) btn.textContent = 'Aplicar';
    if(info){ info.style.display = 'none'; info.textContent = ''; info.classList.remove('is-warn'); }
  }
}

/* Avisa quando o cupom aplicado fica pausado (abaixo do mínimo) ou volta a valer */
function checkCouponSuspension(){
  if(!appliedCoupon || !COUPONS[appliedCoupon]){
    couponSuspended = false;
    return;
  }
  const coupon = COUPONS[appliedCoupon];
  const raw = cart.reduce((sum, item) => sum + (Number(item.subtotal) || 0), 0);
  const suspended = !!(coupon.min && raw < coupon.min);
  if(suspended && !couponSuspended){
    toast(`Carrinho abaixo de R$ ${fmt(coupon.min)}: o cupom ${appliedCoupon} fica pausado até atingir o mínimo`);
  } else if(!suspended && couponSuspended){
    toast(`Cupom ${appliedCoupon} reativado: ${coupon.label}`);
  }
  couponSuspended = suspended;
}

function persistAppliedCoupon(){
  if(appliedCoupon) localStorage.setItem('edyllana-coupon', appliedCoupon);
  else localStorage.removeItem('edyllana-coupon');
}

function shareCart(){
  if(!cart.length){
    toast('Adicione itens antes de compartilhar');
    return;
  }
  const token = encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify(cart)))));
  const url = `${location.origin}${location.pathname}?cart=${token}`;
  if(navigator.clipboard && window.isSecureContext){
    navigator.clipboard.writeText(url).then(() => toast('Link do carrinho copiado'));
  } else {
    prompt('Copie o link do carrinho:', url);
  }
}

function restoreCartFromUrl(){
  const params = new URLSearchParams(location.search);
  if(!params.has('cart')) return;
  try {
    const restored = JSON.parse(decodeURIComponent(escape(atob(params.get('cart')))));
    if(!Array.isArray(restored)) throw new Error('Formato de carrinho inválido');
    cart = sanitizeCart(restored);
    persistCart();
    updateCartNavCount();
    history.replaceState(null, '', location.pathname);
    toast('Carrinho compartilhado carregado');
  } catch(e){
    console.warn('Carrinho compartilhado inválido', e);
  }
}

function setSelectionMode(mode){
  selectedSelectionMode = mode;
  const normal = mode === 'normal';
  const btnNormal = document.getElementById('mode-normal');
  const btnCatalog = document.getElementById('mode-catalog');
  const tabs = document.querySelector('.product-type-tabs');
  const panelBotton = document.getElementById('panel-botton');
  const panelPhoto = document.getElementById('panel-photocard');
  const panelCatalog = document.getElementById('panel-catalog');

  if(btnNormal) btnNormal.classList.toggle('on', normal);
  if(btnCatalog) btnCatalog.classList.toggle('on', !normal);
  if(btnNormal) btnNormal.setAttribute('aria-selected', String(normal));
  if(btnCatalog) btnCatalog.setAttribute('aria-selected', String(!normal));

  if(tabs) tabs.style.display = normal ? 'flex' : 'none';
  if(panelCatalog) panelCatalog.style.display = normal ? 'none' : 'block';

  if(normal){
    if(panelBotton) panelBotton.style.display = selectedProductType === 'botton' ? 'block' : 'none';
    if(panelPhoto) panelPhoto.style.display = selectedProductType === 'photocard' ? 'block' : 'none';
  } else {
    if(panelBotton) panelBotton.style.display = 'none';
    if(panelPhoto) panelPhoto.style.display = 'none';
    renderCatalog();
  }
}

function renderCatalog(){
  const grid = document.getElementById('catalog-grid');
  if(!grid) return;
  const photoCards = PHOTOCARDS.map(item => `
    <article class="photo-card">
      <div class="photo-card-head">
        <div>
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
        </div>
        <div style="display:flex;gap:.5rem;align-items:center">
          ${favButtonHTML(item.id)}
          <span class="photo-badge">${item.badge}</span>
        </div>
      </div>
      <div class="photo-tiers">
        ${item.tiers.map(t => `<button class="tier-chip" onclick="quickAddPhotocard('${item.id}', ${t.qty})">${t.qty} un. · R$ ${fmt(t.price)}</button>`).join('')}
      </div>
    </article>
  `).join('');

  grid.innerHTML = photoCards + `
    <article class="photo-card">
      <div class="photo-card-head">
        <div>
          <h3>Botton personalizado</h3>
          <p>Escolha cobertura, modelo e papel no modo padrão.</p>
        </div>
        <span class="photo-badge">Botton</span>
      </div>
      <button class="btn-add-cart" onclick="setSelectionMode('normal'); selectProductType('botton')">Configurar botton</button>
    </article>`;
}

function quickAddPhotocard(photoId, qty){
  const item = PHOTOCARDS.find(p => p.id === photoId);
  if(!item) return;
  const tier = item.tiers.find(t => t.qty === qty);
  if(!tier) return;
  cart.push(makePhotoItem(item, tier, 'none'));
  persistCart();
  updateSummary();
  updatePromoBlock();
  updateCartNavCount();
  toast(`Photocard ${item.name} (${tier.qty} un.) adicionado ao carrinho`);
}

/* ═══════════ COMPARADOR ═══════════ */
function renderPhotoComparator(item){
  const body = document.getElementById('photo-compare-body');
  if(!body || !item) return;
  const singleTier = item.tiers.find(t => t.qty === 1) || item.tiers[0];
  const singleUnitPrice = singleTier.price / singleTier.qty;
  body.innerHTML = item.tiers.map(t => {
    const full = singleUnitPrice * t.qty;
    const economy = Math.max(0, full - t.price);
    const percent = full > 0 ? economy / full * 100 : 0;
    return `<tr>
      <td>${t.qty} un.</td>
      <td>R$ ${fmt(full)}</td>
      <td>R$ ${fmt(t.price)}</td>
      <td>R$ ${fmt(economy)} (${percent.toFixed(0)}%)</td>
    </tr>`;
  }).join('');
}

/* ═══════════ CÁLCULO ═══════════ */
function calcTotal(){
  const raw = cart.reduce((sum, item) => sum + (Number(item.subtotal) || 0), 0);
  let total = raw;
  let desc  = 0, promoLabel='—';

  const bottonTotal = cart.reduce((sum, item) => sum + (item.type === 'botton' ? (Number(item.subtotal) || 0) : 0), 0);
  if(promoVisible && selPromo==='desconto' && cfg.desconto_valor>0 && bottonTotal > 0){
    desc  = cfg.desconto_tipo==='pct' ? bottonTotal*cfg.desconto_valor/100 : cfg.desconto_valor;
    desc  = Math.min(desc, bottonTotal);
    total = Math.max(0, total-desc);
    promoLabel = cfg.desconto_tipo==='pct'
      ? `Desconto ${cfg.desconto_valor}% sobre bottons (−R$ ${fmt(desc)})`
      : `Desconto R$ ${fmt(cfg.desconto_valor)} sobre bottons`;
  } else if(promoVisible && selPromo==='brinde'){
    promoLabel = `Brinde: ${cfg.descricao_brinde} (sem alterar o total)`;
  }

  let couponDiscount = 0;
  if(appliedCoupon && COUPONS[appliedCoupon]){
    const coupon = COUPONS[appliedCoupon];
    // Mínimo conferido sobre a soma bruta dos itens (mesma base do applyCoupon)
    if(coupon.min && raw < coupon.min){
      couponDiscount = 0;
    } else {
      couponDiscount = coupon.type === 'pct' ? total * coupon.value / 100 : coupon.value;
      total = Math.max(0, total - couponDiscount);
    }
  }

  const photoSavings = cart.reduce((sum, item) => {
    if(item.type !== 'photocard' || !item.photoId) return sum;
    const photo = PHOTOCARDS.find(p => p.id === item.photoId);
    if(!photo) return sum;
    const singleTier = photo.tiers.find(t => t.qty === 1) || photo.tiers[0];
    const singleUnitPrice = singleTier.price / singleTier.qty;
    const photoSubtotal = Number(item.photoSubtotal ?? ((Number(item.subtotal) || 0) - (Number(item.protetorPrice) || 0)));
    return sum + Math.max(0, (singleUnitPrice * (Number(item.qty) || 0)) - photoSubtotal);
  }, 0);

  const promoSavings = (promoVisible && selPromo === 'desconto') ? desc : 0;
  const totalSavings = photoSavings + promoSavings + couponDiscount;

  return { total, raw, desc, promoLabel, couponDiscount, savings: totalSavings };
}

function parseMoney(value, fallback){
  const parsed = parseFloat(String(value ?? '').replace(',', '.'));
  return Number.isFinite(parsed) ? parsed : fallback;
}

function fmt(v){ return parseFloat(v).toFixed(2).replace('.',','); }

/* ═══════════ SUMMARY ═══════════ */
function updateSummary(){
  updatePromoBlock();
  const {total,promoLabel,couponDiscount,savings} = calcTotal();
  const sSavings = document.getElementById('s-savings');
  const sCoupon = document.getElementById('s-coupon');
  if(sSavings) sSavings.textContent = 'R$ '+fmt(savings);
  if(sCoupon) sCoupon.textContent = 'R$ '+fmt(couponDiscount);
  const sEconomy = document.getElementById('s-economy');
  if(sEconomy) sEconomy.textContent = 'R$ '+fmt(savings);
  updateCouponUI();
  checkCouponSuspension();
  const cartItems = document.getElementById('cart-items');
  const btnSend = document.getElementById('btn-send');
  if(!cartItems) { updateCartNavCount(); return; }

  cartItems.innerHTML = cart.length ? cart.map((item, index) => {
    return `
      <div class="cart-item">
        <div>
          <div class="cart-item-title">${index + 1}. ${item.label}</div>
          <div class="cart-item-details">${item.type === 'botton' ? 'Botton personalizado' : (item.protetorLabel || 'Sem protetor')}</div>
          <div class="cart-item-subtotal">Subtotal: R$ ${fmt(item.subtotal)}</div>
        </div>
        <button class="cart-remove" onclick="removeFromCart('${item.id}')">Remover</button>
      </div>`;
  }).join('') : `
    <div class="cart-empty">
      <strong>Carrinho vazio</strong>
      <span>Escolha um produto acima e clique em “Adicionar ao carrinho”.</span>
    </div>`;

  const sQty = document.getElementById('s-qty');
  const sPromo = document.getElementById('s-promo');
  const sTotal = document.getElementById('s-total');
  if(sQty) sQty.textContent    = getTotalQty();
  if(sPromo) sPromo.textContent  = promoLabel;
  if(sTotal) sTotal.textContent  = 'R$ '+fmt(total);

  if(btnSend) btnSend.classList.toggle('is-disabled', !cart.length);
  updateCartNavCount();
}

/* ═══════════ WHATSAPP + MODAL ═══════════ */
let _pendingWppUrl = '';
let _pendingOrderArgs = null;

function sendWpp(){
  if(!cart.length) { toast('Adicione pelo menos um item ao carrinho'); return; }
  updatePromoBlock();
  document.getElementById('modal-backdrop')?.classList.add('open');
  setTimeout(() => document.getElementById('nome-in')?.focus(), 350);
}

function closeModal(e){
  if(e.target.id === 'modal-backdrop') closeModalDirect();
}
function closeModalDirect(){
  document.getElementById('modal-backdrop')?.classList.remove('open');
}

function confirmSendWpp(){
  const nomeEl = document.getElementById('nome-in');
  const nome = (nomeEl?.value || '').trim();
  if(!nome){
    toast('Digite seu nome para continuar');
    nomeEl?.focus();
    nomeEl?.classList.add('inp-error');
    setTimeout(() => nomeEl?.classList.remove('inp-error'), 1600);
    return;
  }
  updatePromoBlock();
  const {total,promoLabel} = calcTotal();
  const itemsTxt = cart.map(describeCartItem).join('\n');
  const promoTxt = promoVisible?`\nBenefício: ${promoLabel}`:'';
  const msg = `Olá! Quero fazer um pedido\n\nNome: ${nome}\n\nItens:\n${itemsTxt}\n\nQuantidade total: ${getTotalQty()}${promoTxt}\nTotal: R$ ${fmt(total)}\n\nVou enviar a foto como documento em seguida!`;
  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
  closeModalDirect();
  cart = [];
  persistCart();
  updateSummary();
  updatePromoBlock();
  updateCartNavCount();
  if(nomeEl) nomeEl.value = '';
  toast('WhatsApp aberto! Carrinho limpo. Lembre-se de anexar a foto como Documento.');
}

/* ═══════════ THEME ═══════════ */
function toggleTheme(){
  const dark = document.documentElement.getAttribute('data-theme')==='dark';
  const next = dark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('edyllana-theme', next);
  const ico = document.getElementById('t-ico'), lbl = document.getElementById('t-lbl');
  if(ico) ico.innerHTML = dark ? ICON_MOON : ICON_SUN;
  if(lbl) lbl.textContent = dark?'Escuro':'Claro';
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModalDirect();
});

/* ═══════════ TOAST ═══════════ */
let _toastTimer = null;
function toast(msg){
  const t = document.getElementById('toast');
  if(!t) return;
  t.textContent = msg; t.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(()=>t.classList.remove('show'), 3200);
}

/* Destaca no menu a página atual */
function markActiveNav(){
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-right a.theme-btn').forEach(a => {
    const href = a.getAttribute('href') || '';
    const isCurrent = !href.includes('#') && href === page;
    a.classList.toggle('is-current', isCurrent);
    if(isCurrent) a.setAttribute('aria-current', 'page');
  });
}

/* Auto-init per page: pedido.html carrega o montador sozinho */
document.addEventListener('DOMContentLoaded', () => {
  updateCartNavCount();
  updateFavNavCount();
  markActiveNav();
  document.getElementById('coupon-input')?.addEventListener('keydown', e => {
    if(e.key === 'Enter' && !appliedCoupon){ e.preventDefault(); applyCoupon(); }
  });
  if(document.getElementById('order-body')){
    loadConfig();
  }
});
