export function initCourseFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.detailed-course-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Aktif buton sınıfını güncelle
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Kursları filtrele
            const filter = button.dataset.filter;
            courseCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
} 