const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),
};
let intervalId = null;
const SWITCH_INTERVAL = 1000;
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const onStartSwitchInterval = () => {
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
        refs.startBtn.disabled = true
    },
        SWITCH_INTERVAL);
}
const onStopSwitchColor = () => {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
};
refs.startBtn.addEventListener('click', onStartSwitchInterval);
refs.stopBtn.addEventListener('click', onStopSwitchColor);