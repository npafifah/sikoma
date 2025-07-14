const quotes = [
  "Hari ini adalah awal baru, bukan sisa dari kemarin.",
  "Kamu tidak harus produktif untuk menjadi berharga.",
  "Self-care bukan egois. Itu penting.",
  "Tenang bukan berarti lemah — itu adalah kekuatan batin.",
  "Kamu cukup, bahkan saat sedang tidak baik-baik saja.",
  "Beristirahat bukan kemunduran. Itu bagian dari pertumbuhan."
];

window.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("quote");
  const random = Math.floor(Math.random() * quotes.length);
  el.textContent = `"${quotes[random]}"`;
});

