window.onload = function() {
    setTimeout(function() {
        document.querySelector('.loading-container').style.display = 'none'; // مخفی کردن لودینگ
        document.getElementById('game-container').style.display = 'block'; // نمایش دکمه بازی
    }, 5000); // پس از 5 ثانیه
};

function startGame() {
    // تابعی که بعد از کلیک روی دکمه "شروع بازی" اجرا می‌شود.
    window.location.href = "https://yourgameurl.com";  // لینک به صفحه بازی
}
