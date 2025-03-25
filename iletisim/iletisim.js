function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
  }  
  

  document.getElementById("iletisimFormu").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçilecektir.");
    this.reset();
  });
  