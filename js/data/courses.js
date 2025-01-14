export default {
    python: {
        id: 'python',
        title: 'Python Programlama',
        description: 'Sıfırdan ileri seviyeye Python programlama dili ve uygulama geliştirme.',
        image: '/images/courses/python.jpg',
        duration: '30+ Saat',
        level: 'Başlangıç',
        category: 'programlama',
        highlights: [
            'Python Temel Sözdizimi',
            'Nesne Yönelimli Programlama',
            'Veri Yapıları ve Algoritmalar',
            'Dosya İşlemleri ve Veritabanı',
            'Web Scraping ve Otomasyon'
        ],
        modules: [
            {
                title: 'Python\'a Giriş',
                lessons: [
                    'Python Nedir ve Neden Öğrenmeliyiz?',
                    'Kurulum ve Geliştirme Ortamı',
                    'İlk Python Programı',
                    'Değişkenler ve Veri Tipleri',
                    'Temel Operatörler'
                ]
            },
            {
                title: 'Kontrol Yapıları',
                lessons: [
                    'if-elif-else Yapısı',
                    'while Döngüsü',
                    'for Döngüsü',
                    'break ve continue',
                    'Fonksiyonlar'
                ]
            },
            {
                title: 'Veri Yapıları',
                lessons: [
                    'Listeler',
                    'Demetler (Tuples)',
                    'Sözlükler (Dictionaries)',
                    'Kümeler (Sets)',
                    'List Comprehension'
                ]
            }
        ]
    },
    algoritma: {
        id: 'algoritma',
        title: 'Algoritma ve Veri Yapıları',
        description: 'Temel algoritma kavramları ve veri yapılarının detaylı incelemesi.',
        image: '/assets/images/courses/algoritma.jpg',
        duration: '25+ Saat',
        level: 'Orta',
        category: 'programlama',
        highlights: [
            'Algoritma Analizi',
            'Temel Veri Yapıları',
            'Sıralama Algoritmaları',
            'Arama Algoritmaları',
            'Graf Algoritmaları'
        ]
    },
    webdev: {
        id: 'webdev',
        title: 'Web Geliştirme',
        description: 'Modern web teknolojileri ile sıfırdan web geliştirme.',
        image: '/assets/images/courses/web.jpg',
        duration: '40+ Saat',
        level: 'Başlangıç',
        category: 'web',
        highlights: [
            'HTML5 ve CSS3',
            'Responsive Tasarım',
            'JavaScript Temelleri',
            'DOM Manipülasyonu',
            'Web API Kullanımı'
        ],
        modules: [
            {
                title: 'HTML Temelleri',
                lessons: [
                    'Web Teknolojilerine Giriş',
                    'HTML Yapısı ve Etiketler',
                    'Metin Biçimlendirme',
                    'Linkler ve Resimler',
                    'Tablolar ve Listeler'
                ]
            },
            {
                title: 'CSS ile Tasarım',
                lessons: [
                    'CSS Seçiciler',
                    'Box Model',
                    'Flexbox Layout',
                    'Grid Layout',
                    'Responsive Tasarım'
                ]
            },
            {
                title: 'JavaScript Temelleri',
                lessons: [
                    'JavaScript\'e Giriş',
                    'DOM Manipülasyonu',
                    'Events (Olaylar)',
                    'Asenkron Programlama',
                    'API Kullanımı'
                ]
            }
        ]
    },
    javascript: {
        id: 'javascript',
        title: 'Modern JavaScript',
        description: 'Modern JavaScript özellikleri ve ileri düzey programlama teknikleri.',
        image: '/images/courses/javascript.jpg',
        duration: '35+ Saat',
        level: 'Orta',
        category: 'web',
        highlights: [
            'ES6+ Özellikleri',
            'Asenkron Programlama',
            'Modüler JavaScript',
            'Test Yazımı',
            'Performans Optimizasyonu'
        ],
        modules: [
            {
                title: 'JavaScript Temelleri',
                lessons: [
                    'JavaScript\'e Giriş',
                    'Değişkenler ve Veri Tipleri',
                    'Operatörler ve Kontrol Yapıları',
                    'Fonksiyonlar',
                    'Diziler ve Nesneler'
                ]
            },
            {
                title: 'Modern JavaScript',
                lessons: [
                    'ES6+ Yenilikleri',
                    'Arrow Functions',
                    'Destructuring',
                    'Spread ve Rest Operatörleri',
                    'Modules'
                ]
            },
            {
                title: 'Asenkron JavaScript',
                lessons: [
                    'Callbacks',
                    'Promises',
                    'Async/Await',
                    'Fetch API',
                    'Error Handling'
                ]
            }
        ]
    },
    react: {
        id: 'react',
        title: 'React.js ile Frontend Geliştirme',
        description: 'Modern frontend uygulamaları geliştirmek için React.js eğitimi.',
        image: '/images/courses/react.jpg',
        duration: '45+ Saat',
        level: 'İleri',
        category: 'web',
        highlights: [
            'React Temelleri',
            'Component Yapısı',
            'State Management',
            'Hooks API',
            'Performance Optimization'
        ],
        modules: [
            {
                title: 'React Temelleri',
                lessons: [
                    'React\'e Giriş',
                    'Create React App',
                    'JSX Syntax',
                    'Components ve Props',
                    'State ve Lifecycle'
                ]
            },
            {
                title: 'Modern React',
                lessons: [
                    'Hooks Kullanımı',
                    'Context API',
                    'React Router',
                    'Form Yönetimi',
                    'API Entegrasyonu'
                ]
            },
            {
                title: 'İleri Seviye React',
                lessons: [
                    'Redux ile State Yönetimi',
                    'Custom Hooks',
                    'Performance Optimizasyonu',
                    'Testing',
                    'Deployment'
                ]
            }
        ]
    },
    cybersecurity: {
        id: 'cybersecurity',
        title: 'Siber Güvenlik Temelleri',
        description: 'Temel siber güvenlik kavramları ve güvenli sistem geliştirme.',
        image: '/images/courses/security.jpg',
        duration: '30+ Saat',
        level: 'Başlangıç',
        category: 'security',
        highlights: [
            'Ağ Güvenliği',
            'Web Güvenliği',
            'Kriptografi',
            'Güvenlik Testleri',
            'Güvenli Kod Geliştirme'
        ],
        modules: [
            {
                title: 'Siber Güvenlik Temelleri',
                lessons: [
                    'Siber Güvenliğe Giriş',
                    'Temel Ağ Kavramları',
                    'Güvenlik Politikaları',
                    'Risk Analizi',
                    'Güvenlik Araçları'
                ]
            },
            {
                title: 'Web Güvenliği',
                lessons: [
                    'OWASP Top 10',
                    'XSS ve CSRF',
                    'SQL Injection',
                    'Güvenli Kimlik Doğrulama',
                    'HTTPS ve SSL/TLS'
                ]
            },
            {
                title: 'Güvenli Kod Geliştirme',
                lessons: [
                    'Güvenli Kodlama Prensipleri',
                    'Input Validasyonu',
                    'Güvenli Oturum Yönetimi',
                    'Kriptografi Kullanımı',
                    'Güvenlik Testleri'
                ]
            }
        ]
    }
}; 