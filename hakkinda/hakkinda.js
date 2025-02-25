document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".date-btn");
    const contents = document.querySelectorAll(".content");

    function showContent(button) {
        const target = button.getAttribute("data-content");

        // Önce tüm içerikleri gizle
        contents.forEach(content => content.classList.remove("active"));

        // Seçilen içeriği göster
        document.getElementById(target).classList.add("active");

        // Tüm butonlardan "active" sınıfını kaldır
        buttons.forEach(btn => btn.classList.remove("active"));

        // Seçili butona "active" sınıfı ekle
        button.classList.add("active");
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => showContent(button));   // Click ile aç
        button.addEventListener("mouseenter", () => showContent(button)); // Hover ile aç
    });
});
