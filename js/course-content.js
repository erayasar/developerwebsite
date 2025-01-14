import { initThemeSwitcher } from '../../../js/components/theme-switcher.js';
import courses from '../../../js/data/courses.js';

// Tema değiştirici başlatma
initThemeSwitcher();

// URL'den kurs ID'sini al
const courseId = window.location.pathname.split('/courses/')[1].split('/')[0];
const course = courses[courseId];

if (!course) {
    window.location.href = '../course-template.html';
}

// Kurs başlığı ve meta bilgilerini güncelle
document.title = `${course.title} - TechEdu`;
document.getElementById('course-title').textContent = course.title;
document.getElementById('course-duration').textContent = course.duration;
document.getElementById('course-level').textContent = course.level;

// Modülleri yükle
const modulesContainer = document.querySelector('.course-modules');
course.modules.forEach((module, moduleIndex) => {
    const moduleElement = document.createElement('div');
    moduleElement.className = 'module';
    
    moduleElement.innerHTML = `
        <div class="module-title">
            ${module.title}
            <i class="fas fa-chevron-down"></i>
        </div>
        <div class="module-lessons">
            ${module.lessons.map((lesson, lessonIndex) => `
                <a href="#" class="lesson-link" data-module="${moduleIndex}" data-lesson="${lessonIndex}">
                    ${lesson}
                </a>
            `).join('')}
        </div>
    `;
    
    modulesContainer.appendChild(moduleElement);
});

// Modül tıklama olaylarını ekle
document.querySelectorAll('.module-title').forEach(title => {
    title.addEventListener('click', () => {
        const module = title.parentElement;
        const isActive = module.classList.contains('active');
        
        // Diğer tüm modülleri kapat
        document.querySelectorAll('.module').forEach(m => {
            m.classList.remove('active');
            m.querySelector('.fa-chevron-down').style.transform = 'rotate(0deg)';
        });
        
        // Tıklanan modülü aç/kapat
        if (!isActive) {
            module.classList.add('active');
            title.querySelector('.fa-chevron-down').style.transform = 'rotate(180deg)';
        }
    });
});

// Ders tıklama olaylarını ekle
document.querySelectorAll('.lesson-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Aktif dersi güncelle
        document.querySelector('.lesson-link.active')?.classList.remove('active');
        link.classList.add('active');
        
        // Ders içeriğini yükle
        const moduleIndex = link.dataset.module;
        const lessonIndex = link.dataset.lesson;
        loadLesson(moduleIndex, lessonIndex);
    });
});

// İlk modülü aç
document.querySelector('.module').classList.add('active');
document.querySelector('.module .fa-chevron-down').style.transform = 'rotate(180deg)';

function loadLesson(moduleIndex, lessonIndex) {
    // Burada gerçek ders içeriği yüklenecek
    const content = document.getElementById('course-content');
    content.innerHTML = `
        <h2>Ders ${parseInt(moduleIndex) + 1}.${parseInt(lessonIndex) + 1}</h2>
        <p>Bu ders içeriği yakında eklenecektir.</p>
    `;
} 