import courses from './data/courses.js';

class CourseContentManager {
    constructor() {
        this.currentCourse = null;
        this.currentTopic = null;
        this.sidebarLinks = document.querySelectorAll('.course-topics ul li a');
        this.lessonContent = document.querySelector('.lesson-content');
        
        this.init();
    }

    init() {
        const pathParts = window.location.pathname.split('/');
        const courseId = pathParts[pathParts.length - 2];
        this.currentCourse = courses.find(course => course.id === courseId);

        if (this.currentCourse) {
            this.setupSidebarLinks();
            if (this.sidebarLinks.length > 0) {
                this.loadContent(0);
            }
        }
    }

    setupSidebarLinks() {
        this.sidebarLinks.forEach((link, index) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.loadContent(index);
            });
        });
    }

    loadContent(topicIndex) {
        this.sidebarLinks.forEach(link => link.classList.remove('active'));
        this.sidebarLinks[topicIndex].classList.add('active');

        const topic = this.currentCourse.topics[topicIndex];
        let content = '<div class="lesson-section"><h2>İçerik hazırlanıyor...</h2></div>';
        
        if (topic && topic.content) {
            content = topic.content;
        } else if (typeof topic === 'string') {
            // Eğer topic sadece string ise (eski format)
            content = `
                <div class="lesson-section">
                    <h2>${topic}</h2>
                    <p>Bu bölümün içeriği yakında eklenecektir.</p>
                </div>
            `;
        }

        this.lessonContent.innerHTML = content;

        if (window.Prism) {
            Prism.highlightAll();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CourseContentManager();
}); 