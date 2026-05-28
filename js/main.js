// ハンバーガーメニュー トグル
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // ナビ内のリンクをクリックしたら閉じる
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // 画面外クリックで閉じる
  document.addEventListener('click', function (e) {
    if (!nav.classList.contains('is-open')) return;
    if (toggle.contains(e.target) || nav.contains(e.target)) return;
    nav.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });

  // ESCキーで閉じる
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
})();
