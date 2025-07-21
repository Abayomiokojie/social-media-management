export function ThemeScript() {
  const codeToRunOnClient = `
    (function() {
      const storageKey = 'vite-ui-theme';
      const theme = localStorage.getItem(storageKey) || 'system';
      const root = document.documentElement;
      
      root.classList.remove('light', 'dark');
      
      if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
          ? 'dark' 
          : 'light';
        root.classList.add(systemTheme);
      } else {
        root.classList.add(theme);
      }
    })()
  `;

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
}
