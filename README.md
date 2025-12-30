# 🎯 Task Tracker Web App

A sleek, modern, and fully functional Task Tracker built with **Vanilla JavaScript**. This project focuses on clean state management, dynamic DOM rendering, and a premium user experience.

![Task Tracker Screenshot](file:///C:/Users/CEPL/.gemini/antigravity/brain/27e4be28-4461-4740-8e2b-f2ae5ad7002d/final_state_1767097373476.png)

## ✨ Features

- **✅ Task Management**: Create, toggle (complete/uncomplete), and delete tasks.
- **🔄 Auto-Sorting**: Completed tasks automatically move to the bottom of the list.
- **💾 Persistent Storage**: Uses `LocalStorage` to keep your tasks safe across page refreshes.
- **📊 Real-time Stats**: Live counters for pending and completed tasks.
- **🧹 Quick Clear**: One-click button to remove all completed tasks.
- **📱 Fully Responsive**: Optimized for desktop, tablets, and mobile devices.
- **🎨 Premium UI**: Dark-themed aesthetic with smooth hover effects and shake animations for errors.

## 🛠️ Technologies Used

- **HTML5**: Semantic structure.
- **CSS3**: Custom properties (variables), Flexbox, and Keyframe animations.
- **Vanilla JavaScript (ES6+)**: DOM manipulation and state management.
- **Google Fonts**: 'Outfit' for modern typography.

## 🚀 How to Run

1. **Clone the repository** (or download the files).
2. **Open `index.html`** in any modern web browser.
3. Start tracking your tasks!

## 📁 Project Structure

```text
Task-Tracker/
├── index.html    # Application structure
├── styles.css    # Modern UI styles
└── script.js    # Core logic & state management
```

## 🧠 Technical Highlights

- **Single Source of Truth**: The application state is managed by a single `tasks` array.
- **State-Driven Rendering**: The `renderTasks()` function ensures the UI stays in sync with the data.
- **Input Validation**: Prevents empty task descriptions with visual shake feedback.
- **Unique IDs**: Uses `Date.now()` to ensure unique identification for every task.

---
Built with ❤️ by Antigravity.
