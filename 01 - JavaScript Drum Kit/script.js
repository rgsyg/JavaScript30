window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[id="${e.code}"]`);
    const key = document.querySelector(`.key[id="${e.code}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');
    key.addEventListener('transitionend', e => {
        if (e.propertyName !== 'transform') return;
        key.classList.remove('playing');
    });
});