const textarea = document.querySelector('textarea');

function autoResize() {
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
}

textarea.addEventListener('input', autoResize);

// Call once on load to set initial height
autoResize.call(textarea);