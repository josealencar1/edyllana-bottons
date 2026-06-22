/* ═══════════ URLs DAS IMAGENS (COLE SEUS LINKS AQUI) ═══════════ */
// Imagens do Portfólio (Carrossel Inicial)
const IMG_PORTFOLIO_1 = "https://images.unsplash.com/photo-1619229667009-e7e0cb214e7b?auto=format&fit=crop&w=800&q=80";
const IMG_PORTFOLIO_2 = "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=800&q=80";
const IMG_PORTFOLIO_3 = "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80";
const IMG_PORTFOLIO_4 = "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80";
const IMG_PORTFOLIO_5 = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80";
const IMG_PORTFOLIO_6 = "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80";

// Imagens das Coberturas (Grade e Pedido)
const IMG_COV_TRANSPARENTE = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80";
const IMG_COV_ESTRELAS     = "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=800&q=80";
const IMG_COV_BRILHINHOS   = "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80";
const IMG_COV_BOLINHAS     = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80";
const IMG_COV_GRADIENTE    = "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=800&q=80";

// Imagens dos Modelos (Pedido)
const IMG_MOD_NORMAL  = "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80";
const IMG_MOD_ESPELHO = "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=800&q=80";

/* ═══════════ CONSTANTES NEGÓCIO ═══════════ */
const SHEETDB = 'https://sheetdb.io/api/v1/qum4z9swnsw6z';
const PHONE   = '5594991233752';

const COVERS = [
  { id:'transparente', label:'Transparente padrão', desc:'Cobertura limpa, fiel ao original',       img:IMG_COV_TRANSPARENTE, badge:'Padrão' },
  { id:'estrelas',     label:'Estrelas',             desc:'Detalhes de estrelas no plástico',       img:IMG_COV_ESTRELAS,     badge:'Novo' },
  { id:'brilhinhos',   label:'Brilhinhos',           desc:'Brilhos delicados no acabamento',        img:IMG_COV_BRILHINHOS,   badge:'Brilho' },
  { id:'bolinhas',     label:'Bolinhas',             desc:'Estampa com bolinhas no plástico',       img:IMG_COV_BOLINHAS,     badge:'Fofo' },
  { id:'gradiente',    label:'Gradiente',            desc:'Efeito suave em degradê',                img:IMG_COV_GRADIENTE,    badge:'Colorido' },
];

const EXAMPLES = [
  { label:'K-pop',    desc:'Acabamento brilhante',  img:IMG_PORTFOLIO_1 },
  { label:'Anime',    desc:'Espelho fosco',          img:IMG_PORTFOLIO_2 },
  { label:'Pet',      desc:'Brilhante normal',       img:IMG_PORTFOLIO_3 },
  { label:'Casal',    desc:'Fosco espelho',          img:IMG_PORTFOLIO_4 },
  { label:'Foto 3x4', desc:'Brilhante normal',       img:IMG_PORTFOLIO_5 },
  { label:'Desenho',  desc:'Glitter brilhante',      img:IMG_PORTFOLIO_6 },
];

/* ═══════════ STATE ═══════════ */
let cfg = {
  preco_unitario: 7, extra_espelho: 2, preco_papel_fotografico: 0.50,
  promo_minimo: 2, desconto_valor: 1,
  desconto_tipo: 'reais', brindes_disponiveis: true,
  descricao_brinde: 'O que tiver aqui quero que apareça no site',
};
let qty=1, selPlast='transparente', selModelo='normal', selPapel='a4',
    selPromo='brinde', promoVisible=false, cart=[];

