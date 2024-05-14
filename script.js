document.addEventListener("DOMContentLoaded", function() {
    const text = "Your Name";  // Replace with your name
    let index = 0;

    function type() {
        if (index < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    type();
});
