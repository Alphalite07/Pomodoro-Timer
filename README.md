# ⚡ CYBER-SYNC // Productivity Matrix

A fully local, zero-dependency, retro-futuristic productivity timer built to maximize deep work and manage cognitive load. No API keys, no subscriptions, just pure focus.

## 🚀 The Vision
This application replaces standard Pomodoro timers with a terminal-inspired, high-contrast interface designed to eliminate distractions. It features preconfigured time-blocks based on proven biological focus rhythms.

## ⚙️ Core Features
* **Zero Dependencies:** Runs entirely in your browser. No backend databases or AI API keys required.
* **Calibration Matrices:** Four built-in focus templates:
    * `CLASSIC_POMODORO` (25m / 5m) - Baseline focus.
    * `DEEP_CORE_SPRINT` (50m / 10m) - Extended programming/writing blocks.
    * `ULTRADIAN_CYCLE` (90m / 20m) - Max biological alignment.
    * `CYBER_BURST` (15m / 3m) - Rapid task execution.
* **Manual Override:** Custom input for user-defined work/break intervals.
* **Retro-Futuristic UI:** Phosphor-green monospace typography, scanline effects, and a void-black background using Tailwind CSS.
* **Auto-Transitions:** Seamlessly switches from work phases to system cool-downs.

## 🛠️ Tech Stack
* **Framework:** Next.js (App Router)
* **Library:** React (`useState`, `useEffect`)
* **Styling:** Tailwind CSS

## 💻 How to Initialize (Local Execution)

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/Pomodoro-Timer.git](https://github.com/yourusername/Pomodoro-Timer.git)
    cd Pomodoro-Timer
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Boot the system:**
    ```bash
    npm run dev
    ```

4.  **Access the terminal:**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔊 Optional: Audio Feedback
To enable end-of-cycle alerts, simply add any short audio file named `bell.mp3` into your `public/` directory.

---
*SYS.STATUS: ONLINE // PREPARE FOR DEEP WORK*