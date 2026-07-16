const NAVBAR_OFFSET = 80;

export function smoothScrollTo(targetId) {
  const target = document.querySelector(targetId);
  if (!target) return;

  const top =
    target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

  window.scrollTo({ top, behavior: "smooth" });
}

export function handleAnchorClick(e) {
  const href = e.currentTarget.getAttribute("href");
  if (!href?.startsWith("#")) return;

  e.preventDefault();
  smoothScrollTo(href);
}
