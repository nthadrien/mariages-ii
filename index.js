window.onload = () => {

    const dateline = new Date('sun oct 3 2023 19:00:05 GMT+0300 (East Africa Time)');

    const sec = document.querySelector('#sec');
    const mins = document.querySelector('#min');
    const hrs = document.querySelector('#hr');
    const dys = document.querySelector('#day');

    const clockFnc = setInterval(() => {
        // get todays date
        const today = new Date();
        // time differences
        var diff = dateline.getTime() - today.getTime()

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(diff / (1000 * 60 * 60 * 24)).toString();
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString();
        var seconds = Math.floor((diff % (1000 * 60)) / 1000).toString();

        sec.innerText = seconds >= 10 ? seconds : '0' + seconds;
        mins.innerText = minutes >= 10 ? minutes : '0' + minutes;
        hrs.innerText = hours >= 10 ? hours : '0' + hours;
        dys.innerText = days >= 10 ? days : '0' + days;
    }, 1000);

    const music = document.querySelector('video');
    music.autoplaylay = true;
    music.load();
};

function toggle() {
    const h = document.querySelector('main');
    h.classList.toggle("flipAll");
};

function showIt() {
    const vid = document.querySelector('.vid-container');
    vid.classList.toggle('showme');
}
