const form = document.getElementById("ilanForm");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // ❗ ÇOK ÖNEMLİ

    const title = document.getElementById("title").value;
    const desc = document.getElementById("description").value;
    const price = document.getElementById("price").value;

    if (!title || !desc || !price) {
        alert("Tüm alanları doldur");
        return;
    }

    // Daha önce ilan var mı?
    let ads = JSON.parse(localStorage.getItem("ads")) || [];

    // Yeni ilan
    ads.push({
        title,
        desc,
        price
    });

    localStorage.setItem("ads", JSON.stringify(ads));

    // ✅ İlanlarım sayfasına yönlendir
    window.location.href = "my-ads.html";
});