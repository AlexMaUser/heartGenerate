const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", function (e) {
  // coords for future span element
  const x = e.clientX;
  const y = e.clientY;

  // create span element
  const spanEl = document.createElement("span");
  let a = spanEl.style;
  spanEl.style.left = x + "px";
  spanEl.style.top = y + "px";

  // append the new element span to the body html
  bodyEl.appendChild(spanEl);

  // random size for hearts/span elements
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  // delete the span elements after 3 seconds
  setTimeout(function () {
    spanEl.remove();
  }, 3000);
  console.log(a);
});
