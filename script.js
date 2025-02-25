let score = 0;

// نمایش بازی بعد از 5 ثانیه
window.onload = () => {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none"; // مخفی کردن لودینگ
        document.getElementById("game-container").style.display = "block"; // نمایش بازی
    }, 5000); // 5 ثانیه لودینگ
}

// افزایش امتیاز
function addCoin() {
    score += 1;
    document.getElementById('score').textContent = score;
}
