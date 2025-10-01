// @ts-nocheck
// Super mini widget: 1 FAB -> mini-menu (thème + taille)
(() => {
  const K_THEME = 'app_theme';       // 'auto' | 'dark' | 'light'
  const K_FONT  = 'app_font_px';     // nombre px
  const MIN = 13, MAX = 22, STEP = 1, DEF = 16;

  // inject UI
  function inject() {
    // FAB
    let fab = document.getElementById('aw-fab');
    if (!fab) {
      fab = document.createElement('button');
      fab.id = 'aw-fab';
      fab.type = 'button';
      fab.className = 'aw-fab';
      fab.setAttribute('aria-label', 'Préférences d’affichage');
      fab.setAttribute('aria-haspopup', 'menu');
      fab.setAttribute('aria-expanded', 'false');
      fab.title = 'Affichage (thème & taille)';
      fab.textContent = '🛠️';
      document.body.appendChild(fab);
    }

    // MENU
    let menu = document.getElementById('aw-menu');
    if (!menu) {
      menu = document.createElement('div');
      menu.id = 'aw-menu';
      menu.setAttribute('role', 'menu');
      menu.setAttribute('aria-label', 'Préférences d’affichage');

      menu.innerHTML = [
        '<div class="aw-sec">',
          '<h4>Thème</h4>',
          '<div class="aw-row">',
            '<button class="aw-btn" id="aw-theme-auto"  type="button" role="menuitemradio" aria-checked="false" title="Thème automatique">Auto</button>',
            '<button class="aw-btn" id="aw-theme-dark"  type="button" role="menuitemradio" aria-checked="false" title="Thème sombre">Sombre</button>',
            '<button class="aw-btn" id="aw-theme-light" type="button" role="menuitemradio" aria-checked="false" title="Thème clair">Clair</button>',
          '</div>',
        '</div>',
        '<div class="aw-sep" aria-hidden="true"></div>',
        '<div class="aw-sec">',
          '<h4>Taille du texte</h4>',
          '<div class="aw-row">',
            '<button class="aw-btn" id="aw-font-dec" type="button" role="menuitem" title="Diminuer">−</button>',
            '<button class="aw-btn" id="aw-font-def" type="button" role="menuitem" title="Par défaut">A</button>',
            '<button class="aw-btn" id="aw-font-inc" type="button" role="menuitem" title="Augmenter">+</button>',
          '</div>',
        '</div>'
      ].join('');
      document.body.appendChild(menu);
    }

    return { fab, menu,
      bAuto: menu.querySelector('#aw-theme-auto'),
      bDark: menu.querySelector('#aw-theme-dark'),
      bLight: menu.querySelector('#aw-theme-light'),
      bDec: menu.querySelector('#aw-font-dec'),
      bDef: menu.querySelector('#aw-font-def'),
      bInc: menu.querySelector('#aw-font-inc')
    };
  }

  // state
  let theme = localStorage.getItem(K_THEME) || 'auto';
  let fontPx = parseInt(localStorage.getItem(K_FONT) || String(DEF), 10);
  if (Number.isNaN(fontPx)) fontPx = DEF;

  // apply
  function applyTheme(t) {
    const body = document.body;
    body.classList.remove('theme-dark', 'theme-light');
    if (t === 'dark') body.classList.add('theme-dark');
    if (t === 'light') body.classList.add('theme-light');
    localStorage.setItem(K_THEME, t);
    theme = t;
  }
  function applyFont(px) {
    fontPx = Math.max(MIN, Math.min(MAX, px));
    document.documentElement.style.setProperty('--app-font-size', fontPx + 'px');
    localStorage.setItem(K_FONT, String(fontPx));
  }
  function syncThemeButtons(refs) {
    const map = { auto: refs.bAuto, dark: refs.bDark, light: refs.bLight };
    [refs.bAuto, refs.bDark, refs.bLight].forEach(b => {
      b.setAttribute('aria-checked', 'false');
      b.setAttribute('aria-pressed', 'false');
    });
    const btn = map[theme];
    if (btn) {
      btn.setAttribute('aria-checked', 'true');
      btn.setAttribute('aria-pressed', 'true');
    }
  }

  // menu controls
  function openMenu(refs) {
    refs.menu.dataset.open = 'true';
    refs.fab.setAttribute('aria-expanded', 'true');
    // focus first item
    refs.bAuto.focus();
    // outside click close
    setTimeout(() => {
      document.addEventListener('mousedown', onDocDown, { once: true });
      document.addEventListener('keydown', onKeyNav);
    }, 0);
  }
  function closeMenu(refs) {
    delete refs.menu.dataset.open;
    refs.fab.setAttribute('aria-expanded', 'false');
    refs.fab.focus();
    document.removeEventListener('keydown', onKeyNav);
  }
  function onDocDown(e) {
    const menu = document.getElementById('aw-menu');
    const fab = document.getElementById('aw-fab');
    if (!menu || !fab) return;
    if (!menu.contains(e.target) && e.target !== fab) {
      menu.removeAttribute('data-open');
      fab.setAttribute('aria-expanded', 'false');
    }
  }
  function onKeyNav(e) {
    const menu = document.getElementById('aw-menu');
    if (!menu || menu.dataset.open !== 'true') return;
    const items = menu.querySelectorAll('.aw-btn');
    const list = Array.from(items);
    const current = document.activeElement;
    const idx = list.indexOf(current);
    // Esc to close
    if (e.key === 'Escape') {
      e.preventDefault();
      menu.removeAttribute('data-open');
      const fab = document.getElementById('aw-fab');
      fab?.setAttribute('aria-expanded', 'false');
      fab?.focus();
      document.removeEventListener('keydown', onKeyNav);
      return;
    }
    // Arrow nav
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault(); (list[idx + 1] || list[0]).focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault(); (list[idx - 1] || list[list.length - 1]).focus();
    }
  }

  // init
  function init() {
    const refs = inject();
    // initial apply
    applyTheme(theme);
    applyFont(fontPx);
    syncThemeButtons(refs);

    // open/close
    refs.fab.addEventListener('click', () => {
      const open = refs.menu.dataset.open === 'true';
      if (open) closeMenu(refs); else { syncThemeButtons(refs); openMenu(refs); }
    });

    // theme actions
    refs.bAuto.addEventListener('click', () => { applyTheme('auto'); syncThemeButtons(refs); });
    refs.bDark.addEventListener('click', () => { applyTheme('dark'); syncThemeButtons(refs); });
    refs.bLight.addEventListener('click', () => { applyTheme('light'); syncThemeButtons(refs); });

    // font actions
    refs.bDec.addEventListener('click', () => applyFont(fontPx - STEP));
    refs.bDef.addEventListener('click', () => applyFont(DEF));
    refs.bInc.addEventListener('click', () => applyFont(fontPx + STEP));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
