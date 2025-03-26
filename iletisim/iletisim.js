// Navbar toggle menü açma

  function toggleMenu() {
    const menu = document.querySelector('nav ul.menu');
    menu.classList.toggle('show');
}

  // Form gönderildiğinde alert mesajı gösterme

  document.getElementById("iletisimForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçilecektir.");
    this.reset();
  });
  
  // Form verilerini Firease'ye kaydetme

  document.getElementById("iletisimForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Form verilerini al
    const isim = document.getElementById("isim").value;
    const email = document.getElementById("email").value;
    const mesaj = document.getElementById("mesaj").value;
  
    // Firestore'a kaydet
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
  
  