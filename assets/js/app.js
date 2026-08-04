function renderSmallProjects() {
  const grid  = document.getElementById('small-projects-grid');
  const count = document.getElementById('more-projects-count');
  if (!grid) return;

  const keys = Object.keys(SMALL_PROJECTS);
  count.textContent = keys.length + ' project' + (keys.length !== 1 ? 's' : '');

  grid.innerHTML = keys.map(id => {
    const p = SMALL_PROJECTS[id];
    const thumbHtml = p.coverImg
      ? `<img src="${p.coverImg}" alt="${p.title}" loading="eager" decoding="async">`
      : `<div class="small-card-thumb-placeholder">
           <svg width="28" height="28" viewBox="0 0 36 36" fill="none"><rect x="3" y="3" width="30" height="30" rx="2" stroke="#555" stroke-width="1.2"/><path d="M3 25l8-8 5 5 4-4 12 12" stroke="#555" stroke-width="1.2" stroke-linecap="round"/></svg>
         </div>`;
    const tagsHtml = p.tags.map(t => `<span class="small-card-tag">${t}</span>`).join('');
    return `<a class="small-card reveal" href="#" onclick="openSmallProject(event,'${id}')">
      <div class="small-card-thumb">${thumbHtml}</div>
      <div class="small-card-body">
        <div class="small-card-tags">${tagsHtml}</div>
        <div class="small-card-title">${p.title}</div>
        <p class="small-card-desc">${p.shortDesc}</p>
        <div class="small-card-footer">
          <span>${p.year}</span>
          <span class="small-card-cta">View project →</span>
        </div>
      </div>
    </a>`;
  }).join('');

  updateCarouselUI();
  runReveal();
}

function openSmallProject(e, id) {
  e.preventDefault();
  renderSmallProjectDetail(id);
  showPage('project');
  window.history.pushState({page:'project',id,isSmall:true}, '', '#' + id);
}

function renderSmallProjectDetail(id) {
  const p = SMALL_PROJECTS[id];
  if (!p) return;

  const coverHtml = p.coverImg
    ? `<img src="${p.coverImg}" alt="${p.title}" decoding="async">`
    : `<div class="detail-hero-placeholder">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="4" y="4" width="40" height="40" rx="3" stroke="#555" stroke-width="1.4"/><path d="M4 34l11-11 8 8 6-6 15 15" stroke="#555" stroke-width="1.4" stroke-linecap="round"/></svg>
        <span>Add coverImg to SMALL_PROJECTS['${id}']</span>
       </div>`;

  const galleryHtml = p.gallery && p.gallery.length > 0
    ? p.gallery.map((src, i) => `
        <div class="detail-gallery-item${i === 0 ? ' wide' : ''}">
          <img src="${src}" alt="${p.title} — image ${i+1}" loading="eager" decoding="async">
        </div>`).join('')
    : `<div class="detail-gallery-item wide">
        <div class="detail-gallery-placeholder">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="3" y="3" width="30" height="30" rx="2" stroke="#555" stroke-width="1.2"/><path d="M3 25l8-8 5 5 4-4 12 12" stroke="#555" stroke-width="1.2" stroke-linecap="round"/></svg>
          <span>Add gallery images to SMALL_PROJECTS data</span>
        </div>
       </div>`;

  const titleHtml = p.titleItalic
    ? p.title.replace(p.titleItalic, `<em>${p.titleItalic}</em>`)
    : p.title;

  const prevBtn = p.prevProject
    ? `<button class="detail-nav-btn" onclick="openSmallProjectById('${p.prevProject}')">← Previous project</button>`
    : `<span></span>`;
  const nextBtn = p.nextProject
    ? `<button class="detail-nav-btn" onclick="openSmallProjectById('${p.nextProject}')">Next project →</button>`
    : `<span></span>`;

  const tagsHtml = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
  const longDescHtml = p.longDesc.split('\n\n').map(para => `<p style="margin-bottom:1.25rem">${para}</p>`).join('');

  document.getElementById('page-project').innerHTML = `
    <div class="project-detail">
      <div class="detail-hero">
        <div class="detail-hero-text">
          <button class="detail-back" onclick="backToMoreProjects()">← Back to work</button>
          <div class="detail-tags">${tagsHtml}</div>
          <h1 class="detail-title">${titleHtml}</h1>
          <p class="detail-desc">${p.shortDesc}</p>
          <div class="detail-meta">
            <div class="detail-meta-row"><span class="detail-meta-label">Year</span><span class="detail-meta-val">${p.year}</span></div>
            <div class="detail-meta-row"><span class="detail-meta-label">Brief</span><span class="detail-meta-val">${p.brief}</span></div>
            <div class="detail-meta-row"><span class="detail-meta-label">Role</span><span class="detail-meta-val">${p.role}</span></div>
          </div>
        </div>
        <div class="detail-hero-image">${coverHtml}</div>
      </div>
      <div class="detail-body">
        <p class="detail-section-label">About the project</p>
        <div class="detail-body-text">${longDescHtml}</div>
        <p class="detail-section-label">Project images</p>
        <div class="detail-gallery">${galleryHtml}</div>
        <div class="detail-nav">${prevBtn}${nextBtn}</div>
      </div>
    </div>
    <footer>
      <span>© 2026 Trisha Bedi</span>
      <span>Graphic Design</span>
      <button class="detail-nav-btn" onclick="backToMoreProjects()" style="font-size:.7rem">← Back to portfolio</button>
    </footer>
  `;
}

