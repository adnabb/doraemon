import { cssString } from './style.js';

const textDom = document.querySelector('.text');
const styleDom = document.querySelector('.doraemon-style');
const playButton = document.querySelector('.play');
const stopButton = document.querySelector('.stop');
const progressBar = document.querySelector('.progress-bar');

let textStartIndex = 0;
let timer = null;

const { width: finalWidth } = document.querySelector('body').getBoundingClientRect();
const updateProgress = (progress) => {
  progressBar.style.width = `${finalWidth * progress}px`;
};

const len = cssString.length;
const play = () => {
  if (timer) stop();

  timer = setInterval(() => {
    textStartIndex += 1;
    if (textStartIndex > len) {
      stop();
    } else {
      textDom.innerText = cssString.substring(0, textStartIndex);
      styleDom.innerHTML = cssString.substring(0, textStartIndex);
      updateProgress(textStartIndex / len);
      textDom.scrollTop = textDom.scrollHeight;
    }
  }, 0);
};

const stop = () => {
  window.clearInterval(timer);
  timer = null;
};

playButton.onclick = play;
stopButton.onclick = stop;
