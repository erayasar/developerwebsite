import { initThemeSwitcher } from './components/theme-switcher.js';
import courses from './data/courses.js';

// Tema değiştirici başlatma
initThemeSwitcher();

// Kursları yükleme
const coursesContainer = document.getElementById('courses-container');
const filterButtons = document.querySelectorAll('.filter-btn');

// Tüm kursları göster
function displayCourses(category = 'all') {
    console.log('Displaying courses:', category); // Debug için
    coursesContainer.innerHTML = '';
    
    Object.values(courses).forEach(course => {
        console.log('Course:', course); // Debug için
        if (category === 'all' || course.category === category) {
            const courseCard = createCourseCard(course);
            coursesContainer.appendChild(courseCard);
        }
    });
}

// Kurs kartı oluştur
function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.setAttribute('data-aos', 'fade-up');
    
    card.innerHTML = `
        <img src="../../assets/images/courses/${course.id}.jpg" alt="${course.title}">
        <h3>${course.title}</h3>
        <p class="course-description">${course.description}</p>
        <div class="course-meta">
            <span><i class="far fa-clock"></i> ${course.duration}</span>
            <span><i class="fas fa-layer-group"></i> ${course.level}</span>
        </div>
        <div class="course-highlights">
            <h4>Öne Çıkan Konular:</h4>
            <ul>
                ${course.highlights.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        <a href="${course.id}/index.html" class="course-button">Kursa Git</a>
    `;
    
    return card;
}

// Filtreleme işlemleri
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Aktif filtre butonunu güncelle
        document.querySelector('.filter-btn.active').classList.remove('active');
        button.classList.add('active');
        
        // Kursları filtrele
        const category = button.dataset.category;
        displayCourses(category);
    });
});

// Sayfa yüklendiğinde tüm kursları göster
displayCourses(); 