function openSmallProjectById(id) {
  renderSmallProjectDetail(id);
  window.scrollTo({top:0,behavior:'instant'});
  window.history.pushState({page:'project',id,isSmall:true}, '', '#' + id);
}

function backToMoreProjects() {
  showPage('home');
  // re-open the drawer
  setTimeout(() => {
    const drawer = document.getElementById('more-projects-drawer');
    const btn    = document.getElementById('more-projects-btn');
    if (drawer && !drawer.classList.contains('open')) {
      drawer.classList.add('open');
      btn.classList.add('open');
    }
    document.getElementById('more-projects-section')?.scrollIntoView({behavior:'smooth'});
  }, 380);
}

/* ——— Carousel ——— */
let carouselIndex = 0;

function carouselStep(dir) {
  const wrap  = document.getElementById('small-track-wrap');
  const cards = wrap.querySelectorAll('.small-card');
  if (!cards.length) return;
  const total   = cards.length;
  const visible = Math.round(wrap.offsetWidth / (cards[0].offsetWidth + 24)); // 24 = gap
  carouselIndex = Math.max(0, Math.min(carouselIndex + dir, total - visible));
  const scrollTo = carouselIndex * (cards[0].offsetWidth + 24);
  wrap.scrollTo({left: scrollTo, behavior:'smooth'});
  updateCarouselUI();
}

function updateCarouselUI() {
  const wrap  = document.getElementById('small-track-wrap');
  const fill  = document.getElementById('carousel-fill');
  const pos   = document.getElementById('carousel-pos');
  const prev  = document.getElementById('carousel-prev');
  const next  = document.getElementById('carousel-next');
  if (!wrap) return;
  const cards   = wrap.querySelectorAll('.small-card');
  const total   = cards.length;
  if (!total) return;
  const visible = Math.max(1, Math.round(wrap.offsetWidth / (cards[0].offsetWidth + 24)));
  const maxIdx  = Math.max(0, total - visible);
  if (prev) prev.disabled = carouselIndex <= 0;
  if (next) next.disabled = carouselIndex >= maxIdx;
  if (fill) fill.style.width = maxIdx > 0 ? ((carouselIndex / maxIdx) * 100) + '%' : '100%';
  if (pos)  pos.textContent = (carouselIndex + 1) + ' – ' + Math.min(carouselIndex + visible, total) + ' / ' + total;
}

// Sync carousel index on manual scroll
document.addEventListener('DOMContentLoaded', () => {
  const wrap = document.getElementById('small-track-wrap');
  if (wrap) {
    let carouselFrame = 0;
    wrap.addEventListener('scroll', () => {
      if (carouselFrame) return;
      carouselFrame = requestAnimationFrame(() => {
        carouselFrame = 0;
        const cards = wrap.querySelectorAll('.small-card');
        if (cards.length) {
          carouselIndex = Math.round(wrap.scrollLeft / (cards[0].offsetWidth + 24));
          updateCarouselUI();
        }
      });
    }, {passive:true});

    // drag-to-scroll
    let isDown=false, startX, scrollLeft;
    wrap.addEventListener('mousedown', e=>{isDown=true;startX=e.pageX-wrap.offsetLeft;scrollLeft=wrap.scrollLeft});
    wrap.addEventListener('mouseleave',()=>isDown=false);
    wrap.addEventListener('mouseup',  ()=>isDown=false);
    wrap.addEventListener('mousemove', e=>{
      if(!isDown) return;
      e.preventDefault();
      wrap.scrollLeft = scrollLeft-(e.pageX-wrap.offsetLeft-startX)*1.2;
    });
  }
});

