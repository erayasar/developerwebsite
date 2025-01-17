import courses from './data/courses.js';
import { initThemeSwitcher } from './components/theme-switcher.js';

// Tema değiştirici başlatma
initThemeSwitcher();

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.setAttribute('data-aos', 'fade-up');
    
    card.innerHTML = `
        <img src="/assets/images/courses/${course.id}.jpg" alt="${course.title}" class="course-image">
        <div class="course-content">
            <h3 class="course-title">${course.title}</h3>
            <div class="course-meta">
                <span><i class="fas fa-clock"></i> ${course.duration}</span>
                <span><i class="fas fa-user-graduate"></i> ${course.students}</span>
            </div>
            <ul class="featured-topics">
                ${course.features.map(topic => `<li>${topic}</li>`).join('')}
            </ul>
        </div>
        <div class="course-footer">
            <a href="/pages/courses/${course.id}/index.html" class="course-button">
                Kursa Git <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `;
    
    return card;
}

// Kursları kategoriye göre filtrele
function filterCourses(category) {
    const filteredCourses = category === 'all' 
        ? courses 
        : courses.filter(course => course.category === category);
    
    displayCourses(filteredCourses);
}

// Kursları görüntüle
function displayCourses(coursesToShow) {
    const coursesContainer = document.getElementById('all-courses');
    if (!coursesContainer) return;

    coursesContainer.innerHTML = '';
    coursesToShow.forEach(course => {
        const courseCard = createCourseCard(course);
        coursesContainer.appendChild(courseCard);
    });
}

// Filtre butonlarını ayarla
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (!filterButtons.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const category = button.dataset.category;
            filterCourses(category);
        });
    });
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    const coursesContainer = document.getElementById('all-courses');
    if (coursesContainer) {
        setupFilterButtons();
        filterCourses('all'); // Başlangıçta tüm kursları göster
    }
}); 