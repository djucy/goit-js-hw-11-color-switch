

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    btnStart: document.querySelector('button[data-action="start"]'),
    btnStop: document.querySelector('button[data-action="stop"]'),
    body: document.body,
};

let intervalId = null;

refs.btnStart.addEventListener('click', onBtnStartClickBodyColorChange);
refs.btnStop.addEventListener('click', onBtnStopClick);

function onBtnStartClickBodyColorChange() {
    intervalId = setInterval(() => {
        refs.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)]
    }, 1000);
    refs.btnStart.disabled = true;
};

function onBtnStopClick() {
    clearInterval(intervalId);
    refs.btnStart.disabled = false;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};