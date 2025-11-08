<h1 align="center">🧠 Simon Memory</h1>

<p align="center">
  <i>Renkleri takip et, pattern’i ezberle, hafızanın sınırlarını zorla.</i>
</p>

<p align="center">
  <img src="assets/simon-hero.gif" alt="Simon Memory Gameplay" width="720">
</p>

<p align="center">
  <a href="https://img.shields.io/badge/status-playable-brightgreen?style=for-the-badge">
    <img src="https://img.shields.io/badge/status-playable-brightgreen?style=for-the-badge" alt="Status: playable">
  </a>
  <a href="https://img.shields.io/badge/tech-HTML%20%7C%20CSS%20%7C%20JavaScript-blueviolet?style=for-the-badge">
    <img src="https://img.shields.io/badge/tech-HTML%20%7C%20CSS%20%7C%20JavaScript-blueviolet?style=for-the-badge" alt="Tech stack">
  </a>
  <a href="https://img.shields.io/badge/mode-single%20player-orange?style=for-the-badge">
    <img src="https://img.shields.io/badge/mode-single%20player-orange?style=for-the-badge" alt="Mode: single player">
  </a>
</p>

---

## 🎮 Oyun Hakkında

**Simon Memory**, klasik Simon oyununun modern, tam ekran ve “portfolio-friendly” bir web uyarlaması.

- Ortada **tam sayfayı dolduran 3D görünümlü yuvarlak Simon tahtası**
- Koyu bir sahne üzerinde spotlight efekti ve arkada yüzen renkli ışıklar
- Skor & en yüksek skor gösterimi (localStorage ile **kalıcı high score**)
- Oyun başlamadan önce tam ekran **karşılama (intro) ekranı**
- Altta retro tarzda `quit`, `score`, `highest` HUD tasarımı

> Bu repo, hem JavaScript mantığını hem de modern UI / UX tasarımını göstermek için güzel bir örnek projedir.

---

## ✨ Özellikler

- 🌀 **Tam ekran Simon tahtası**  
  Dört renkli segment, yuvarlak bir gövde ve ortada “Simon” yazısı ile tek parça bir oyun yüzeyi.

- 💡 **Animasyonlu highlight & click efektleri**  
  Sıra gösteriminde segmentler parlayarak yanıyor; tıklayınca daha parlak ve baskılı bir efekt oluşuyor.

- 📈 **Skor & High Score sistemi**
  - `score`: Tamamlanan level sayısı
  - `highest`: Tarayıcıda saklanan en yüksek skor (localStorage)

- 🎬 **Game Over sinematik efekti**
  - Ekranda kırmızı bir patlama efekti
  - Tahtada shake animasyonu
  - Sonra karşılama ekranına “Tekrar Başla” metniyle dönüyor

- 📱 **Responsive tasarım**
  - Masaüstünde büyük, etkileyici görünüm
  - Küçük ekranlarda otomatik ölçeklenen Simon tahtası ve HUD

- 📖 **Nasıl Oynanır & Skorlar** bölümleri  
  Sayfanın alt kısmında oyunun kuralları ve skor sistemi, header’daki linklerle ulaşılabilir.

---

## 🧩 Oynanış

<p align="center">
  <img src="assets/simon-sequence.gif" alt="Simon Memory Sequence" width="480">
</p>

1. **Oyun başladığında** Simon tahtasındaki renk segmentleri sırayla yanar.
2. Önce Simon diziyi gösterir, sonra sıra sende:
   - Aynı sırayla segmentlere tıklayarak diziyi tekrar et.
3. Doğru tamamlarsan:
   - Bir sonraki level’da dizinin sonuna **yeni bir renk** eklenir.
4. Yanlış renge tıklarsan:
   - Oyun biter, kısa bir “game over” animasyonu oynar ve
   - Intro ekranından yeniden başlayabilirsin.
5. Amaç:
   - Mümkün olan **en uzun diziyi** doğru hatırlayarak **high score’u zorlamak**.

---

## 🛠️ Teknolojiler

- **HTML5** – yapısal iskelet
- **CSS3** – tam ekran layout, gradient arka plan, gölgeler, animasyonlar
- **Vanilla JavaScript (ES6)** – oyun mantığı, skor takibi, animasyon tetikleme
- **localStorage** – kalıcı high score saklama

---

## 🚀 Projeyi Çalıştırma

Bu proje tamamen statik dosyalardan oluşur. Ekstra build süreci yok.

### 1. Klonla

```bash
git clone https://github.com/<kullanıcı_adın>/simon-memory.git
cd simon-memory



2. Çalıştır

index.html dosyasını bir tarayıcıda açman yeterli.

İstersen bir canlı sunucu kullanabilirsin:

# Python 3 ile
python -m http.server 8000
# veya
npx live-server

Ardından tarayıcında şu adrese git:

http://localhost:8000


🧪 Geliştirme Fikirleri

Bu proje aynı zamanda geliştirilmeye açık bir playground:

⏱️ Zaman baskısı modu
Her adım için süre kısıtı koyup, süre dolunca otomatik game over.

🔊 Ses/Kapama ayarı
Ufak bir ikon ile sesleri aç/kapat.

🏆 Farklı zorluk seviyeleri

Normal: mevcut hız

Hard: daha hızlı pattern gösterimi

Zen: sadece skor yok, sonsuz pratik modu

🌐 Çoklu dil desteği
TR / EN toggle ile text içeriklerini değiştir.