// ==UserScript==
// @name         AnimalFlix-Free
// @namespace    https://github.com/u5545/
// @author       u5545
// @description  Unlock full length videos on AnimalFlix
// @match        https://www.animalflix.com/video/*
// @downloadURL  https://raw.githubusercontent.com/u5545/userscripts/master/AnimalFlix-Free.user.js
// @updateURL    https://raw.githubusercontent.com/u5545/userscripts/master/AnimalFlix-Free.user.js
// @version      1.0
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
  player.configure({ source: player.playerInfo.options.source.replace("-preview", "") });
})();
