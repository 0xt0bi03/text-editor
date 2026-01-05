// Modern approach using CSS Grid for auto-growing textareas
class AutoGrowTextarea {
    constructor(textarea) {
        this.textarea = textarea;
        this.wrapper = textarea.parentElement;
        this.init();
    }

    init() {
        // Update on input
        this.textarea.addEventListener('input', () => this.update());
        
        // Initial update
        this.update();
        
        // Handle paste events
        this.textarea.addEventListener('paste', () => {
            setTimeout(() => this.update(), 0);
        });
    }

    update() {
        // Update the data-value attribute which the ::after pseudo-element uses
        this.wrapper.dataset.value = this.textarea.value;
    }
}

// Initialize all textareas
document.querySelectorAll('.textarea-wrapper textarea').forEach(textarea => {
    new AutoGrowTextarea(textarea);
});

// Optional: Save to localStorage for persistence
const title = document.getElementById('title');
const content = document.getElementById('content');

// Load saved content
if (localStorage.getItem('noteTitle')) {
    title.value = localStorage.getItem('noteTitle');
    title.parentElement.dataset.value = title.value;
}
if (localStorage.getItem('noteContent')) {
    content.value = localStorage.getItem('noteContent');
    content.parentElement.dataset.value = content.value;
}

// Auto-save on input (debounced)
let saveTimeout;
function saveContent() {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
        localStorage.setItem('noteTitle', title.value);
        localStorage.setItem('noteContent', content.value);
    }, 500);
}

title.addEventListener('input', saveContent);
content.addEventListener('input', saveContent);