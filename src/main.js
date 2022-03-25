import cssString from "./css";
const player = {
    n: 1,
    time: 50,
    styleString: "",
    timer: undefined,
    init: () => {
        player.bindEvents();
        player.play();
    },
    domUI: {
        style: document.querySelector(".style"),
        test: document.querySelector(".test")
    },
    events: {
        "#btnPause": "pause",
        "#btnPlay": "play",
        "#btnSlow": "slow",
        "#btnNormal": "normal",
        "#btnFast": "fast"
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                document.querySelector(key).onclick = player[player.events[key]];
            }
        }
    },
    run: () => {
        player.n += 1;
        if (parseInt(player.n) >= cssString.length) {
            player.pause();
            return;
        }

        if (cssString[player.n] === "\n") {
            player.styleString += "<br>";
        } else if (cssString[player.n] === " ") {
            player.styleString += "&nbsp;";
        } else {
            player.styleString += cssString[player.n];
        }

        player.domUI.test.innerHTML = player.styleString;
        player.domUI.style.innerHTML = cssString.substring(0, player.n);
        player.domUI.test.scrollTop = player.domUI.test.scrollHeight;
    },
    play: () => {
        player.pause();
        player.timer = setInterval(player.run, player.time);
    },
    pause: () => {
        player.timer && window.clearInterval(player.timer);
    },
    slow: () => {
        player.pause();
        player.time = 200;
        player.play();
    },
    normal: () => {
        player.pause();
        player.time = 50;
        player.play();
    },
    fast: () => {
        player.pause();
        player.time = 0;
        player.play();
    }
};
player.init();



