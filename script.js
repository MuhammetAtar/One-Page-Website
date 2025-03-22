const lbx = document.querySelector("#lightbox");
const imgTag = document.querySelector("#lightbox-img");
const xBtn = document.querySelector("#close-btn");
const thumbs = document.querySelectorAll(".thumbnail");

thumbs.forEach((t) => {
    t.onclick = () => {
        imgTag.src = t.dataset.full;
        lbx.classList.add("show");
    };
});

xBtn.onclick = () => {
    lbx.classList.remove("show");
};