function toggleMoreProjects() {
  const btn    = document.getElementById('more-projects-btn');
  const drawer = document.getElementById('more-projects-drawer');
  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    drawer.classList.remove('open');
    btn.classList.remove('open');
  } else {
    drawer.classList.add('open');
    btn.classList.add('open');
    setTimeout(() => { updateCarouselUI(); runReveal(); }, 50);
  }
}

// Initialise on load
renderSmallProjects();

let pageTransitionTimer = 0;

function showPage(name) {
  const target = document.getElementById('page-' + name);
  const current = document.querySelector('.page.active');

  if (!target) return Promise.resolve(false);
  if (current === target) return Promise.resolve(true);

  clearTimeout(pageTransitionTimer);

  return new Promise(resolve => {
    if (!current) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'instant' });
      resolve(true);
      return;
    }

    // Keep the current page active while it fades. Removing .active here was
    // the original bug: .page immediately becomes display:none.
    current.classList.add('fade-out');
    pageTransitionTimer = window.setTimeout(() => {
      current.classList.remove('active', 'fade-out');
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'instant' });
      resolve(true);
    }, 300);
  });
}

function openProject(e, id) {
  e.preventDefault();
  renderProject(id);
  showPage('project');
  window.history.pushState({page:'project',id}, '', '#' + id);
}

window.addEventListener('popstate', e => {
  if (e.state && e.state.page === 'project') {
    if (e.state.isSmall) {
      renderSmallProjectDetail(e.state.id);
    } else {
      renderProject(e.state.id);
    }
    showPage('project');
  } else {
    showPage('home');
  }
});

/* ================================================================
   PROJECT DETAIL RENDERER
   ================================================================ */
function renderProject(id) {
  const p = PROJECTS[id];
  if (!p) return;

  const coverHtml = p.coverImg
    ? `<img src="${p.coverImg}" alt="${p.title}" decoding="async">`
    : `<div class="detail-hero-placeholder">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="4" y="4" width="40" height="40" rx="3" stroke="#555" stroke-width="1.4"/><path d="M4 34l11-11 8 8 6-6 15 15" stroke="#555" stroke-width="1.4" stroke-linecap="round"/></svg>
        <span>Cover image — add ${p.coverImg || 'a coverImg filename'} to project data</span>
       </div>`;

  const galleryHtml = p.gallery.length > 0
    ? p.gallery.map((src, i) => `
        <div class="detail-gallery-item${i === 0 ? ' wide' : ''}">
          <img src="${src}" alt="${p.title} — image ${i+1}" loading="eager" decoding="async">
        </div>`).join('')
    : `<div class="detail-gallery-item wide">
        <div class="detail-gallery-placeholder">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="3" y="3" width="30" height="30" rx="2" stroke="#555" stroke-width="1.2"/><path d="M3 25l8-8 5 5 4-4 12 12" stroke="#555" stroke-width="1.2" stroke-linecap="round"/></svg>
          <span>Add gallery images to PROJECTS data</span>
        </div>
       </div>
       <div class="detail-gallery-item">
        <div class="detail-gallery-placeholder">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="3" y="3" width="30" height="30" rx="2" stroke="#555" stroke-width="1.2"/><path d="M3 25l8-8 5 5 4-4 12 12" stroke="#555" stroke-width="1.2" stroke-linecap="round"/></svg>
          <span>Image 2</span>
        </div>
       </div>
       <div class="detail-gallery-item">
        <div class="detail-gallery-placeholder">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="3" y="3" width="30" height="30" rx="2" stroke="#555" stroke-width="1.2"/><path d="M3 25l8-8 5 5 4-4 12 12" stroke="#555" stroke-width="1.2" stroke-linecap="round"/></svg>
          <span>Image 3</span>
        </div>
       </div>`;

  const titleHtml = p.titleItalic
    ? p.title.replace(p.titleItalic, `<em>${p.titleItalic}</em>`)
    : p.title;

  const prevBtn = p.prevProject
    ? `<button class="detail-nav-btn" onclick="openProjectById('${p.prevProject}')">← Previous project</button>`
    : `<span></span>`;
  const nextBtn = p.nextProject
    ? `<button class="detail-nav-btn" onclick="openProjectById('${p.nextProject}')">Next project →</button>`
    : `<span></span>`;

  const tagsHtml = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
  const longDescHtml = p.longDesc.split('\n\n').map(para => `<p style="margin-bottom:1.25rem">${para}</p>`).join('');

  document.getElementById('page-project').innerHTML = `
    <div class="project-detail">
      <div class="detail-hero">
        <div class="detail-hero-text">
          <button class="detail-back" onclick="showPage('home')">← Back to work</button>
          <div class="detail-tags">${tagsHtml}</div>
          <h1 class="detail-title">${titleHtml}</h1>
          <p class="detail-desc">${p.shortDesc}</p>
          <div class="detail-meta">
            <div class="detail-meta-row"><span class="detail-meta-label">Year</span><span class="detail-meta-val">${p.year}</span></div>
            <div class="detail-meta-row"><span class="detail-meta-label">Brief</span><span class="detail-meta-val">${p.brief}</span></div>
            <div class="detail-meta-row"><span class="detail-meta-label">Role</span><span class="detail-meta-val">${p.role}</span></div>
          </div>
        </div>
        <div class="detail-hero-image">${coverHtml}</div>
      </div>
      <div class="detail-body">
        <p class="detail-section-label">About the project</p>
        <div class="detail-body-text">${longDescHtml}</div>
        <p class="detail-section-label">Project images</p>
        <div class="detail-gallery">${galleryHtml}</div>
        <div class="detail-nav">${prevBtn}${nextBtn}</div>
      </div>
    </div>
    <footer>
      <span>© 2026 Trisha Bedi</span>
      <span>Graphic Design</span>
      <button class="detail-nav-btn" onclick="showPage('home')" style="font-size:.7rem">← Back to portfolio</button>
    </footer>
  `;
  // rebind cursor events on new elements
}

