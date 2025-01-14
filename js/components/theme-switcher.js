export function initThemeSwitcher() {
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Sayfa yüklendiğinde tema kontrolü
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-theme');
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }

    // Tema değiştirme butonu tıklama olayı
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-theme');
        const icon = themeToggle.querySelector('i');
        
        if (isDark) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
} 