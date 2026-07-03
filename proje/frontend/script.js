// KAYIT OLMA FONKSİYONU
function register() {

    // Inputlardan değerleri al
    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    // Boş kontrolü
    if (name === "" || email === "" || password === "") {
        alert("Tüm alanları doldur");
        return;
    }

    // Daha önce kayıtlı kullanıcıları al
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Aynı email var mı kontrol et
    let exists = users.find(u => u.email === email);
    if (exists) {
        alert("Bu e-posta zaten kayıtlı");
        return;
    }

    // Yeni kullanıcı oluştur
    let user = {
        name,
        email,
        password
    };

    // Listeye ekle
    users.push(user);

    // LocalStorage'a kaydet
    localStorage.setItem("users", JSON.stringify(users));

    alert("Kayıt başarılı, giriş yapabilirsin");

    window.location.href = "login.html";
}

// GİRİŞ YAPMA (ŞİFRE KONTROLLÜ)
function login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Kullanıcıyı bul
    let user = users.find(u => u.email === email && u.password === password);

    function checkLogin() {
    return JSON.parse(localStorage.getItem("loggedUser"));
}
    if (!user) {
        alert("E-posta veya şifre yanlış");
        return;
    }
function register() {
    alert("register çalıştı"); // TEST AMAÇLI
}
function login() {
    // burada şimdilik doğru kabul ediyoruz
    window.location.href = "index.html";
}

    // Oturum açıldı bilgisi
    localStorage.setItem("loggedUser", JSON.stringify(user));

    window.location.href = "index.html";
}
// Sayfa yüklendiğinde çalışır
document.addEventListener("DOMContentLoaded", function () {

    // İlanlarım sayfasındaysak
    if (document.getElementById("ilanListesi")) {

        // Tarayıcıdan ilanları al (yoksa boş dizi)
        let ilanlar = JSON.parse(localStorage.getItem("ilanlar")) || [];

        // HTML'deki ilan listesi alanı
        let alan = document.getElementById("ilanListesi");

        // Hiç ilan yoksa
        if (ilanlar.length === 0) {
            alan.innerHTML = "<p>Henüz ilan eklemedin.</p>";
            return;
        }

        // Her ilan için kart oluştur
        ilanlar.forEach(function (ilan) {

            // Yeni bir div oluştur
            let div = document.createElement("div");
            div.className = "ilan-kart";

            // İlan bilgilerini yaz
            div.innerHTML = `
                <h3>${ilan.baslik}</h3>
                <p>${ilan.aciklama}</p>
                <strong>Saatlik: ${ilan.ucret} TL</strong>
            `;

            // Sayfaya ekle
            alan.appendChild(div);
        });
    }
});
const ilanForm = document.getElementById("ilanForm");

if (ilanForm) {
    ilanForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const price = document.getElementById("price").value;

        const ilan = {
            title,
            description,
            price
        };

        let ilanlar = JSON.parse(localStorage.getItem("ilanlar")) || [];
        ilanlar.push(ilan);
        localStorage.setItem("ilanlar", JSON.stringify(ilanlar));

        alert("İlan başarıyla eklendi!");
        window.location.href = "my-ads.html";
    });
}


