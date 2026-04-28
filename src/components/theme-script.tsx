export function ThemeScript() {
  // Inline script to prevent flash of wrong theme on page load.
  // This is a static hardcoded string — no user input, no XSS risk.
  const themeScript = `(function(){try{var d=document.documentElement;var m=localStorage.getItem('theme');if(m==='dark'||(m!=='light'&&matchMedia('(prefers-color-scheme:dark)').matches)){d.classList.add('dark')}}catch(e){}})()`;

  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
