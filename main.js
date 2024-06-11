import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Audiowide"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Orbitron"
      rel="stylesheet"
      type="text/css"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Widgets</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="piano.css" />
    <link rel="stylesheet" href="clock.css" />
    <link rel="stylesheet" href="compass.css" />
    <link rel="stylesheet" href="eyes.css" />
    <link rel="stylesheet" href="spin.css" />
    <link rel="stylesheet" href="chronometer.css" />
    <link rel="stylesheet" href="counter.css" />
    <link rel="stylesheet" href="musicplayer.css" />
    <link rel="stylesheet" href="game.css" />
  </head>
  <body>
    <div class="container">
      <div class="widget-box">
        <div class="widget">
          <div class="piano">
            <div class="piano-top"></div>
            <div class="black-key-row">
              <div class="black-key"></div>
              <div class="black-key"></div>
              <div class="black-key"></div>
            </div>
            <div class="white-key-row">
              <div class="white-key"></div>
              <div class="white-key"></div>
              <div class="white-key"></div>
              <div class="white-key"></div>
              <div class="white-key"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="widget-box">
        <div class="widget">
          <div class="center">
            <div class="clock">
              <div class="numbers">
                <span>12</span>
                <span>6</span>
              </div>
              <div class="numbers">
                <span>9</span>
                <span>3</span>
              </div>
              <div class="hours"></div>
              <div class="minutes"></div>
              <div class="seconds"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="widget-box">
        <div class="widget">
          <div class="compass">
            <div class="compass-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewPort="400, 400"
              >
                <circle
                  class="circle"
                  cx="90"
                  cy="95"
                  r="65"
                  fill="none"
                  stroke-dasharray="1, 11"
                />
              </svg>
              <div class="compass-direction">
                <div class="direction">
                  <span>N</span>
                  <span>S</span>
                </div>
                <div class="direction">
                  <span>W</span>
                  <span>E</span>
                </div>
                <div class="direction-stick-x"></div>
                <div class="direction-stick-y"></div>
                <div class="compass-stick"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="widget-box">
        <div class="widget">
          <div class="eyes">
            <div class="eye">
              <div class="pupil"></div>
            </div>
            <div class="eye">
              <div class="pupil"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="widget-box">
        <div class="widget">
          <div class="spin">
            <div id="spin-message"></div>
            <div class="spin-center">
              <div class="spin-content"></div>
              <div class="spin-content"></div>
              <div class="spin-content"></div>
            </div>
            <button class="spin-button">Spin</button>
          </div>
        </div>
      </div>
      <div class="widget-box">
        <div class="widget">
          <div class="chronometer">
            <div class="chronometer-content">
              <span id="seconds">00</span>:<span id="tens">00</span>
            </div>
            <div class="chronometer-controls">
              <button class="chronometer-btn">
                <img src="photo/chronometerPlay.png" />
              </button>
              <button class="chronometer-btn">
                <img src="photo/chronometerPause.png" />
              </button>
              <button class="chronometer-btn">
                <img src="photo/chronometerReset.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="widget-box">
        <div class="widget">
          <div class="counter">
            <div class="counter-number">
              <div class="counter-content"></div>
              <div class="counter-content"></div>
              <div class="counter-content"></div>
              <div class="counter-content"></div>
            </div>
            <div class="counter-button">
              <button id="minus">-</button>
              <button id="plus">+</button>
            </div>
          </div>
        </div>
      </div>
      <div class="widget-box">
        <div class="widget">
          <div id="music-player"></div>
          <div class="song-content">
            <h4 id="song-name"></h4>
            <h5 id="song-artist"></h5>
          </div>
          <div class="song-control">
            <div id="back-btn">
              <img src="photo/backBtn.png" />
            </div>
            <div id="control-play-pause">
              <img id="play-btn" src="photo/playBtn.png" />
              <img id="pause-btn" src="photo/pauseBtn.png" />
            </div>
            <div id="forward-btn">
              <img src="photo/forwardBtn.png" />
            </div>
          </div>
          <div class="song-player">
            <audio id="song">
              <source src="" type="audio/mpeg" />
            </audio>
            <input type="range" value="0" id="progress" />
          </div>
        </div>
      </div>
      <div class="widget-box">
        <div class="widget">
          <div id="game" class="game"></div>
        </div>
      </div>
    </div>
    <!-- External libs -->
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.70.0/dist/phaser.min.js"></script>

    <!-- Internal libs -->
    <script type="text/javascript" src="piano.js"></script>
    <script type="text/javascript" src="clock.js"></script>
    <script type="text/javascript" src="eyes.js"></script>
    <script type="text/javascript" src="spin.js"></script>
    <script type="text/javascript" src="chronometer.js"></script>
    <script type="text/javascript" src="counter.js"></script>
    <script type="text/javascript" src="musicplayer.js"></script>
    <script type="text/javascript" src="game.js"></script>
  </body>
</html>

`;

setupCounter(document.querySelector("#counter"));
