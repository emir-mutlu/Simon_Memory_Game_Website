<h1 align="center">🧠 Simon Memory</h1>

<p align="center">
  <i>Follow the colors, memorize the pattern, push the limits of your memory.</i>
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

## 🎮 About the Game

**Simon Memory** is a modern, full-screen, and portfolio-friendly web adaptation of the classic Simon game.

- A **3D-looking circular Simon board** that fills the entire page  
- Dark scene with a spotlight effect and floating colorful lights in the background  
- Score & high score display (persistent **high score via localStorage**)  
- A **full-screen intro screen** before the game starts  
- Retro-style HUD at the bottom with `quit`, `score`, and `highest` indicators  

> This repo is a great example project that demonstrates both JavaScript logic and modern UI/UX design.

---

## ✨ Features

- 🌀 **Full-screen Simon board**  
  A single circular surface with four colored segments and “Simon” written at the center.

- 💡 **Animated highlight & click effects**  
  During the sequence, segments light up; on click, they glow brighter with a pressed effect.

- 📈 **Score & High Score system**  
  - `score`: Number of completed levels  
  - `highest`: Highest score saved in the browser (via localStorage)

- 🎬 **Cinematic Game Over effect**  
  - Red explosion effect on the screen  
  - Board shake animation  
  - Returns to the intro screen with “Restart” text  

- 📱 **Responsive design**  
  - Large, impressive layout on desktop  
  - Automatically scales Simon board and HUD for smaller screens  

- 📖 **How to Play & Scores sections**  
  Rules and score info available at the bottom of the page via header links.

---

## 🧩 Gameplay

<p align="center">
  <img src="assets/simon-sequence.gif" alt="Simon Memory Sequence" width="480">
</p>

1. **When the game starts**, the colored segments light up in a sequence.  
2. First, Simon shows the sequence, then it’s your turn:  
   - Click the segments in the same order to repeat it.  
3. If you complete it correctly:  
   - A **new color** is added at the end of the sequence for the next level.  
4. If you click the wrong color:  
   - The game ends, a short “game over” animation plays, and  
   - You can restart from the intro screen.  
5. The goal:  
   - Remember the **longest sequence** possible and **beat your high score**!

---

## 🛠️ Technologies

- **HTML5** – structural foundation  
- **CSS3** – full-screen layout, gradient backgrounds, shadows, animations  
- **Vanilla JavaScript (ES6)** – game logic, score tracking, animation triggering  
- **localStorage** – persistent high score storage  

---

## 🚀 Running the Project

This project is entirely static. No build process required.

### 1. Clone

```bash
git clone https://github.com/<your_username>/simon-memory.git
cd simon-memory
Development Ideas



### 2. Run

Open the `index.html` file directly in your browser.

Or use a live server:

```bash
# With Python 3
python -m http.server 8000
# or
npx live-server

http://localhost:8000


🧪 Development Ideas

This project is also a great playground for improvements:

⏱️ Time Pressure Mode
Add a timer for each step — when time runs out, trigger game over automatically.

🔊 Sound Toggle
Add a small icon to turn sounds on/off.

🏆 Difficulty Levels

Normal: current speed

Hard: faster pattern display

Zen: endless mode with no scoring

🌐 Multi-language Support
Add a TR/EN toggle to switch the text content.




