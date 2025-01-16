import { initThemeSwitcher } from './components/theme-switcher.js';
import courses from './data/courses.js';

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

// Ana sayfa için - öne çıkan kursları göster
const featuredCoursesContainer = document.getElementById('featured-courses');
if (featuredCoursesContainer) {
    featuredCoursesContainer.innerHTML = '';
    // Öne çıkan kursları seçelim (örneğin: algoritma, python, cybersecurity)
    const featuredCourseIds = ['algoritma', 'python', 'cybersecurity'];
    const featuredCourses = courses.filter(course => featuredCourseIds.includes(course.id));
    
    featuredCourses.forEach(course => {
        const courseCard = createCourseCard(course);
        featuredCoursesContainer.appendChild(courseCard);
    });
}

// Kurslar sayfası için
const allCoursesContainer = document.querySelector('.courses-grid');
if (allCoursesContainer) {
    Object.values(courses).forEach(course => {
        const courseCard = createCourseCard(course);
        allCoursesContainer.appendChild(courseCard);
    });
} 