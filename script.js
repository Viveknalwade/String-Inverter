function reverseString() {
    const input = document.getElementById('inputString');
    const originalText = document.getElementById('originalText');
    const reversedText = document.getElementById('reversedText');
    
    const str = input.value.trim();
    
    if (str === '') {
        originalText.textContent = '';
        reversedText.textContent = '';
        return;
    }
    
    // Your exact function from the lab
    const reversed = str.split("").reverse().join("");
    
    originalText.textContent = str;
    reversedText.textContent = reversed;
    
    // Auto-focus back to input
    input.focus();
    input.select();
}

// Real-time preview as user types
document.getElementById('inputString').addEventListener('input', function() {
    reverseString();
});

// Enter key support
document.getElementById('inputString').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        reverseString();
    }
});
