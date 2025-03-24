document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".date-btn");
    const contents = document.querySelectorAll(".content");
    const contentBox = document.querySelector(".content-box");

    function showContent(button) {
        const target = button.getAttribute("data-content");

        // Eğer content-box gizliyse, aç
        contentBox.classList.add("active");

        // Önce tüm içerikleri gizle
        contents.forEach(content => content.classList.remove("active"));

        // Seçilen içeriği göster
        document.getElementById(target).classList.add("active");

        // Tüm butonlardan "active" sınıfını kaldır
        buttons.forEach(btn => btn.classList.remove("active"));

        // Seçili butona "active" sınıfı ekle
        button.classList.add("active");

        // Butonun konumunu al
        const buttonRect = button.getBoundingClientRect();
        const offset = window.scrollY + buttonRect.top - 20; // Kayma miktarını ayarla

        // İçeriğin olduğu kutuya otomatik olarak kaydır, ancak butonlar görünür kalacak
        window.scrollTo({
            top: offset,
            behavior: "smooth",
        });
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => showContent(button));   // Click ile aç
        button.addEventListener("mouseenter", () => showContent(button)); // Hover ile aç
    });
});


// Modal açma ve kapatma

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeModal = document.querySelector(".close");

    // Sayfa yüklendiğinde modalın kapalı olmasını sağla
    modal.style.display = "none";

    // Sertifika resimlerine tıklanınca modalı aç
    document.querySelectorAll(".content-box img, .sertifika img, .galeri img").forEach(img => {
        img.addEventListener("click", function () {
            if (modal.style.display !== "flex") {
                modal.style.display = "flex";
                modalImg.src = this.src;
            }
        });
    });

    // Kapatma butonuna tıklanınca modalı kapat
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Modal dışında bir yere tıklanınca kapatma
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});


function toggleMenu() {
    const menu = document.querySelector('nav ul.menu');
    menu.classList.toggle('show');
}

/* Resme tıklanda tam ekran yapma
document.querySelectorAll(".sertifika img").forEach(img => {
    img.addEventListener("click", function () {
        if (this.requestFullscreen) {
            this.requestFullscreen();
        }
    });
});
*/