/* ═══════════ PARTICLES CANVAS ═══════════ */
(function initParticles(){
  const canvas = document.getElementById('particles-canvas');
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
      if(dist < 120){
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
  const items = ['Brilhante','Fosco','Glitter','Transparente','Espelho','K-pop','Anime','Pet','Casal','Foto 3x4','Desenho','Artesanal','Personalizado','Sem frete','Entrega pessoal'];
  function fill(id, offset=0){
    const el = document.getElementById(id);
    if(!el) return;
    const arr = [...items.slice(offset), ...items.slice(0,offset)];
    const doubled = [...arr,...arr,...arr,...arr];
    el.innerHTML = doubled.map(t=>`<span class="marquee-item">${t}</span>`).join('');
  }
  fill('mq1',0); fill('mq2',7);
})();

/* ═══════════ BUILD HOME ═══════════ */
(function buildHome(){
  /* Carousel */
  const c = document.getElementById('carousel');
  EXAMPLES.forEach(e=>{
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
      <div class="car-ph">
        <img src="${e.img}" alt="${e.label}">
        <span class="car-ph-lbl">${e.label}</span>
      </div>
      <div class="car-info">
        <strong>${e.label}</strong>
        <p>${e.desc}</p>
      </div>`;
    c.appendChild(card);
  });

  /* Covers grid */
  const g = document.getElementById('covers-grid');
  COVERS.forEach(cv=>{
    const card = document.createElement('div');
    card.className = 'cover-card reveal';
    card.innerHTML = `
      <div class="cover-ph">
        <img src="${cv.img}" alt="${cv.label}">
      </div>
      <div class="cover-body">
        <div class="cover-name">${cv.label}</div>
        <div class="cover-desc">${cv.desc}</div>
        ${cv.badge ? `<span class="cover-badge">${cv.badge}</span>` : ''}
      </div>`;
    g.appendChild(card);
    
    // late init for observer
    setTimeout(()=>{ document.querySelectorAll('.reveal').forEach(el=>{
      new IntersectionObserver(entries=>{
        entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
      },{threshold:.1}).observe(el);
    });},0);
  });
})();

function scrollCar(dir){
  document.getElementById('carousel').scrollBy({left:dir*260,behavior:'smooth'});
}

/* ═══════════ NAVIGATION ═══════════ */
function goOrder(){
  document.getElementById('page-home').style.display  = 'none';
  document.getElementById('page-order').style.display = 'block';
  window.scrollTo(0,0);
  loadConfig();
}
function goHome(){
  document.getElementById('page-order').style.display = 'none';
  document.getElementById('page-home').style.display  = 'block';
  window.scrollTo(0,0);
}

/* ═══════════ LOAD CONFIG ═══════════ */
async function loadConfig(){
  document.getElementById('cfg-loading').style.display = 'flex';
  document.getElementById('order-body').style.display  = 'none';
  try {
    const res  = await fetch(`${SHEETDB}?sheet=bottons`);
    const rows = await res.json();
    const conf = rows.find(r=>String(r.tipo || '').trim().toLowerCase()==='config');
    if(conf){
      cfg.preco_unitario            = parseMoney(conf.preco_unitario, cfg.preco_unitario);
      cfg.extra_espelho             = parseMoney(conf.extra_espelho, cfg.extra_espelho);
      cfg.preco_papel_fotografico   = parseMoney(conf.preco_papel_fotografico, cfg.preco_papel_fotografico);
      cfg.promo_minimo              = parseInt(conf.promo_minimo)          || cfg.promo_minimo;
      cfg.desconto_valor            = parseMoney(conf.desconto_valor, 0);
      cfg.desconto_tipo       = conf.desconto_tipo                   || 'reais';
      cfg.brindes_disponiveis = String(conf.brindes_disponiveis).toLowerCase() !== 'false' && conf.brindes_disponiveis !== '0';
      cfg.descricao_brinde    = conf.descricao_brinde                || cfg.descricao_brinde;
    }
  } catch(e){ console.warn('SheetDB: usando valores padrão', e); }
  buildOrderUI();
  document.getElementById('cfg-loading').style.display = 'none';
  document.getElementById('order-body').style.display  = 'block';
  updateSummary();
}

/* ═══════════ BUILD ORDER UI ═══════════ */
function buildOrderUI(){
  // --- COBERTURA ---
  const pp = document.getElementById('plast-pills');
  const prevPlast = document.getElementById('preview-cobertura');
  pp.innerHTML = '';
  
  COVERS.forEach(c=>{
    const b = document.createElement('button');
    b.className = 'pill' + (c.id===selPlast?' on':'');
    b.textContent = c.label;
    
    // Troca a imagem da caixa de visualização quando o mouse passa por cima (hover) ou clica no celular
    b.onmouseenter = () => prevPlast.style.backgroundImage = `url('${c.img}')`;
    b.onmouseleave = () => {
      const activeCover = COVERS.find(cv => cv.id === selPlast);
      prevPlast.style.backgroundImage = `url('${activeCover.img}')`;
    };
    
    b.onclick = ()=>{ 
      selPlast=c.id; 
      setActive(pp,b); 
      prevPlast.style.backgroundImage = `url('${c.img}')`;
      updateSummary(); 
    };
    pp.appendChild(b);
  });
  
  // Define a imagem inicial da cobertura
  prevPlast.style.backgroundImage = `url('${COVERS.find(c=>c.id===selPlast).img}')`;

  // --- PAPEL ---
  const papelPills = document.getElementById('papel-pills');
  papelPills.innerHTML = '';
  const PAPEIS = [
    { id:'a4', label:'A4' },
    { id:'fotografico', label:`Papel Fotográfico (+R$ ${fmt(cfg.preco_papel_fotografico)})` }
  ];

  PAPEIS.forEach(p=>{
    const b = document.createElement('button');
    b.className = 'pill' + (p.id===selPapel?' on':'');
    b.textContent = p.label;
    b.onclick = ()=>{
      selPapel = p.id;
      setActive(papelPills,b);
      updateSummary();
    };
    papelPills.appendChild(b);
  });

  // --- MODELOS ---
  const mp = document.getElementById('model-pills');
  const prevModel = document.getElementById('preview-modelo');
  mp.innerHTML = '';
  
  const MODELS = [
    {id:'normal', label:'Normal', img: IMG_MOD_NORMAL},
    {id:'espelho', label:`Espelho (+R$ ${fmt(cfg.extra_espelho)})`, img: IMG_MOD_ESPELHO}
  ];
  
  MODELS.forEach(m=>{
    const b = document.createElement('button');
    b.className = 'pill' + (m.id===selModelo?' on':'');
    b.textContent = m.label;
    
    // Troca a imagem da caixa de visualização quando o mouse passa por cima ou clica
    b.onmouseenter = () => prevModel.style.backgroundImage = `url('${m.img}')`;
    b.onmouseleave = () => {
      const activeModel = MODELS.find(md => md.id === selModelo);
      prevModel.style.backgroundImage = `url('${activeModel.img}')`;
    };
    
    b.onclick = ()=>{ 
      selModelo=m.id; 
      setActive(mp,b); 
      prevModel.style.backgroundImage = `url('${m.img}')`;
      updateSummary(); 
    };
    mp.appendChild(b);
  });
  
  // Define a imagem inicial do Modelo (Normal)
  prevModel.style.backgroundImage = `url('${MODELS.find(m=>m.id===selModelo).img}')`;

  document.getElementById('desc-pct-label').textContent =
    cfg.desconto_tipo==='pct' ? `Desconto de ${cfg.desconto_valor}%` : `Desconto de R$ ${fmt(cfg.desconto_valor)}`;
}

function setActive(container, btn){
  container.querySelectorAll('.pill').forEach(p=>p.classList.remove('on'));
  btn.classList.add('on');
}

/* ═══════════ QTY ═══════════ */
function changeQty(d){
  qty = Math.max(1, qty+d);
  document.getElementById('qty-disp').textContent = qty;
}

function addToCart(){
  const item = {
    id: `cart-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    qty,
    plast: selPlast,
    modelo: selModelo,
    papel: selPapel
  };
  cart.push(item);
  const info = getItemInfo(item);
  qty = 1;
  document.getElementById('qty-disp').textContent = qty;
  updatePromoBlock();
  updateSummary();
  toast(`${item.qty}x ${info.modelo} com ${info.cover} adicionado ao carrinho`);
}

function removeFromCart(id){
  cart = cart.filter(item => item.id !== id);
  updatePromoBlock();
  updateSummary();
}

function getTotalQty(){
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function getItemInfo(item){
  const cover = COVERS.find(c=>c.id===item.plast)?.label || item.plast;
  const modelo = item.modelo === 'espelho' ? 'Espelho' : 'Normal';
  const papel = item.papel === 'fotografico' ? 'Papel Fotográfico' : 'A4';
  const unit = cfg.preco_unitario + (item.modelo==='espelho'?cfg.extra_espelho:0) + (item.papel==='fotografico'?cfg.preco_papel_fotografico:0);
  const subtotal = unit * item.qty;
  return { cover, modelo, papel, unit, subtotal };
}

function describeCartItem(item, index){
  const info = getItemInfo(item);
  return `${index + 1}. ${item.qty}x ${info.modelo} | ${info.cover} | ${info.papel} — R$ ${fmt(info.subtotal)}`;
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
  
  const totalQty = getTotalQty();
  promoVisible = totalQty >= cfg.promo_minimo;

  if(promoVisible){
    block.style.display = 'block';
    nomeStep.textContent = '6';
    promoStepN.textContent = '5';
    document.getElementById('promo-block-desc').textContent =
      `Seu carrinho tem ${totalQty} bottons. A partir de ${cfg.promo_minimo}, você escolhe um benefício para o pedido inteiro:`;
      
    const brindeBtn = document.getElementById('opt-brinde');
    const notice    = document.getElementById('promo-notice');
    if(!cfg.brindes_disponiveis){
      brindeBtn.classList.add('disabled'); notice.style.display='block';
      notice.textContent='⚠️ Os brindes estão esgotados. Apenas desconto disponível.';
      if(selPromo==='brinde') selectPromo('desconto');
    } else {
      brindeBtn.classList.remove('disabled'); notice.style.display='none';
    }
  } else {
    block.style.display='none'; nomeStep.textContent='5'; selPromo='brinde';
  }
}

function selectPromo(opt){
  if(opt==='brinde' && !cfg.brindes_disponiveis) return;
  selPromo = opt;
  document.getElementById('opt-brinde').classList.toggle('on',   opt==='brinde');
  document.getElementById('opt-desconto').classList.toggle('on', opt==='desconto');
  updateSummary();
}

/* ═══════════ CÁLCULO ═══════════ */
function calcTotal(){
  let total = cart.reduce((sum, item) => sum + getItemInfo(item).subtotal, 0);
  let desc  = 0, promoLabel='—';
  if(promoVisible && selPromo==='desconto' && cfg.desconto_valor>0){
    desc  = cfg.desconto_tipo==='pct' ? total*cfg.desconto_valor/100 : cfg.desconto_valor;
    total = Math.max(0, total-desc);
    promoLabel = cfg.desconto_tipo==='pct'
      ? `💸 Desconto ${cfg.desconto_valor}% (−R$ ${fmt(desc)})`
      : `💸 Desconto R$ ${fmt(cfg.desconto_valor)}`;
  } else if(promoVisible && selPromo==='brinde'){
    promoLabel = `🎁 ${cfg.descricao_brinde} (sem alterar o total)`;
  }
  return { total, desc, promoLabel };
}

function parseMoney(value, fallback){
  const parsed = parseFloat(String(value ?? '').replace(',', '.'));
  return Number.isFinite(parsed) ? parsed : fallback;
}

function fmt(v){ return parseFloat(v).toFixed(2).replace('.',','); }

/* ═══════════ SUMMARY ═══════════ */
function updateSummary(){
  const {total,promoLabel} = calcTotal();
  const cartItems = document.getElementById('cart-items');
  const btnSend = document.getElementById('btn-send');

  cartItems.innerHTML = cart.length ? cart.map((item, index) => {
    const info = getItemInfo(item);
    return `
      <div class="cart-item">
        <div>
          <div class="cart-item-title">Botton ${index + 1} · ${item.qty}x ${info.modelo}</div>
          <div class="cart-item-details">${info.cover} · ${info.papel}</div>
          <div class="cart-item-subtotal">Subtotal: R$ ${fmt(info.subtotal)}</div>
        </div>
        <button class="cart-remove" onclick="removeFromCart('${item.id}')">Remover</button>
      </div>`;
  }).join('') : `
    <div class="cart-empty">
      <strong>Carrinho vazio</strong>
      <span>Escolha cobertura, modelo e papel. Depois clique em “Adicionar ao carrinho”.</span>
    </div>`;

  document.getElementById('s-qty').textContent    = getTotalQty();
  document.getElementById('s-promo').textContent  = promoLabel;
  document.getElementById('s-total').textContent  = 'R$ '+fmt(total);

  if(btnSend) btnSend.classList.toggle('is-disabled', !cart.length);
}

/* ═══════════ WHATSAPP + MODAL ═══════════ */
let _pendingWppUrl = '';
let _pendingOrderArgs = null;

async function sendWpp(){
  const nome = document.getElementById('nome-in').value.trim();
  if(!nome) { toast('✏️ Coloca seu nome para continuar'); return; }
  if(!cart.length) { toast('Adicione pelo menos um botton ao carrinho'); return; }
  updatePromoBlock();

  const {total,promoLabel,desc} = calcTotal();
  const itemsTxt = cart.map(describeCartItem).join('\n');
  const promoTxt = promoVisible?`\n🎉 Benefício: ${promoLabel}`:'';

  // Mensagem para reforçar o envio como documento
  const msg = `Olá! Quero fazer um pedido de botton \n\n ➢Nome: ${nome}\n\nItens:\n${itemsTxt}\n\n ➢Quantidade total: ${getTotalQty()}${promoTxt}\n ➢Total: R$ ${fmt(total)}\n\n Vou enviar a foto como documento em seguida!`;

  _pendingWppUrl      = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
  _pendingOrderArgs   = { nome, promoLabel, total, desc };

  document.getElementById('modal-backdrop').classList.add('open');
}

function closeModal(e){
  if(e.target === document.getElementById('modal-backdrop')) closeModalDirect();
}
function closeModalDirect(){
  document.getElementById('modal-backdrop').classList.remove('open');
}

async function confirmSendWpp(){
  const { nome, promoLabel, total, desc } = _pendingOrderArgs;
  await saveOrder({ nome, promoLabel, total, desc });
  window.open(_pendingWppUrl, '_blank');
  closeModalDirect();
  toast('✅ WhatsApp aberto! Lembre-se de anexar a foto como Documento.');
}

/* ═══════════ SAVE ORDER ═══════════ */
async function saveOrder({nome, promoLabel, total, desc}){
  try {
    const res = await fetch(`${SHEETDB}?sheet=compras`,{
      method:'POST', headers:{'Content-Type':'application/json'},
      body:JSON.stringify({data:[{
        data_hora:       new Date().toLocaleString('pt-BR'),
        nome_cliente:    nome,
        modelo:          summarizeCart('modelo'),
        cobertura:       summarizeCart('cobertura'),
        papel:           summarizeCart('papel'),
        quantidade:      getTotalQty(),
        beneficio:       promoVisible ? promoLabel : '—',
        desconto:        desc > 0 ? 'R$ '+fmt(desc) : '—',
        total:           'R$ '+fmt(total),
        status:          'pendente',
        origem:          'site',
        arquivo_foto:    'Enviará pelo WhatsApp'
      }]})
    });
    if(!res.ok) throw new Error(`SheetDB HTTP ${res.status}`);
  } catch(e){
    console.warn('SheetDB save error',e);
    toast('Pedido aberto no WhatsApp. Se a planilha falhar, a conversa ainda registra tudo.');
  }
}

/* ═══════════ THEME ═══════════ */
function toggleTheme(){
  const dark = document.documentElement.getAttribute('data-theme')==='dark';
  document.documentElement.setAttribute('data-theme', dark?'light':'dark');
  document.getElementById('t-ico').textContent = dark?'🌙':'☀️';
  document.getElementById('t-lbl').textContent = dark?'Escuro':'Claro';
}

/* ═══════════ TOAST ═══════════ */
function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2800);
}
