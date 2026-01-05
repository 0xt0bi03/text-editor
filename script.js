const textareas = document.querySelectorAll("textarea");

function autoResize() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}

textareas.forEach(t => {
  t.addEventListener("input", autoResize);
  autoResize.call(t);   // set initial height
});
