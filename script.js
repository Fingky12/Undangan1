document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

const beranda = document.querySelector(".beranda");
const fitur = document.querySelector(".fitur-wrapper");

document.getElementsById("beranda").addEventListener("click", () => {
  document.querySelector("beranda").scrollIntoView({
        behavior: "smooth"  // biar scroll halus
    });
});
document.getElementsById("fitur").addEventListener("click", () => {
  document.querySelector("fitur").scrollIntoView({
        behavior: "smooth"  // biar scroll halus
    });
});
document.getElementsById("beranda").addEventListener("click", () => {
  document.querySelector("beranda").scrollIntoView({
        behavior: "smooth"  // biar scroll halus
    });
});