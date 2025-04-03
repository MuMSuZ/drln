// Firebase yapılandırma
const firebaseConfig = {
  apiKey: "AIzaSyAmAyWaz6pIHHzfeiqmFEUHYjfyI0YDWGg",
  authDomain: "comment-c7376.firebaseapp.com",
  projectId: "comment-c7376",
  storageBucket: "comment-c7376.firebasestorage.app",
  messagingSenderId: "277535205283",
  appId: "1:277535205283:web:bfae76906c842df587dc16",
  measurementId: "G-SS65WNDZVT"
};

// Firebase'i başlat
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Formdan veri alma ve kaydetme
const form = document.getElementById('yorumForm');
const yorumListesi = document.getElementById('yorumListesi');

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const isim = document.getElementById('isim').value || "Anonim";
  const yorum = document.getElementById('yorum').value;

  if (yorum.trim() === "") return;

  await db.collection("yorumlar").add({
    isim: isim,
    yorum: yorum,
    tarih: firebase.firestore.FieldValue.serverTimestamp()
  });

  form.reset();
});

// Yorumları Firestore'dan çekip listele
db.collection("yorumlar")
  .orderBy("tarih", "desc")
  .onSnapshot((snapshot) => {
    yorumListesi.innerHTML = "";
    snapshot.forEach((doc) => {
      const data = doc.data();
      const div = document.createElement("div");
      div.className = "yorum-kart";
      div.innerHTML = `
        <p class="yorum-metin">“${data.yorum}”</p>
        <div class="yorum-footer"><span class="hasta-isim">– ${data.isim}</span></div>
      `;
      yorumListesi.appendChild(div);
    });
  });

  
// Swiper.js ile uzmanlık alanları için slider oluşturma

    const swiper = new Swiper(".uzmanlikSwiper", {
      slidesPerView: 4,
      spaceBetween: 24,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 }
      }
    });
  

