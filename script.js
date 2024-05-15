document.addEventListener('DOMContentLoaded', () => {
    const nickname = "nick_";
    let index = 0;
    const nicknameElement = document.getElementById('nickname');
    
    function typeNickname() {
        if (index < nickname.length) {
            nicknameElement.innerHTML += nickname.charAt(index);
            index++;
            setTimeout(typeNickname, 200);
        } else {
            blinkCursor();
        }
    }

    function blinkCursor() {
        setInterval(() => {
            if (nicknameElement.innerHTML.endsWith('_')) {
                nicknameElement.innerHTML = nicknameElement.innerHTML.slice(0, -1);
            } else {
                nicknameElement.innerHTML += '_';
            }
        }, 500);
    }

    typeNickname();
});

// Keypress sound effects
document.addEventListener('keydown', () => {
    const audio = new Audio('keypress.mp3');
    audio.play();
});
