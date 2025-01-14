import { initThemeSwitcher } from './components/theme-switcher.js';
import courses from './data/courses.js';

// Tema değiştirici başlatma
initThemeSwitcher();

// Popüler kursları yükleme
const featuredCoursesContainer = document.getElementById('featured-courses');
if (featuredCoursesContainer) {
    // Sadece ilk 3 kursu göster
    const featuredCourses = Object.values(courses).slice(0, 3);
    featuredCourses.forEach(course => {
        const courseCard = createCourseCard(course);
        featuredCoursesContainer.appendChild(courseCard);
    });
}

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.setAttribute('data-aos', 'fade-up');
    
    card.innerHTML = `
        <img src="assets/images/courses/${course.id}.jpg" alt="${course.title}">
        <h3>${course.title}</h3>
        <p class="course-description">${course.description}</p>
        <div class="course-meta">
            <span><i class="far fa-clock"></i> ${course.duration}</span>
            <span><i class="fas fa-layer-group"></i> ${course.level}</span>
        </div>
        <a href="pages/courses/${course.id}/index.html" class="course-button">Kursa Git</a>
    `;
    
    return card;
} 