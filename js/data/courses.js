const courses = [
    {
        id: "algoritma",
        title: "Algoritma ve Veri Yapıları",
        description: "Temel algoritma ve veri yapılarını öğrenerek problem çözme becerilerinizi geliştirin",
        image: "algoritma.jpg",
        duration: "40 saat",
        students: "250+ öğrenci",
        level: "Başlangıç Seviye",
        category: "programlama",
        topics: [
            {
                title: "Algoritmalara Giriş",
                content: `
                    <div class="lesson-section">
                        <h2>Algoritmalara Giriş</h2>
                        <p>Algoritmaların temel kavramlarını ve problem çözmedeki önemini öğrenin.</p>
                        
                        <div class="content-block">
                            <h3>Algoritma Nedir?</h3>
                            <p>Algoritma, bir problemi çözmek için takip edilmesi gereken adımlar bütünüdür.</p>
                            <ul>
                                <li>Kesinlik: Her adım net ve anlaşılır olmalı</li>
                                <li>Sonluluk: Belirli sayıda adımda sonlanmalı</li>
                                <li>Verimlilik: Kaynakları etkin kullanmalı</li>
                                <li>Genellik: Benzer problemlere uygulanabilmeli</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            {
                title: "Temel Veri Yapıları",
                content: `
                    <div class="lesson-section">
                        <h2>Temel Veri Yapıları</h2>
                        <p>Temel veri yapılarını ve kullanım alanlarını öğrenin.</p>
                    </div>
                `
            }
        ],
        features: [
            "Temel Algoritmalar",
            "Veri Yapıları",
            "Problem Çözme"
        ]
    },
    {
        id: "python",
        title: "Python Programlama",
        description: "Sıfırdan ileri seviyeye Python programlama dilini öğrenin",
        image: "python.jpg",
        duration: "50 saat",
        students: "500+ öğrenci",
        level: "Başlangıç Seviye",
        category: "programlama",
        topics: [
            {
                title: "Python'a Giriş",
                content: `
                    <div class="lesson-section">
                        <h2>Python'a Giriş</h2>
                        <p>Python programlama dilinin temellerini ve modern programlamadaki yerini öğrenin.</p>
                        
                        <div class="content-block">
                            <h3>Python'ın Özellikleri</h3>
                            <ul>
                                <li>Okunabilir ve temiz syntax</li>
                                <li>Geniş standart kütüphane</li>
                                <li>Platform bağımsız çalışma</li>
                                <li>Büyük topluluk desteği</li>
                                <li>Veri bilimi ve yapay zeka desteği</li>
                            </ul>
                        </div>

                        <div class="code-example">
                            <h3>İlk Python Programı</h3>
                            <pre><code class="language-python">
def main():
    name = input("Adınız nedir? ")
    print(f"Merhaba, {name}!")
    
    # Basit bir hesaplama
    age = int(input("Yaşınız kaç? "))
    birth_year = 2024 - age
    print(f"{birth_year} yılında doğdunuz.")

if __name__ == "__main__":
    main()
                            </code></pre>
                        </div>
                    </div>
                `
            },
            {
                title: "Veri Tipleri ve Değişkenler",
                content: `
                    <div class="lesson-section">
                        <h2>Veri Tipleri ve Değişkenler</h2>
                        <p>Python'daki temel veri tiplerini ve değişken kullanımını öğrenin.</p>
                        
                        <div class="content-block">
                            <h3>Temel Veri Tipleri</h3>
                            <ul>
                                <li><strong>int:</strong> Tam sayılar (1, -5, 1000)</li>
                                <li><strong>float:</strong> Ondalıklı sayılar (3.14, -0.001)</li>
                                <li><strong>str:</strong> Metinsel ifadeler ("Merhaba", 'Python')</li>
                                <li><strong>bool:</strong> Mantıksal değerler (True, False)</li>
                                <li><strong>list:</strong> Listeler ([1, 2, 3])</li>
                                <li><strong>tuple:</strong> Demetler ((1, 2, 3))</li>
                                <li><strong>dict:</strong> Sözlükler ({'a': 1, 'b': 2})</li>
                            </ul>
                        </div>

                        <div class="code-example">
                            <h3>Veri Tipleri Örneği</h3>
                            <pre><code class="language-python">
# Sayısal veri tipleri
x = 42          # int
pi = 3.14159    # float

# String işlemleri
name = "Python"
version = '3.11'
full_name = f"{name} {version}"  # f-string

# Liste işlemleri
numbers = [1, 2, 3, 4, 5]
numbers.append(6)        # [1, 2, 3, 4, 5, 6]
first = numbers[0]      # 1

# Sözlük işlemleri
person = {
    "name": "Ahmet",
    "age": 25,
    "city": "İstanbul"
}
print(person["name"])   # Ahmet
                            </code></pre>
                        </div>
                    </div>
                `
            },
            {
                title: "Kontrol Yapıları",
                content: `
                    <div class="lesson-section">
                        <h2>Kontrol Yapıları</h2>
                        <p>Program akışını kontrol etmek için kullanılan yapıları öğrenin.</p>
                        
                        <div class="content-block">
                            <h3>Kontrol Yapıları</h3>
                            <ul>
                                <li>if-elif-else ifadeleri</li>
                                <li>for döngüsü</li>
                                <li>while döngüsü</li>
                                <li>break ve continue</li>
                                <li>try-except yapısı</li>
                            </ul>
                        </div>

                        <div class="code-example">
                            <h3>Kontrol Yapıları Örneği</h3>
                            <pre><code class="language-python">
# if-elif-else yapısı
def check_grade(score):
    if score >= 90:
        return "AA"
    elif score >= 80:
        return "BA"
    elif score >= 70:
        return "BB"
    else:
        return "FF"

# for döngüsü
for i in range(5):
    print(f"{i}. iterasyon")

# while döngüsü
count = 0
while count < 5:
    print(count)
    count += 1

# Hata yakalama
try:
    num = int(input("Sayı: "))
    result = 10 / num
except ValueError:
    print("Geçersiz sayı!")
except ZeroDivisionError:
    print("Sıfıra bölme hatası!")
                            </code></pre>
                        </div>
                    </div>
                `
            },
            {
                title: "Fonksiyonlar",
                content: `
                    <div class="lesson-section">
                        <h2>Fonksiyonlar</h2>
                        <p>Python'da fonksiyon tanımlama ve kullanımını öğrenin.</p>
                        
                        <div class="content-block">
                            <h3>Fonksiyon Özellikleri</h3>
                            <ul>
                                <li>Parametre tanımlama</li>
                                <li>Varsayılan değerler</li>
                                <li>Return ifadeleri</li>
                                <li>Lambda fonksiyonları</li>
                                <li>Decorator'lar</li>
                            </ul>
                        </div>

                        <div class="code-example">
                            <h3>Fonksiyon Örnekleri</h3>
                            <pre><code class="language-python">
# Basit fonksiyon
def greet(name):
    return f"Merhaba, {name}!"

# Varsayılan parametreli fonksiyon
def power(base, exp=2):
    return base ** exp

# Lambda fonksiyon
square = lambda x: x**2

# Decorator örneği
def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"Süre: {end-start:.2f} saniye")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)
    return "İşlem tamamlandı"
                            </code></pre>
                        </div>
                    </div>
                `
            }
        ],
        features: [
            "Python'a Giriş",
            "Veri Yapıları",
            "OOP",
            "Modüller"
        ]
    },
    {
        id: "javascript",
        title: "JavaScript",
        description: "Modern web uygulamaları geliştirmek için JavaScript'i derinlemesine öğrenin",
        image: "javascript.jpg",
        duration: "40 saat",
        students: "200+ öğrenci",
        level: "Orta Seviye",
        category: "web",
        topics: [
            {
                title: "JavaScript Temelleri",
                content: `
                    <div class="lesson-section">
                        <h2>JavaScript Temelleri</h2>
                        <p>Modern JavaScript'in temel kavramlarını öğrenin.</p>
                    </div>
                `
            }
        ],
        features: [
            "Modern JavaScript",
            "DOM",
            "API",
            "Asenkron"
        ]
    },
    {
        id: "web",
        title: "Web Geliştirme",
        description: "Modern web teknolojilerini öğrenerek tam donanımlı bir web geliştirici olun",
        image: "web.jpg",
        duration: "60 saat",
        students: "300+ öğrenci",
        level: "Başlangıç Seviye",
        category: "web",
        topics: [
            {
                title: "HTML Temelleri",
                content: `
                    <div class="lesson-section">
                        <h2>HTML Temelleri</h2>
                        <p>Web sayfalarının yapı taşı olan HTML'i öğrenin.</p>
                    </div>
                `
            }
        ],
        features: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Tasarım"
        ]
    },
    {
        id: "react",
        title: "React",
        description: "Modern web uygulamaları geliştirmek için React kütüphanesini kapsamlı öğrenin",
        image: "react.jpg",
        duration: "50 saat",
        students: "300+ öğrenci",
        level: "Orta Seviye",
        category: "web",
        topics: [
            {
                title: "React'e Giriş",
                content: `
                    <div class="lesson-section">
                        <h2>React'e Giriş</h2>
                        <p>React kütüphanesinin temellerini öğrenin.</p>
                    </div>
                `
            }
        ],
        features: [
            "React'e Giriş",
            "JSX",
            "Componentler",
            "State Management",
            "React Router",
            "Redux"
        ]
    },
    {
        id: "cybersecurity",
        title: "Siber Güvenlik",
        description: "Temel siber güvenlik kavramlarını öğrenerek güvenlik uzmanı olma yolunda ilk adımı atın",
        image: "cybersecurity.jpg",
        duration: "45 saat",
        students: "150+ öğrenci",
        level: "Orta Seviye",
        category: "security",
        topics: [
            {
                title: "Siber Güvenliğe Giriş",
                content: `
                    <div class="lesson-section">
                        <h2>Siber Güvenliğe Giriş</h2>
                        <p>Siber güvenliğin temel kavramlarını öğrenin.</p>
                    </div>
                `
            }
        ],
        features: [
            "Temel Güvenlik",
            "Ağ Güvenliği",
            "Etik Hacking",
            "Güvenlik Testleri"
        ]
    }
];

export default courses; 