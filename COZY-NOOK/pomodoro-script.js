// Timer functionality
let timeLeft = 1500;
let timerId = null;
let isRunning = false;
let isBreak = false;

// DOM elements
const timerDisplay = document.querySelector('.timer-display');
const timerProgress = document.querySelector('.timer-progress');
const timerLabel = document.querySelector('.timer-label');
const startButton = document.querySelector('.timer-btn.start');
const resetButton = document.querySelector('.timer-btn.reset');
const skipBtn = document.getElementById('skipBtn');
const focusTimeInput = document.getElementById('focusTime');
const breakTimeInput = document.getElementById('breakTime');

// Theme switching
const themeButtons = document.querySelectorAll('.theme-btn');
const body = document.body;

themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        themeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const theme = btn.dataset.theme;
        body.dataset.theme = theme;
        localStorage.setItem('pomodoroTheme', theme);
    });
});

// Load saved theme
const savedTheme = localStorage.getItem('pomodoroTheme') || 'classic';
body.dataset.theme = savedTheme;
themeButtons.forEach(btn => {
    if (btn.dataset.theme === savedTheme) {
        btn.classList.add('active');
    }
});

// Timer functions
// ... copy existing timer functions from bookstore-script.js ...
