// Get the elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll(`[type='range']`);
const skipButtons = player.querySelectorAll('[data-skip]');

// Create the functions
function playVideo(){
    const videoState = video.paused ? 'play' : 'pause';
    video[videoState]();
}

function updateButton(){
    const icon = video.paused ? "►" : "⏸";
    toggle.textContent = icon;
}

function updateProgress(){
    const currentProgress = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${currentProgress}%`;
}

function handleRanges(){
    video[this.name] = this.value;
    console.log('mousemove');
}

function handleProgress(e){
    const currentTimeOnClick = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = currentTimeOnClick;
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

// Hook up the events
video.addEventListener('click', playVideo);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', updateProgress);
toggle.addEventListener('click', playVideo);

ranges.forEach((range) => range.addEventListener('change', handleRanges))
ranges.forEach((range) => range.addEventListener('mousemove', handleRanges));


skipButtons.forEach((skipButton) => skipButton.addEventListener('click', skip))

let mouseClicked = false;
progress.addEventListener('click', handleProgress);
progress.addEventListener('mouseup', () => mouseClicked = false);
progress.addEventListener('mousedown', () => mouseClicked = true);
progress.addEventListener('mousemove', (e) => mouseClicked && handleProgress(e));