const qs = (element) => document.querySelector(element);

qs('.pointer.one').classList.add("active");

qs('.pointer.one').addEventListener("click", () => {
    qs('.sliders').style.marginLeft = '0';
    qs('.one').classList.add("active");
    qs('.two').classList.remove("active");
    qs('.three').classList.remove("active");
})
qs('.pointer.two').addEventListener("click", () => {
    qs('.sliders').style.marginLeft = '-100.25vw';
    qs('.one').classList.remove("active");
    qs('.two').classList.add("active");
    qs('.three').classList.remove("active");
})
qs('.pointer.three').addEventListener("click", () => {
    qs('.sliders').style.marginLeft = '-200.50vw';
    qs('.one').classList.remove("active");
    qs('.two').classList.remove("active");
    qs('.three').classList.add("active");
})