const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("filled");

    if (btn.classList.contains("filled")) {
      btn.innerHTML = "&#10084;"; // filled heart ❤
    } else {
      btn.innerHTML = "&#9825;"; // empty heart ♡
    }
  });
});

