document.addEventListener("mousemove", (e) => {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${e.clientX}px`;
    star.style.top = `${e.clientY}px`;
    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 700);
});
