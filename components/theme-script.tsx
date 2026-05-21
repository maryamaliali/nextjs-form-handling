/**
 * Inline script to set `dark` class before paint and avoid theme flash.
 * Must run before body content; paired with ThemeToggle updating localStorage.
 */
export function ThemeScript() {
  const code = `
(function(){
  try {
    var k = 'msa-theme';
    var t = localStorage.getItem(k);
    var dark = t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {}
})();`;
  return (
    <script
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
