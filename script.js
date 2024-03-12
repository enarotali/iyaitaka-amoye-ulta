window.onload = function() {
    var birthdaySong = document.getElementById('birthday-song');
    var candle = document.querySelector('.candle');

    // Matikan lilin ketika lagu ulang tahun selesai
    birthdaySong.addEventListener('ended', function() {
        candle.style.animation = 'none';
        candle.style.bottom = '-100px'; // Turunkan lilin
    });
};
