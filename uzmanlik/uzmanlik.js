// Navbar toggle menü açma

function toggleMenu() {
    const menu = document.querySelector('nav ul.menu');
    menu.classList.toggle('show');
}


document.addEventListener("DOMContentLoaded", function () {
    const kartlar = document.querySelectorAll(".uzmanlik-kart");

    kartlar.forEach((kart) => {
        kart.addEventListener("click", function () {
            // Diğer açık kartları kapat
            kartlar.forEach(k => {
                if (k !== kart) k.classList.remove("aktif");
            });

            // Bu karta aktif sınıfı ekle/kaldır
            kart.classList.toggle("aktif");
        });
    });
});