function openProjectById(id) {
  renderProject(id);
  window.scrollTo({top:0,behavior:'instant'});
  window.history.pushState({page:'project',id}, '', '#' + id);
}

/* ================================================================
   CURSOR
   ================================================================ */
const c1 = document.getElementById('c1');
let pointerX = -100;
let pointerY = -100;
let cursorScale = 1;
let cursorFrame = 0;

function paintCursor() {
  cursorFrame = 0;
  if (!c1) return;
  c1.style.transform = `translate3d(${pointerX - 8}px, ${pointerY - 13}px, 0) scale(${cursorScale})`;
}

function scheduleCursorPaint() {
  if (!cursorFrame) cursorFrame = requestAnimationFrame(paintCursor);
}

document.addEventListener('pointermove', event => {
  pointerX = event.clientX;
  pointerY = event.clientY;
  scheduleCursorPaint();
}, { passive: true });

// Event delegation also covers project links injected after page load.
document.addEventListener('pointerover', event => {
  const interactive = event.target.closest('a, button');
  if (interactive && !interactive.contains(event.relatedTarget)) {
    cursorScale = 1.15;
    scheduleCursorPaint();
  }
});

document.addEventListener('pointerout', event => {
  const interactive = event.target.closest('a, button');
  if (interactive && !interactive.contains(event.relatedTarget)) {
    cursorScale = 1;
    scheduleCursorPaint();
  }
});
/* ================================================================
   NAV SCROLL
   ================================================================ */
const nav = document.getElementById('nav');
let navFrame = 0;
window.addEventListener('scroll', () => {
  if (navFrame) return;
  navFrame = requestAnimationFrame(() => {
    navFrame = 0;
    nav?.classList.toggle('scrolled', scrollY > 60);
  });
}, { passive: true });

/* NAVIGATION — jQuery is local, so this also works without a CDN. */
$(function () {
  $('#nav-home').on('click', async function (event) {
    event.preventDefault();
    await showPage('home');
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  });

  $('[data-home-section]').on('click', async function (event) {
    event.preventDefault();
    const sectionId = this.dataset.homeSection;
    await showPage('home');
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  });
});

/* Reveal is deliberately fail-safe: content is never hidden while waiting
   for viewport observation or while returning to an already visited area. */
function runReveal() {
  document.querySelectorAll('.reveal').forEach(element => element.classList.add('in'));
}
runReveal();

/* ================================================================
   CONTACT FORM
   ================================================================ */
function handleSubmit(e){
  e.preventDefault();
  const btn=e.target.querySelector('.form-submit');
  btn.textContent='Sent ✓';
  btn.style.background='#2a5c3a';
  btn.disabled=true;
}
