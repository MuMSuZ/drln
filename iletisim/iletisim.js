// Navbar toggle menü açma

  function toggleMenu() {
    const menu = document.querySelector('nav ul.menu');
    menu.classList.toggle('show');
}
  
  
// Firebase Firestore bağlantısı

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("iletisimForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const isim = document.getElementById("isim").value;
    const email = document.getElementById("email").value;
    const mesaj = document.getElementById("mesaj").value;

    console.log("isim:", isim);
    console.log("email:", email);
    console.log("mesaj:", mesaj);

    db.collection("iletisim_mesajlari").add({
      isim: isim,
      email: email,
      mesaj: mesaj,
      tarih: new Date()
    })
    .then(function () {
      alert("Mesajınız başarıyla gönderildi!");
      document.getElementById("iletisimForm").reset();
    })
    .catch(function (error) {
      console.error("Hata oluştu:", error);
      alert("Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin.");
    });
  });
});

  