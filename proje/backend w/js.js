// GİRİŞ YAPMA FONKSİYONU
// Login butonuna basıldığında çalışır
function login() {

    // Email inputundaki değeri alır
    let email = document.getElementById("email").value;

    // Şifre inputundaki değeri alır
    let password = document.getElementById("password").value;

    // Boş alan kontrolü
    if (email === "" || password === "") {
        alert("Lütfen tüm alanları doldur");
        return;
    }

    // Şimdilik gerçek kontrol yok
    // Ana sayfaya yönlendirir
    window.location.href = "index.html";
}


// İLAN OLUŞTURMA SAYFASINA GİDER
function goCreate() {
    window.location.href = "create-offer.html";
}


// İLANI KAYDEDER
function saveOffer() {

    // Inputlardan değerleri al
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;

    // Boş kontrolü
    if (title === "" || description === "" || price === "") {
        alert("Tüm alanları doldur");
        return;
    }

    // İlan objesi oluştur
    let offer = {
        title: title,
        description: description,
        price: price
    };

    // LocalStorage'a kaydet (geçici veritabanı)
    localStorage.setItem("offer", JSON.stringify(offer));

    // Ana sayfaya yönlendir
    window.location.href = "index.html";
}


// SAYFA AÇILDIĞINDA ÇALIŞIR
window.onload = function () {

    // Kaydedilmiş ilan var mı bak
    let offer = localStorage.getItem("offer");

    if (offer) {
        let data = JSON.parse(offer);

        // İlanı HTML olarak ekrana yazdır
        document.getElementById("offerList").innerHTML = `
            <hr>
            <h3>${data.title}</h3>
            <p>${data.description}</p>
            <strong>${data.price} TL / Saat</strong>
        `;
    }
}
