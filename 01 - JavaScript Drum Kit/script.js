window.addEventListener('keydown', (e) => {
    playAudio(e);
    manageTransition(e);
});

function playAudio(e){
    const audio = document.querySelector(`audio[id="${e.code}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
}

function manageTransition(e){
    const key = document.querySelector(`.key[id="${e.code}"]`);

    if (!key) return;

    key.classList.add('playing');

    key.addEventListener('transitionend', e => {
        if (e.propertyName !== 'transform') return;
        key.classList.remove('playing');
    });
}